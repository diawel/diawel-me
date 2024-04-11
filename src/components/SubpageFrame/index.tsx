'use client'

import * as styles from './index.css'
import { usePathname } from 'next/navigation'

export type SubpageFrameProps = {
  children: React.ReactNode
}

const SubpageFrame: React.FC<SubpageFrameProps> = ({ children }) => {
  const pathname = usePathname()

  return (
    <div
      className={pathname !== '/' ? styles.frame.active : styles.frame.inactive}
    >
      {children}
    </div>
  )
}

export default SubpageFrame
