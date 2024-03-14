import Index from '@/layouts/Index'
import { client } from '@/utils/microcmsClient'
import { Top, Work } from '@/utils/microcmsResources'

const Page = async () => (
  <Index
    top={await client.getObject<Top>({ endpoint: 'top' })}
    workList={await client.getList<Work>({ endpoint: 'works' })}
  />
)

export default Page
