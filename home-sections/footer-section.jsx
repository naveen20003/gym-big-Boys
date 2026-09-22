
function FooterSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 bg-black w-full h-[1000px] md:h-[500px] text-white py-10 px-5">
        <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold">Big Boys</h1>
            <h1 className="font-thin">Instagram</h1>
            <h1 className="font-thin">Facebook</h1>
            <h1 className="font-thin">LinkedIn</h1>
        </div>
        <div className="flex flex-col gap-3">
            <h1 className="text-lg font-bold">Programs</h1>
            <h1 className="font-thin">strength Training</h1>
            <h1 className="font-thin">functional training</h1>
            <h1 className="font-thin">community</h1>
            <h1 className="font-thin">hiit</h1>
            <h1 className="font-thin">weight loss</h1>
            <h1 className="font-thin">personal training</h1>
        </div>
        <div className="flex flex-col gap-3">
            <h1 className="text-lg font-bold">Membership</h1>
            <h1 className="font-thin">starter</h1>
            <h1 className="font-thin">pro</h1>
            <h1 className="font-thin">elite</h1>
        </div>
        <div className="flex flex-col gap-3">
            <h1 className="text-lg font-bold">FAQ</h1>
            <h1 className="font-thin">What should I bring for my first workout?</h1>
            <h1 className="font-thin">Do you offer personal training?</h1>
            <h1 className="font-thin">Can beginners join?</h1>
            <h1 className="font-thin">Do you offer trial sessions?</h1>
            <h1 className="font-thin">What are your opening hours?</h1>
            <h1 className="font-thin">Can I freeze my membership?</h1>
        </div>
        <div className="sm:col-span-2 md:col-span-5 text-[10px] md:text-sm text-center flex flex-col justify-end">
            © 2026 Big Boys GYM | Concept project created for portfolio demonstration.
        </div>
    </div>
  )
}

export default FooterSection;