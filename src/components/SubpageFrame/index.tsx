'use client'

import { useEffect } from 'react'
import * as styles from './index.css'

export type SubpageFrameProps = {
  children: React.ReactNode
}

const SubpageFrame: React.FC<SubpageFrameProps> = ({ children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  })

  return <div className={styles.frame}>{children}</div>
}

export default SubpageFrame
