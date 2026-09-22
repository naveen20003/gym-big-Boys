
const item = [
    {
        id: 1,
        title: "Expert Coaching",
        description: "we have experts of the industry that guide you to your goal. let them do your help."
    },
    {
        id: 2,
        title: "Modern Equipment",
        description: "we have experts of the industry that guide you to your goal. let them do your help."
    },
    {
        id: 3,
        title: "Personalized Programs",
        description: "we have experts of the industry that guide you to your goal. let them do your help."
    },
    {
        id: 4,
        title: "Supportive Community",
        description: "we have experts of the industry that guide you to your goal. let them do your help."
    },
];


function WhyChooseUsSection() {
  return (
    <div className="bg-black text-white grid grid-cols-1 md:grid-cols-2 gap-20 p-4">
        <div className="md:col-span-2 flex justify-center text-2xl font-bold">
            <h1>Why Choose Us?</h1>
        </div>
        {
            item.map((i) => (
            <div key={i.id} className="text-center flex flex-col gap-3">
                <h1 className="text-lg font-bold">{i.title}</h1>
                <p className="text-sm font-thin">{i.description}</p>
            </div>
        ))}
    </div>
  )
}

export default WhyChooseUsSection