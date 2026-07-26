import CallChart from "./CallChart";
import StatsCard from "./StatsCard";


const Dashboard=()=>{

return (

<div className="
rounded-3xl
bg-gray-100
dark:bg-slate-900
p-6
shadow-xl
">

<h3 className="
font-bold
text-lg
dark:text-white
">
Call Analytics
</h3>


<StatsCard/>

<CallChart/>


</div>

)

}


export default Dashboard;
