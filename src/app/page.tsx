import {NavigationMenuDemo} from '../components/Navbar/Nav'
import Banner from '../components/Banner'
import {TabsDemo} from '../components/Tabs/Tabs'

import Brand from '@/components/Brand/Brand';
import Footer from '@/components/Footer/Footer';
import { TypewriterEffectSmoothDemo } from '@/components/Tabs/TypeWriterText';
export default function Home() {
  return (
    <div className="flex-col items-center justify-items-center min-h-screen py-4 font-[family-name:var(--font-geist-sans)]">
      <NavigationMenuDemo />
      <div className="w-full ">
      <Banner />
      </div>
      <div className='w-full'>
      <Brand />
      </div>
      <div className='w-full flex-col gap-4 items-center mt-32 h-max'>
        <TypewriterEffectSmoothDemo />
      <TabsDemo />
      </div>
      <div className='w-full'>
      <Footer />
      </div>
      
    </div>
  );
}
