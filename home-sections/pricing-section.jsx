
function PricingSection() {
  return (
    <div className="pt-25 grid grid-cols-1 md:grid-cols-3 gap-5 bg-black text-white px-15">
        <h1 className="md:col-span-3 text-center text-3xl font-bold">Pricing</h1>
        <div className="w-full gap-5 p-5 h-[400px] bg-slate-900 rounded-xl text-center text-xl font-thin flex flex-col justify-between">
            <div className="py-5">
                <h1 className="text-2xl font-bold">STARTER</h1>
                <h1>₹1,499 / month</h1>
            </div>
            <div className="py-5 flex bg-slate-900 rounded-xl flex-col gap-3 items-center">
                <h4 className="text-sm font-thin">✓ Gym access</h4>
                <h4 className="text-sm font-thin">✓ Basic equipment</h4>
                <h4 className="text-sm font-thin">✓ Locker access</h4>
            </div>
            <div>
                <button className="h-10 w-30 hover:bg-green-400 text-sm font-semibold text-black bg-green-700 rounded-md">Choose Plan</button>
            </div>
        </div>
        <div className="w-full gap-5 p-5 h-[400px] bg-slate-900 rounded-xl text-center text-xl font-thin flex flex-col justify-between">
            <div className="py-5">
                <h1 className="text-2xl font-bold">PRO</h1>
                <h1>₹2,499 / month</h1>
            </div>
            <div className="py-5 flex bg-slate-900 rounded-xl flex-col gap-3 items-center">
                <h4 className="text-sm font-thin">✓ Everything in Starter</h4>
                <h4 className="text-sm font-thin">✓ Group classes</h4>
                <h4 className="text-sm font-thin">✓ Fitness assessment</h4>
            </div>
            <div>
                <button className="h-10 w-30 hover:bg-green-400 text-sm text-black font-semibold bg-green-700 rounded-md">Choose Plan</button>
            </div>
        </div>
        <div className="w-full gap-5 p-5 h-[400px] bg-slate-900 rounded-xl text-center text-xl font-thin flex flex-col justify-between">
            <div className="py-5">
                <h1 className="text-2xl font-bold">ELITE</h1>
                <h1>₹4,999 / month</h1>
            </div>
            <div className="py-5 flex bg-slate-900 rounded-xl flex-col gap-3 items-center">
                <h4 className="text-sm font-thin">✓ Everything in Pro</h4>
                <h4 className="text-sm font-thin">✓ Personal training</h4>
                <h4 className="text-sm font-thin">✓ Nutrition guidance</h4>
            </div>
            <div>
                <button className="h-10 w-30 hover:bg-green-400 text-black text-sm font-semibold bg-green-700 rounded-md">Choose Plan</button>
            </div>
        </div>
    </div>
  )
}

export default PricingSection;