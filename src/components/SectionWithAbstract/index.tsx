import * as styles from './index.css'

export type SectionWithAbstractProps = {
  abstract: React.ReactNode
  children?: React.ReactNode
  className?: string
  ref?: React.RefObject<HTMLDivElement>
}

const SectionWithAbstract: React.FC<SectionWithAbstractProps> = ({
  abstract,
  children,
  className,
  ref,
}) => {
  return (
    <section className={`${styles.container} ${className}`} {...{ ref }}>
      <div className={styles.content}>
        <div className={styles.abstract}>{abstract}</div>
        <div className={styles.children}>{children}</div>
      </div>
    </section>
  )
}

export default SectionWithAbstract
