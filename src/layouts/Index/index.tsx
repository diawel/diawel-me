import { Top, Work } from '@/utils/microcmsResources'
import Fv from './Fv'
import History from './History'
import StackScrollArea from '@/components/StackScrollArea'
import { Works } from './Works'
import Portfolio from './Portfolio'
import * as styles from './index.css'
import Footer from '@/components/Footer'
import { MicroCMSListResponse } from 'microcms-js-sdk'

export type IndexProps = {
  top: Top
  workList: MicroCMSListResponse<Work>
}

const Index: React.FC<IndexProps> = ({ top, workList }) => {
  const {
    love,
    introductionSubject,
    introductionText,
    timeline,
    portfolioImages,
    portfolioDescription,
  } = top
  const { contents } = workList

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
              <Fv
                {...{
                  love,
                }}
              />
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
        <Footer expanded={true} />
      </StackScrollArea>
    </>
  )
}

export default Index
