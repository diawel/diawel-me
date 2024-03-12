import { Top, Work, client } from '@/utils/microcmsResources'
import Fv from './Fv'
import History from './History'
import StackScrollArea from '@/components/StackScrollArea'
import { Works } from './Works'

const Index: React.FC = async () => {
  const { introductionSubject, introductionText, timeline } =
    await client.getObject<Top>({ endpoint: 'top' })
  const { contents } = await client.getList<Work>({ endpoint: 'works' })
  return (
    <StackScrollArea
      stackDirection="down"
      overlay={
        <StackScrollArea
          stackDirection="up"
          overlay={<Works works={contents} />}
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
  )
}

export default Index
