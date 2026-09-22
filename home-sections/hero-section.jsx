import { Button } from "@/components/ui/button";
import Image from "next/image";
import NavigationSection from "./navigation-section";


function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/gym-hero-image.jpg" // Maps to /public/hero.jpg
        alt="Background"
        fill
        priority // Tells Next.js to load this image immediately (LCP)
        className="object-cover object-top -z-10 brightness-40" // -z-10 places it behind text
      />

      {/* Foreground Content */}
      <NavigationSection  />
      <div className="relative z-10 flex h-full items-center justify-center flex flex-col gap-5 p-5 text-center">
        <h1 className="font-serif text-white text-3xl md:text-4xl font-bold">Lets Meet Your Physique Goals</h1>
        <h1 className="font-serif text-white text-lg font-light md:text-xl">bring your ideal physique and our professional trainers help you to gain that body</h1>
        <div className="flex items-center gap-5">
          <Button className="bg-green-600 hover:bg-green-400 text-black font-bold" size={"lg"} >Call Now</Button>
          <Button variant={"outline"} className="font-bold">Learn More</Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;
    // <div className='relative text-white overflow-hidden'>
    //     <img
    //       src="/gym-hero-image.jpg"
    //       alt='hero image'
    //       className="object-cover object-center"
    //       loading="eager"
    //     />
    //     <div className='absolute inset-0 flex flex-col justify-center items-center'>
    //        <h1 className='p-5 text-5xl font-bold md:text-7xl text-center'>
    //          Lets meet Your Physique Goals
    //        </h1>
    //        <h1 className='p-3 text-sm md:text-xl text-center'>
    //          bring your ideal physique and our professional trainers help you to gain that body  
    //        </h1>
    //        <div className='flex gap-3 mt-5'>
    //          <button className="w-30 h-10 bg-green-500 text-black rounded-md">Call Now</button>
    //          <button className="w-30 h-10 border text-white rounded-md">Learn more</button>
    //        </div>
    //        <div className="flex gap-5 md:gap-30 mt-5">
    //           <h1>500+ Members</h1>
    //           <h1>15 Trainers</h1>
    //           <h1>9+ years</h1>
    //           <h1>4.8/5 Rating</h1>
    //       </div>
    //     </div>
    // </div>