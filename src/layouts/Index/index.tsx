import { Top, Work } from '@/utils/microcmsResources'
import Fv from './Fv'
import History from './History'
import StackScrollArea from '@/components/StackScrollArea'
import { Works } from './Works'
import { client } from '@/utils/microcmsClient'
import Portfolio from './Portfolio'
import * as styles from './index.css'
import Footer from '@/components/Footer'

const Index: React.FC = async () => {
  const {
    introductionSubject,
    introductionText,
    timeline,
    portfolioImages,
    portfolioDescription,
  } = await client.getObject<Top>({ endpoint: 'top' })
  const { contents } = await client.getList<Work>({ endpoint: 'works' })
  return (
    <>
      <StackScrollArea
        stackDirection="down"
        overlay={
          <StackScrollArea
            stackDirection="up"
            overlay={
              <>
                <div id="works" />
                <Works works={contents} />
                <div id="portfolio" />
              </>
            }
            avoidSafariStickyBug
          >
            <div className={styles.upperContainer}>
              <Fv />
              <div id="history" />
              <History
                {...{
                  introductionSubject,
                  introductionText,
                  timeline,
                }}
              />
            </div>
          </StackScrollArea>
        }
      >
        <Portfolio {...{ portfolioImages, portfolioDescription }} />
      </StackScrollArea>
      <Footer />
    </>
  )
}

export default Index
