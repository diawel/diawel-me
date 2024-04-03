import SubpageFrame from '@/components/SubpageFrame'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diawel',
}

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return <SubpageFrame>{children}</SubpageFrame>
}

export default Layout
