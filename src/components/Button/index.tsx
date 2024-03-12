'use client'

import * as styles from './index.css'

export type ButtonProps = {
  children: React.ReactNode
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className={styles.reset} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
