import Link from 'next/link'
import * as styles from './index.css'

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

  if (newTab)
    return (
      <a target="_blank" rel="noopener noreferrer" {...commonProps}>
        {children}
      </a>
    )
  return (
    <Link {...commonProps} {...{ to: href }}>
      {children}
    </Link>
  )
}

export default PageLink
