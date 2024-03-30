import { LanguageInfo } from "./components/molecules";
import { Languages } from "./components/organisms";
import { CentralSide, LeftSide, RightSide } from "./components/pages";

export default function Home() {
  return (
    <>
      <main className='flex min-h-screen'>
        <LeftSide />
        <CentralSide/>
        <RightSide />
      </main>
    </>
  );
}
