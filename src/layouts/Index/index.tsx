import { Top, client } from '@/utils/microcmsResources'
import Fv from './Fv'
import History from './History'
import StackScrollArea from '@/components/StackScrollArea'

const Index: React.FC = async () => {
  const { introductionSubject, introductionText, timeline } =
    await client.getObject<Top>({ endpoint: 'top' })
  return (
    <>
      <StackScrollArea
        stackDirection="down"
        overlay={
          <StackScrollArea
            stackDirection="up"
            overlay={
              <div style={{ height: '100vh', backgroundColor: 'black' }} />
            }
            avoidSafariStickyBug
          >
            <Fv />
            <History
              {...{
                introductionSubject,
                introductionText,
                timeline,
              }}
            />
          </StackScrollArea>
        }
      >
        <div
          style={{
            height: '100vh',
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          hello
        </div>
      </StackScrollArea>
    </>
  )
}

export default Index
