import Addtask from "@/component/Addtask/Addtask";
import List from "@/component/List/List";
import { getAlltodos } from "@/api";
export default async function Home() {
const task=await getAlltodos();
  return (
    
    <main className="max-w-4xl mx-auto mt-4 ">
     <div className="text-center my-5 flex flex-col gap-4">
       <h1 className="text-2xl font-bold ">To Do List App</h1>
       <Addtask/>
      
     </div>
     <List tasks={task}/>
     
  
   </main>
  );
}
