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
  const period = work.dateRange[1]
    ? work.dateRange[0].year === work.dateRange[1].year &&
      work.dateRange[0].month === work.dateRange[1].month
      ? `${work.dateRange[0].year}.${work.dateRange[0].month}`
      : `${work.dateRange[0].year}.${work.dateRange[0].month} - ${work.dateRange[1].year}.${work.dateRange[1].month}`
    : `${work.dateRange[0].year}.${work.dateRange[0].month} - 現在`

  return (
    <>
      <section>
        <WithAbstract
          abstract={
            <div className={styles.abstractContainer}>
              <div className={styles.abstract}>
                <div className={styles.titleBlock}>
                  <div className={styles.period}>{period}</div>
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
                if (block.fieldId === 'bodyText')
                  return (
                    <div key={index} className={styles.bodyText}>
                      {parse(block.html, parserOptions)}
                    </div>
                  )
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
                if (block.fieldId === 'youtube')
                  return (
                    <iframe
                      key={index}
                      className={styles.iframe}
                      src={`https://www.youtube.com/embed/${block.videoId}`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      style={{
                        aspectRatio: block.aspectRatio ?? '16 / 9',
                      }}
                      allowFullScreen
                    />
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
