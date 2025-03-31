import Works from '@/layouts/Works'
import { color } from '@/utils/constants'
import { client } from '@/utils/microcmsClient'
import { Work } from '@/utils/microcmsResources'
import { Viewport } from 'next'

export const viewport: Viewport = {
  themeColor: color.white,
}

type Props = {
  params: Promise<{
    id: string
  }>
}

export const generateMetadata = async ({ params }: Props) => {
  return {
    title: `${
      (
        await client.get<Work>({
          endpoint: 'works',
          contentId: (await params).id,
        })
      ).title
    } | Diawel`,
  }
}

export const generateStaticParams = async () => {
  const works = await client.getList<Work>({ endpoint: 'works' })

  return works.contents.map((work) => ({
    id: work.id,
  }))
}

const Page = async ({ params }: Props) => (
  <Works
    work={await client.get<Work>({
      endpoint: 'works',
      contentId: (await params).id,
    })}
  />
)

export default Page
