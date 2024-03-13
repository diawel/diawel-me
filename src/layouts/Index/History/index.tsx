'use client'

import Paragraph from '@/components/Paragraph'
import * as styles from './index.css'
import AnchorButton from '@/components/AnchorButton'
import { color } from '@/utils/constants'
import { LifeEvent, Timeline, formatImage } from '@/utils/microcmsResources'
import { useEffect, useMemo, useRef, useState } from 'react'
import WithAbstract from '@/components/WithAbstract'
import Images, { StrictImage } from '@/components/Images'

export type HistoryProps = {
  introductionSubject: string
  introductionText: string
  timeline: Timeline
}

type AgeContainer = {
  age?: number
  lifeEvents: LifeEvent[]
}

const History: React.FC<HistoryProps> = ({
  introductionSubject,
  introductionText,
  timeline,
}) => {
  const [showButton, setShowButton] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef(0)
  useEffect(() => {
    const animationFrame = () => {
      const container = containerRef.current
      if (container) {
        const containerBoundingRect = container.getBoundingClientRect()
        if (
          containerBoundingRect.top < 0 &&
          containerBoundingRect.bottom > window.innerHeight
        )
          setShowButton(true)
        else setShowButton(false)
      }

      animationFrameRef.current = requestAnimationFrame(animationFrame)
    }
    animationFrame()

    return () => {
      cancelAnimationFrame(animationFrameRef.current)
    }
  })

  const modifiedTimeline = useMemo(() => {
    const modifiedTimeline: AgeContainer[] = []
    if (timeline[0].fieldId !== 'ageSymbol')
      modifiedTimeline.push({ lifeEvents: [] })
    timeline.forEach((event) => {
      if (event.fieldId === 'ageSymbol') {
        modifiedTimeline.push({ age: event.age, lifeEvents: [] })
      } else {
        modifiedTimeline[modifiedTimeline.length - 1].lifeEvents.push(event)
      }
    })
    return modifiedTimeline
  }, [timeline])

  return (
    <section ref={containerRef} className={styles.container}>
      <WithAbstract
        abstract={
          <div className={styles.abstract}>
            <Paragraph text={introductionSubject} className={styles.subject} />
            <Paragraph text={introductionText} className={styles.description} />
            <div
              className={
                showButton ? styles.button.visible : styles.button.hidden
              }
            >
              <AnchorButton text="作品一覧" backgroundColor={color.white} />
            </div>
          </div>
        }
      >
        <div className={styles.timeline}>
          <div className={styles.ageContainerList}>
            {modifiedTimeline.map((ageContainer) => (
              <div key={ageContainer.age} className={styles.ageContainer}>
                <div className={styles.ageSymbol}>
                  <div>
                    <span className={styles.age}>{ageContainer.age}</span>
                    <span className={styles.unit}>歳</span>
                  </div>
                </div>
                {ageContainer.lifeEvents.map((event) => (
                  <div key={event.label} className={styles.lifeEvent}>
                    <div>
                      <div className={styles.label}>{event.label}</div>
                      <div className={styles.lifeEventSubject}>
                        {event.subject}
                      </div>
                    </div>
                    {event.text && (
                      <div className={styles.lifeEventText}>{event.text}</div>
                    )}
                    <Images
                      images={
                        event.images
                          .filter((image) => image.width && image.height)
                          .map((image, index) => ({
                            ...image,
                            url: formatImage(image.url, { size: 512 }),
                            alt: `「${event.subject}」の画像${index + 1}`,
                          })) as StrictImage[]
                      }
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className={styles.futureBorder} />
        </div>
      </WithAbstract>
    </section>
  )
}

export default History
