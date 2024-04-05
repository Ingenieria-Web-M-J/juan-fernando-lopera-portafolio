import { CentralSide, LeftSide, RightSide } from './components/templates'

// Página principal de la aplicación.
// Se hace uso de los templates "LeftSide", "CentralSide" y "RightSide".
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
