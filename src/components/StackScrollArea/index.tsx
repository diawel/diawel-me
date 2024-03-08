'use client'

import { useEffect, useRef, useState } from 'react'
import * as styles from './index.css'

export type StackScrollAreaProps = {
  overlay: React.ReactNode
  stackDirection: 'up' | 'down'
  children: React.ReactNode
}

const StackScrollArea: React.FC<StackScrollAreaProps> = ({
  overlay,
  stackDirection,
  children,
}) => {
  const frameRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef(0)
  const [space, setSpace] = useState(0)
  useEffect(() => {
    const animationFrame = () => {
      setSpace(
        Math.min(
          document.documentElement.clientHeight -
            (frameRef.current?.clientHeight ?? 0),
          0
        )
      )
      animationRef.current = requestAnimationFrame(animationFrame)
    }
    animationFrame()

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [])

  if (stackDirection === 'up') {
    return (
      <div>
        <div className={styles.frame} ref={frameRef} style={{ top: space }}>
          {children}
        </div>
        <div className={styles.overlay}>{overlay}</div>
      </div>
    )
  } else {
    return (
      <div>
        <div className={styles.overlay}>{overlay}</div>
        <div className={styles.frame} ref={frameRef} style={{ bottom: space }}>
          {children}
        </div>
      </div>
    )
  }
}

export default StackScrollArea
