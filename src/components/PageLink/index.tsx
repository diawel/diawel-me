import Link from 'next/link'
import * as styles from './index.css'
import { useContext } from 'react'

export type PageLinkProps = {
  href: string
  children: React.ReactNode
  newTab?: boolean
  underline?: boolean
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

const PageLink: React.FC<PageLinkProps> = ({
  href,
  children,
  newTab,
  underline,
  onClick,
}) => {
  const commonProps = {
    className: styles.link,
    style: {
      textDecoration: underline ? undefined : 'none',
    },
    onClick,
    href,
  }

  const linkInner = <div className={styles.linkInner}>{children}</div>
  if (newTab)
    return (
      <a target="_blank" rel="noopener noreferrer" {...commonProps}>
        {linkInner}
      </a>
    )
  return (
    <Link {...commonProps} {...{ to: href }}>
      {linkInner}
    </Link>
  )
}

export default PageLink
