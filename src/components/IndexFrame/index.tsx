'use client'

import * as styles from './index.css'
import { usePathname } from 'next/navigation'

export type IndexFrameProps = {
  children: React.ReactNode
}

const IndexFrame: React.FC<IndexFrameProps> = ({ children }) => {
  const pathname = usePathname()

  return (
    <div
      className={pathname === '/' ? styles.frame.active : styles.frame.inactive}
      inert={pathname !== '/'}
    >
      {children}
    </div>
  )
}

export default IndexFrame
