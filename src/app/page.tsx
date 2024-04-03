import { CentralSide, LeftSide, RightSide } from "./components/templates";

export default function Home() {
  return (
    <>
      <main className='flex flex-col min-h-screen lg:flex-row gap-2'>
        <LeftSide />
        <CentralSide />
        <RightSide />
      </main>
    </>
  );
}
