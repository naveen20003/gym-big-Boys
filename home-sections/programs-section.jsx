import Image from "next/image"

const items = [
    {
        id: 1,
        src: "/personal-training.jpg",
        title: "Personal Training",
        description: "one-on-one coaching tailored to your goals"
    },
    {
        id: 2,
        src: "/weight-loss.jpg",
        title: "Weight Loss",
        description: "structured training to help you get leaner"
    },
    {
        id: 3,
        src: "/hiit.jpg",
        title: "HIIT",
        description: "high intensity workouts for conditioning"
    },
    {
        id: 4,
        src: "/functional-training.jpg",
        title: "Functional Train",
        description: "improve movement, mobility and performance"
    },
    {
        id: 5,
        src: "/strenght-training.jpg",
        title: "Strength Training",
        description: "build muscle and increase strength"
    },
    {
        id: 6,
        src: "/community.jpg",
        title: "Community",
        description: "get tips and helps from gym mates and build realtionship"
    },
]
function ProgramsSection() {
  return (
   <div className="bg-black text-white min-h-screen p-6 md:p-12">
        <h1 className="w-full text-3xl font-bold mb-8 text-center mt-10">Programs</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((i) => (
            <div key={i.id} className="relative h-96 w-full rounded-xl overflow-hidden group border border-white/10 bg-zinc-950">
                
                {/* Blurred Image - Scaled slightly to hide messy blur edges */}
                <Image 
                    src={i.src} 
                    alt={i.title}
                    fill
                    priority 
                    className="w-full h-full object-cover object-top opacity-60 blur-[2px] scale-105 transition-transform duration-350 group-hover:scale-110"
                />
                
                {/* Combined Dark Gradient Overlay & Centered Text Container */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40 flex flex-col justify-center items-center p-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
                    {i.title}
                </h2>
                <p className="text-sm md:text-base font-light text-gray-300 max-w-xs leading-relaxed">
                    {i.description}
                </p>
                </div>

            </div>
            ))}
        </div>
    </div>

  )
}

export default ProgramsSection