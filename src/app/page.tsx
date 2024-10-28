import {NavigationMenuDemo} from '../components/Nav';
import {AuroraBackgroundDemo} from '../components/Banner'
export default function Home() {
  return (
    <div className="flex-col items-center justify-items-center min-h-screen py-4 font-[family-name:var(--font-geist-sans)]">
      <NavigationMenuDemo />
      <div className="w-full ">
      <AuroraBackgroundDemo />
      </div>
    </div>
  );
}
