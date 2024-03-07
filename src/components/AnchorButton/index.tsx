import * as styles from './index.css'

export type AnchorButtonProps = {
  text: string
}

const AnchorButton: React.FC<AnchorButtonProps> = ({ text }) => {
  return (
    <div className={styles.container}>
      <span>{text}</span>
      <img src="/assets/arrow-short.svg" alt="へ" />
    </div>
  )
}

export default AnchorButton
