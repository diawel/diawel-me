import { Top, client } from '@/utils/microcmsResources'
import Fv from './Fv'
import History from './History'

const Index: React.FC = async () => {
  const { introductionSubject, introductionText, timeline } =
    await client.getObject<Top>({ endpoint: 'top' })
  return (
    <>
      <Fv />
      <History
        {...{
          introductionSubject,
          introductionText,
          timeline,
        }}
      />
    </>
  )
}

export default Index
