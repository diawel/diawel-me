'use client'

import { Work } from '@/utils/microcmsResources'
import * as styles from './index.css'
import QueryButton from './QueryButton'
import { useMemo } from 'react'
import WorkCard from './WorkCard'

export type WorksProps = {
  works: Work[]
}

export const Works: React.FC<WorksProps> = ({ works }) => {
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

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.subject}>Products / Projects</h2>
        <div className={styles.queryContainer}>
          <div className={styles.query}>
            <span className={styles.queryLabel}>sort by</span>
            <div className={styles.queryButtonList.container}>
              <div className={styles.queryButtonList.wrapped}>
                <QueryButton text="自信" onClick={() => {}} isActive={true} />
                <QueryButton text="最近" onClick={() => {}} isActive={false} />
              </div>
            </div>
          </div>
          <div className={styles.query}>
            <span className={styles.queryLabel}>filter</span>
            <div className={styles.queryButtonList.container}>
              <div className={styles.queryButtonList.fixed}>
                <QueryButton text="All" onClick={() => {}} isActive={true} />
              </div>
              <div className={styles.queryButtonList.scrollableContainer}>
                <div className={styles.queryButtonList.scrollable}>
                  {tags.map((tag) => (
                    <QueryButton
                      key={tag}
                      text={tag}
                      onClick={() => {}}
                      isActive={false}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.workCardList}>
          {works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </div>
  )
}
