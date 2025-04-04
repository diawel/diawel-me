import PageLink from '../PageLink'
import * as styles from './index.css'

type FooterProps = {
  expanded?: boolean
}

const Footer: React.FC<FooterProps> = ({ expanded = false }) => {
  return (
    <footer className={styles.container[expanded ? 'expanded' : 'default']}>
      <div className={styles.content}>
        <img
          src="/assets/logo-light.svg"
          alt="Diawel"
          className={styles.name}
        />
        <div className={styles.contactBox}>
          <span className={styles.contactText}>
            Stay
            <br />
            connected
          </span>
          <div className={styles.contactButtonBox}>
            <PageLink href="https://twitter.com/satelliteon" newTab>
              <div className={styles.contactButton}>
                <img src="/assets/icon-x.svg" alt="Twitter" />
              </div>
            </PageLink>
            <PageLink href="mailto:contact@diawel.me" newTab>
              <div className={styles.contactButton}>
                <img src="/assets/icon-mail.svg" alt="Mail" />
              </div>
            </PageLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
