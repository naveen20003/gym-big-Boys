
const items = [
    {
        id: 1,
        name: "peanut butter",
        des: "peanut butter made that was made under our roof, healthy ingredients",
        rate: "⭐⭐⭐⭐"
    },
    {
        id: 2,
        name: "peanut butter",
        des: "peanut butter made that was made under our roof, healthy ingredients",
        rate: "⭐⭐⭐⭐⭐"
    },
    {
        id: 3,
        name: "peanut butter",
        des: "peanut butter made that was made under our roof, healthy ingredients",
        rate: "⭐⭐⭐⭐"
    },
    {
        id: 4,
        name: "peanut butter",
        des: "peanut butter made that was made under our roof, healthy ingredients",
        rate: "⭐⭐⭐⭐"
    },
    {
        id: 5,
        name: "peanut butter",
        des: "peanut butter made that was made under our roof, healthy ingredients",
        rate: "⭐⭐⭐⭐⭐"
    },
    {
        id: 6,
        name: "peanut butter",
        des: "peanut butter made that was made under our roof, healthy ingredients",
        rate: "⭐⭐⭐⭐⭐"
    },
    {
        id: 7,
        name: "peanut butter",
        des: "peanut butter made that was made under our roof, healthy ingredients",
        rate: "⭐⭐⭐"
    },
    {
        id: 8,
        name: "peanut butter",
        des: "peanut butter made that was made under our roof, healthy ingredients",
        rate: "⭐⭐⭐⭐"
    },
]
function ShopSection() {
  return (
    <div className="bg-linear-to-b from-gray-800 via-green-900 to-gray-500 min-h-screen w-full text-white grid grid-cols-1 md:grid-cols-3 gap-10 px-5">
        <h1 className="text-center mt-5 text-5xl font-bold md:col-span-3">Shop</h1>
        {
            items.map((i) => (
            <div 
             key={i.id}
             className="max-w-lg bg-slate-900 h-[600px] rounded-xl">
                <div className="bg-[/community.jpg] hover-scale-100 h-[400px] max-w-lg bg-zinc-300 rounded-md overflow-hidden">
                    <img src="/community.jpg" alt="" className="object-cover " />
                </div>
                <div className="h-[200px] max-w-lg text-white px-5 py-3 flex flex-col justify-between">
                    <h1 className="text-3xl font-semibold">{i.name}</h1>
                    <p className="font-thin ">{i.des}</p>
                    <div className="flex justify-between items-center px-1">
                    <h1 className="opacity-80 md:text-sm">{i.rate}</h1>
                    <button className="w-30 h-8 bg-green-600 rounded-md">buy</button>
                    </div>
                </div>
            </div>
            ))
        }
    </div>
  )
}

export default ShopSection;