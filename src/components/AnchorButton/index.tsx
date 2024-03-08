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
      <img src="/assets/arrow-short.svg" alt="へ" />
    </div>
  )
}

export default AnchorButton
