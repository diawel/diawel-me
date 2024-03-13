'use client'

import Button from '../Button'
import * as styles from './index.css'

export type AnchorButtonProps = {
  text: string
  to: string
  backgroundColor?: string
}

const AnchorButton: React.FC<AnchorButtonProps> = ({
  text,
  to,
  backgroundColor,
}) => {
  return (
    <Button
      onClick={() => {
        document.getElementById(to)?.scrollIntoView({ behavior: 'smooth' })
      }}
    >
      <div className={styles.container} style={{ backgroundColor }}>
        <span>{text}</span>
        <img className={styles.arrow} src="/assets/arrow.svg" alt="へ" />
      </div>
    </Button>
  )
}

export default AnchorButton
