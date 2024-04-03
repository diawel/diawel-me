'use client'

import Footer from '@/components/Footer'
import WithAbstract from '@/components/WithAbstract'
import { Work, formatImage } from '@/utils/microcmsResources'
import * as styles from './index.css'
import Tag from '@/components/Tag'
import Button from '@/components/Button'
import { useRouter } from 'next/navigation'
import Images, { StrictImage } from '@/components/Images'
import PageLink from '@/components/PageLink'

export type WorksProps = {
  work: Work
}

const Works: React.FC<WorksProps> = ({ work }) => {
  const router = useRouter()

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
                            url: formatImage(image.url, { size: 512 }),
                            alt: '作品の画像',
                          })) as StrictImage[]
                      }
                    />
                  )
                return (
                  <div
                    key={index}
                    className={styles.bodyText}
                    dangerouslySetInnerHTML={{ __html: block.html }}
                  />
                )
              })}

              <style>
                {`
                  .${styles.bodyText} img {
                    width: 100%;
                    height: auto;
                  }
                  .${styles.bodyText} figure {
                    margin: 16px 0;
                  }
                  .${styles.bodyText} :is(p, ul, ol, li) {
                    margin: 12px 0;
                  }
                  .${styles.bodyText} h2 {
                    margin: 24px 0 16px;
                    font-size: 24px;
                  }
                  .${styles.bodyText} ul > li {
                    margin-left: 1.25em;
                    padding-left: 0.25em;
                  }
                  .${styles.bodyText} ol > li {
                    margin-left: 1.5em;
                  }
                  .${styles.bodyText} > :first-child {
                    margin-top: 0;
                  }
                  .${styles.bodyText} > :last-child {
                    margin-bottom: 0;
                  }
                `}
              </style>
            </div>
          </main>
        </WithAbstract>
      </section>
      <Footer />
    </>
  )
}

export default Works
