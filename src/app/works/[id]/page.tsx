import Works from '@/layouts/Works'
import { color } from '@/utils/constants'
import { client } from '@/utils/microcmsClient'
import { Work } from '@/utils/microcmsResources'
import { NextPage, Viewport } from 'next'

export const viewport: Viewport = {
  themeColor: color.white,
}

export const generateStaticParams = async () => {
  const works = await client.getList<Work>({ endpoint: 'works' })

  return works.contents.map((work) => ({
    id: work.id,
  }))
}

const Page: NextPage<{
  params: {
    id: string
  }
}> = async ({ params }) => (
  <Works
    work={await client.get<Work>({ endpoint: 'works', contentId: params.id })}
  />
)

export default Page
