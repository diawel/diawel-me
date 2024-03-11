import * as styles from './index.css'

export type WithAbstractProps = {
  abstract: React.ReactNode
  children?: React.ReactNode
  className?: string
}

const WithAbstract: React.FC<WithAbstractProps> = ({ abstract, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.abstract}>{abstract}</div>
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  )
}

export default WithAbstract
