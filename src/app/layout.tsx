import type { Metadata } from 'next'
import * as styles from './layout.css'
import Index from '@/layouts/Index'
import { client } from '@/utils/microcmsClient'
import { Top, Work } from '@/utils/microcmsResources'
import SubpageFrame from '@/components/SubpageFrame'
import IndexFrame from '@/components/IndexFrame'
import AdobeFontScript from '@/components/AdobeFontScript/indes'

export const metadata: Metadata = {
  title: 'Diawel',
}

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <AdobeFontScript kitId="mul6xqi" />
      </head>
      <body className={styles.body}>
        <IndexFrame>
          <Index
            top={await client.getObject<Top>({ endpoint: 'top' })}
            workList={await client.getList<Work>({ endpoint: 'works' })}
          />
        </IndexFrame>
        <SubpageFrame>{children}</SubpageFrame>
      </body>
    </html>
  )
}

export default Layout
