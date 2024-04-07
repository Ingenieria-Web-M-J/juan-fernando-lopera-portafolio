import { CentralSide, LeftSide, RightSide } from './components/templates'

// Página principal de la aplicación.
// Se hace uso de los templates "LeftSide", "CentralSide" y "RightSide".
// Decidí no incluir ningún scroll en ninguna de las secciones del portafolio,
// ya que a mi parecer le hacían un gran daño al diseño y hacían que la navegación por el mismo resultara incómoda.
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
