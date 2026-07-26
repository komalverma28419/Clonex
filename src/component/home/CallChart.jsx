import {
 LineChart,
 Line,
 XAxis,
 YAxis,
 Tooltip,
 ResponsiveContainer
} from "recharts";


const data=[
 {
 day:"Mon",
 calls:200
 },
 {
 day:"Tue",
 calls:350
 },
 {
 day:"Wed",
 calls:280
 },
 {
 day:"Thu",
 calls:500
 },
 {
 day:"Fri",
 calls:420
 }
];


const CallChart=()=>{

return (

<div className="
mt-5
h-64
bg-white
dark:bg-slate-800
rounded-2xl
p-5
border
border-gray-300
dark:border-slate-700
">

<ResponsiveContainer>

<LineChart data={data}>

<XAxis dataKey="day"/>

<YAxis/>

<Tooltip/>

<Line
dataKey="calls"
stroke="#EFA434"
strokeWidth={3}
/>

</LineChart>

</ResponsiveContainer>

</div>

)

}


export default CallChart;
