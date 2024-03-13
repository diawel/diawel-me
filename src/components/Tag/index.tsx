import * as styles from './index.css'

export type TagProps = {
  text: string
  backgroundColor?: string
}

const Tag: React.FC<TagProps> = ({ text, backgroundColor }) => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundColor,
      }}
    >
      {text}
    </div>
  )
}

export default Tag
