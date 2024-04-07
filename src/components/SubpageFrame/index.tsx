'use client'

import { useEffect } from 'react'
import * as styles from './index.css'
import { usePathname } from 'next/navigation'

export type SubpageFrameProps = {
  children: React.ReactNode
}

const SubpageFrame: React.FC<SubpageFrameProps> = ({ children }) => {
  const pathname = usePathname()
  useEffect(() => {
    if (pathname !== '/') document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'

    return () => {
      document.body.style.overflow = 'auto'
    }
  })

  return (
    <div className={pathname !== '/' ? styles.frame.open : styles.frame.close}>
      {children}
    </div>
  )
}

export default SubpageFrame
