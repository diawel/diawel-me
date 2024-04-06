import SubpageFrame from '@/components/SubpageFrame'

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return <SubpageFrame>{children}</SubpageFrame>
}

export default Layout
