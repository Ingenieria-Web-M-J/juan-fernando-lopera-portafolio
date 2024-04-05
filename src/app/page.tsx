import { CentralSide, LeftSide, RightSide } from './components/templates'

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col gap-2 lg:flex-row">
        <LeftSide />
        <CentralSide />
        <RightSide />
      </main>
    </>
  )
}
