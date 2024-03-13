'use client'

import { MicroCMSImage } from 'microcms-js-sdk'
import * as styles from './index.css'
import { formatImage } from '@/utils/microcmsResources'
import Button from '@/components/Button'
import { useEffect, useRef } from 'react'

export type PortfolioProps = {
  portfolioImages: MicroCMSImage[]
  portfolioDescription: string
}

export const Portfolio: React.FC<PortfolioProps> = ({
  portfolioImages,
  portfolioDescription,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null)

  const slideBackward = () => {
    sliderRef.current?.scrollBy({
      left: -sliderRef.current.clientWidth,
      behavior: 'smooth',
    })
  }

  const slideForward = () => {
    sliderRef.current?.scrollBy({
      left: sliderRef.current.clientWidth,
      behavior: 'smooth',
    })
  }

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.sliderContainer}>
          <div className={styles.slider} ref={sliderRef}>
            {portfolioImages.map((image, index) => (
              <img
                key={image.url}
                src={formatImage(image.url, { size: 1920 })}
                alt={`ポートフォリオ${index + 1}枚目`}
                className={styles.image}
              />
            ))}
          </div>
          <div className={styles.sliderOverlay}>
            <Button onClick={slideBackward}>
              <div className={styles.button.backward}>
                <img
                  src="/assets/arrow.svg"
                  alt="戻る"
                  className={styles.arrow.backward}
                />
              </div>
            </Button>
            <Button onClick={slideForward}>
              <div className={styles.button.forward}>
                <img
                  src="/assets/arrow.svg"
                  alt="進む"
                  className={styles.arrow.forward}
                />
              </div>
            </Button>
          </div>
        </div>
        <div className={styles.descriptionBox}>
          <h2 className={styles.subject}>Portfolio</h2>
          <p className={styles.description}>{portfolioDescription}</p>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
