import { FileUploadDemo } from '@/components/Resume/FileUpload';
import {NavigationMenuDemo} from '../../components/Navbar/Nav'

export default function Home() {
  return (
    <div className="flex-col items-center justify-items-center min-h-screen py-4 font-[family-name:var(--font-geist-sans)]">
      <NavigationMenuDemo />
      <div className='flex w-full mt-24 justify-center items-center'>
      <FileUploadDemo />
      </div>
    </div>
  );
}
