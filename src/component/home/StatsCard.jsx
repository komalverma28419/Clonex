import { Phone, PhoneMissed, Clock } from "lucide-react";

const stats = [
  {
    title: "Total Calls",
    value: "12,450",
    icon: Phone
  },
  {
    title: "Missed Calls",
    value: "320",
    icon: PhoneMissed
  },
  {
    title: "Duration",
    value: "45h",
    icon: Clock
  }
];


const StatsCard = () => {
  return (
    <div className="grid grid-cols-3 gap-4">

      {stats.map((item,index)=>{

        const Icon=item.icon;

        return (
          <div 
          key={index}
          className="
          rounded-2xl 
          bg-white 
          dark:bg-slate-800
          p-4
          shadow-sm
          border
          border-gray-300
          dark:border-slate-700
          "
          >

            <Icon 
            className="text-[#EFA434]"
            size={22}
            />

            <h4 className="
            mt-3
            text-sm
            text-gray-500
            dark:text-gray-400
            ">
              {item.title}
            </h4>

            <p className="
            text-xl
            font-bold
            dark:text-white
            ">
              {item.value}
            </p>

          </div>
        )

      })}

    </div>
  )
}

export default StatsCard
