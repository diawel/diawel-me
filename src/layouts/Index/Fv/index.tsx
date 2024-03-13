import * as styles from './index.css'
import AnchorButton from '@/components/AnchorButton'
import { blurIn } from '@/utils/commonKeyframes.css'

const Fv: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.primary}>
          <div className={styles.textBlock}>
            <div className={styles.title}>
              <div className={styles.label}>2026卒</div>
              <img
                src="/assets/logo-dark.svg"
                alt="Diawel"
                className={styles.name}
              />
            </div>
            <div className={styles.affiliation}>
              <div className={styles.affiliationLine}>
                <span>公立はこだて未来大学</span>
                <span>システム情報科学部</span>
              </div>
              <div className={styles.affiliationLine}>
                <span>情報アーキテクチャ学科</span>
                <span>情報デザインコース</span>
              </div>
            </div>
          </div>
          <div className={styles.anchorContainer}>
            <div
              style={{ animation: `${blurIn} 1.5s 0.5s ease-out backwards` }}
            >
              <AnchorButton to="history" text="経歴" />
            </div>
            <div
              style={{ animation: `${blurIn} 1.4s 0.6s ease-out backwards` }}
            >
              <AnchorButton to="works" text="作品一覧" />
            </div>
            <div
              style={{ animation: `${blurIn} 1.3s 0.7s ease-out backwards` }}
            >
              <AnchorButton to="portfolio" text="ポートフォリオ" />
            </div>
          </div>
        </div>
        <div className={styles.secondary}>
          <div className={styles.technologiesBlock}>
            <div className={styles.technologiesLabel}>Love</div>
            <div className={styles.technologies}>
              {[
                'React',
                'JavaScript',
                'TypeScript',
                'Next.js',
                'Vite',
                'HTML',
                'CSS',
                'MicroCMS',
                'Figma',
                'DaVinci Resolve',
              ].map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fv
