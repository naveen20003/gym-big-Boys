import { Menu } from 'lucide-react';
import Link from 'next/link';
import NavSidebar from "./navigation-sidebar";
import { Button } from '@/components/ui/button';

function NavigationBar() {
  return (
   <nav className="w-full h-15 bg-zinc-950 fixed top-0 z-50 text-white flex justify-between py-4 px-13 rounded-b-4xl">
        <div className='w-full'>
            <h1 className="text-2xl font-bold">
                Big Boys
            </h1>
        </div>
        <div className="md:hidden">
           <NavSidebar />
        </div>
        <div className="hidden w-full md:flex justify-center items-center gap-5 text-xl font-bold">
            <Link href={"/shop"}>
                shop
            </Link>
            <Link 
              href={"https://share.google/LRXHfMBQE28wg9Jb8"}>
             location
            </Link>
            <Link href="/contact">
                contact
            </Link>
        </div>
        <div className="hidden w-full md:flex justify-end items-center">
            <Button size={"lg"} className="font-bold bg-green-500 text-black hover:bg-green-300">
                Book a Call
            </Button>
        </div>
    </nav>
  )
}

export default NavigationBar;
