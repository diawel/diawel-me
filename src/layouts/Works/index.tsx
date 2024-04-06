import Footer from '@/components/Footer'
import WithAbstract from '@/components/WithAbstract'
import { StrictImage, Work, formatImage } from '@/utils/microcmsResources'
import * as styles from './index.css'
import Tag from '@/components/Tag'
import PageLink from '@/components/PageLink'
import parse, {
  DOMNode,
  HTMLReactParserOptions,
  domToReact,
} from 'html-react-parser'
import Images from './Images'

export type WorksProps = {
  work: Work
}

const parserOptions: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode.type !== 'tag') return domNode
    if (domNode.name === 'a')
      return (
        <PageLink
          href={domNode.attribs.href}
          newTab={domNode.attribs.target === '_blank'}
          underline
        >
          {domToReact(domNode.children as DOMNode[], parserOptions)}
        </PageLink>
      )
  },
}

const Works: React.FC<WorksProps> = ({ work }) => {
  return (
    <>
      <section>
        <WithAbstract
          abstract={
            <div className={styles.abstractContainer}>
              <div className={styles.abstract}>
                <div className={styles.titleBlock}>
                  <div className={styles.period}></div>
                  <h1 className={styles.title}>{work.title}</h1>
                </div>
                <div className={styles.descriptionBox}>
                  <h4 className={styles.blockSubject}>使用技術・ツール</h4>
                  <p className={styles.description}>{work.technology}</p>
                </div>
                <div className={styles.tagList}>
                  {work.tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              </div>
              <PageLink href="/">
                <div className={styles.pagingContainer}>
                  <img
                    className={styles.pagingArrow}
                    src="/assets/arrow.svg"
                    alt=""
                  />
                  一覧に戻る
                </div>
              </PageLink>
            </div>
          }
        >
          <main className={styles.bodyContainer}>
            <img
              className={styles.thumbnail}
              src={work.thumbnail.url}
              alt={`「${work.title}」のサムネイル`}
            />
            <div className={styles.body}>
              {work.body.map((block, index) => {
                if (block.fieldId === 'bodyImages')
                  return (
                    <Images
                      key={index}
                      images={
                        block.images
                          .filter((image) => image.width && image.height)
                          .map((image) => ({
                            ...image,
                            url: formatImage(image.url, { size: 1024 }),
                            alt: '作品の画像',
                          })) as StrictImage[]
                      }
                    />
                  )
                return (
                  <div key={index} className={styles.bodyText}>
                    {parse(block.html, parserOptions)}
                  </div>
                )
              })}
            </div>
          </main>
        </WithAbstract>
      </section>
      <Footer />
    </>
  )
}

export default Works
