import * as styles from './index.css'

export type AnchorButtonProps = {
  text: string
  backgroundColor?: string
}

const AnchorButton: React.FC<AnchorButtonProps> = ({
  text,
  backgroundColor,
}) => {
  return (
    <div className={styles.container} style={{ backgroundColor }}>
      <span>{text}</span>
      <img className={styles.arrow} src="/assets/arrow.svg" alt="へ" />
    </div>
  )
}

export default AnchorButton
