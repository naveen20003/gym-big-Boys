
function CallToAction() {
  return (
    <div className="relative w-full h-[350px] md:h-[250px] overflow-hidden bg-black text-white py-15">
    
        {/* 2. Added w-full h-full object-cover so the image scales cleanly without distorting */}
        <img 
            src="/cta-bg-img.jpg" 
            alt="Call to action background" 
            className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
        />

        {/* 3. Replaced 'top-0' with 'inset-0 flex flex-col justify-center' to perfectly center your call to action layout */}
        <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center z-10">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              Ready To Start?
            </h1>
            <p className="mt-2 text-sm md:text-base text-gray-300 max-w-md">
              Join our community today and take the first step toward unlocking your peak physical potential.
            </p>
            <button className="mt-6 px-6 py-2.5 bg-green-500 text-black font-semibold rounded-md hover:bg-green-400 transition-colors">
              Start Your Journey
            </button>
        </div>
    </div>
  )
}

export default CallToAction;