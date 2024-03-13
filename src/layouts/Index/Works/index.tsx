'use client'

import { Work, yearMonthToDate } from '@/utils/microcmsResources'
import * as styles from './index.css'
import QueryButton from './QueryButton'
import { useEffect, useMemo, useRef, useState } from 'react'
import WorkCard from './WorkCard'

type SortBy = 'confidence' | 'recent'

export type WorksProps = {
  works: Work[]
}

export const Works: React.FC<WorksProps> = ({ works }) => {
  const [sortBy, setSortBy] = useState<SortBy>('confidence')
  const [filter, setFilter] = useState<string[]>([])
  const animationRef = useRef(0)
  const workCardListRef = useRef<HTMLDivElement>(null)
  const queryContainerRef = useRef<HTMLDivElement>(null)
  const [showQueryHeader, setShowQueryHeader] = useState(false)
  useEffect(() => {
    const animationFrame = () => {
      const workCardList = workCardListRef.current
      if (workCardList) {
        const workCardListBoundingRect = workCardList.getBoundingClientRect()
        if (
          workCardListBoundingRect.top < 0 &&
          workCardListBoundingRect.bottom > window.innerHeight
        )
          setShowQueryHeader(true)
        else setShowQueryHeader(false)
      }
      animationRef.current = requestAnimationFrame(animationFrame)
    }
    animationFrame()

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [])

  const tags = useMemo(() => {
    const tags: { [key: string]: number } = {}
    works.forEach((work) => {
      work.tags.forEach((tag) => {
        tags[tag] = (tags[tag] ?? 0) + 1
      })
    })
    return Object.entries(tags)
      .sort((a, b) => b[1] - a[1])
      .map(([tag]) => tag)
  }, [works])

  const sortedWorks = useMemo(() => {
    if (sortBy === 'confidence') return works

    return [...works].sort((a, b) => {
      return (
        yearMonthToDate(b.dateRange[1] ?? b.dateRange[0]).getTime() -
        yearMonthToDate(a.dateRange[1] ?? a.dateRange[0]).getTime()
      )
    })
  }, [works, sortBy])

  const filteredWorks = useMemo(() => {
    if (filter.length === 0) return sortedWorks

    return sortedWorks.filter((work) => {
      return work.tags.some((tag) => filter.includes(tag))
    })
  }, [sortedWorks, filter])

  const scrollToQueryContainer = () => {
    const queryContainer = queryContainerRef.current
    if (queryContainer && showQueryHeader) {
      scrollTo({
        top: queryContainer.getBoundingClientRect().top + window.scrollY - 12,
        behavior: 'smooth',
      })
    }
  }

  const toggleSortBy = (sortBy: SortBy) => {
    setSortBy(sortBy)
    scrollToQueryContainer()
  }

  const toggleFilter = (tag: string) => {
    if (filter.includes(tag)) setFilter(filter.filter((t) => t !== tag))
    else setFilter([...filter, tag])
    scrollToQueryContainer()
  }

  const sortByButtons = (
    <>
      <QueryButton
        text="自信"
        onClick={() => {
          toggleSortBy('confidence')
        }}
        isActive={sortBy === 'confidence'}
      />
      <QueryButton
        text="最近"
        onClick={() => {
          toggleSortBy('recent')
        }}
        isActive={sortBy === 'recent'}
      />
    </>
  )

  const allButton = (
    <QueryButton
      text="All"
      onClick={() => {
        setFilter([])
        scrollToQueryContainer()
      }}
      isActive={filter.length === 0}
    />
  )

  const filterButtons = tags.map((tag) => (
    <QueryButton
      key={tag}
      text={tag}
      onClick={() => {
        toggleFilter(tag)
      }}
      isActive={filter.includes(tag)}
    />
  ))

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.subject}>Products / Projects</h2>
        <div className={styles.queryContainer} ref={queryContainerRef}>
          <div className={styles.query}>
            <span className={styles.queryLabel}>sort by</span>
            <div className={styles.queryButtonList.container}>
              <div className={styles.queryButtonList.wrapped}>
                {sortByButtons}
              </div>
            </div>
          </div>
          <div className={styles.query}>
            <span className={styles.queryLabel}>filter</span>
            <div className={styles.queryButtonList.container}>
              <div className={styles.queryButtonList.fixed}>
                {allButton}
                <div className={styles.queryButtonSeparator} />
              </div>
              <div className={styles.queryButtonList.scrollableContainer}>
                <div className={styles.queryButtonList.scrollable}>
                  {filterButtons}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.workCardList} ref={workCardListRef}>
          {filteredWorks.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </div>
      <div className={styles.queryHeaderContainer}>
        <div
          className={
            showQueryHeader
              ? styles.queryHeader.visible
              : styles.queryHeader.hidden
          }
        >
          <div className={styles.query}>
            <span className={styles.queryLabel}>sort by</span>
            <div className={styles.queryButtonList.container}>
              <div className={styles.queryButtonList.fixed}>
                {sortByButtons}
              </div>
            </div>
          </div>
          <div className={styles.query}>
            <span className={styles.queryLabel}>filter</span>
            <div className={styles.queryButtonList.container}>
              <div className={styles.queryButtonList.fixed}>
                {allButton}
                <div className={styles.queryButtonSeparator} />
                {filterButtons}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
