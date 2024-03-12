'use client'

import Button from '@/components/Button'
import * as styles from './index.css'

export type QueryButtonProps = {
  text: string
  onClick: () => void
  isActive: boolean
}

const QueryButton: React.FC<QueryButtonProps> = ({
  text,
  onClick,
  isActive,
}) => {
  return (
    <div className={styles.container}>
      <Button onClick={onClick}>
        <div
          className={isActive ? styles.button.active : styles.button.inactive}
        >
          {text}
        </div>
      </Button>
    </div>
  )
}

export default QueryButton
