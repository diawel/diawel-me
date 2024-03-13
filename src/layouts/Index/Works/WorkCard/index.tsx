import { Work, formatImage } from '@/utils/microcmsResources'
import * as styles from './index.css'
import Tag from '@/components/Tag'
import Paragraph from '@/components/Paragraph'
import { color } from '@/utils/constants'

export type WorkCardProps = {
  work: Work
}

const WorkCard: React.FC<WorkCardProps> = ({ work }) => {
  return (
    <div className={styles.container}>
      <div className={styles.thumbnailContainer}>
        <img
          src={formatImage(work.thumbnail.url, { size: 1024 })}
          alt={`「${work.title}」のサムネイル`}
          className={styles.thumbnail}
        />
        <div className={styles.thumbnailOverlay}>
          <div className={styles.thumbnailOverlayInner}>
            <Tag text="詳細を読む" backgroundColor={color.white} />
          </div>
        </div>
      </div>
      <div className={styles.descriptionBlock}>
        <h3 className={styles.title}>{work.title}</h3>
        <div className={styles.description}>
          <Paragraph text={work.description} />
        </div>
      </div>
      <div className={styles.descriptionBlock}>
        <h4 className={styles.blockSubject}>使用技術・ツール</h4>
        <p className={styles.description}>{work.technology}</p>
      </div>
      <div className={styles.tagList}>
        {work.tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>
    </div>
  )
}

export default WorkCard
