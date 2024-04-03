import type { Metadata } from 'next'
import * as styles from './layout.css'
import Index from '@/layouts/Index'
import { client } from '@/utils/microcmsClient'
import { Top, Work } from '@/utils/microcmsResources'

export const metadata: Metadata = {
  title: 'Diawel',
}

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(d) {
                var config = {
                  kitId: 'mul6xqi',
                  scriptTimeout: 3000,
                  async: true
                },
                h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
              })(document);
            `,
          }}
        />
      </head>
      <body className={styles.body}>
        <Index
          top={await client.getObject<Top>({ endpoint: 'top' })}
          workList={await client.getList<Work>({ endpoint: 'works' })}
        />
        {children}
      </body>
    </html>
  )
}

export default Layout
