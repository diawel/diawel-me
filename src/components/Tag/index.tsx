import * as styles from './index.css'

export type TagProps = {
  text: string
}

const Tag: React.FC<TagProps> = ({ text }) => {
  return <div className={styles.container}>{text}</div>
}

export default Tag
