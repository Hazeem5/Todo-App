import React from 'react'
import { Task } from '@/tasks/task';
 interface ListProps{
    tasks:Task[];
 } 
const List :React.FC<ListProps> = ({tasks}) => {
    return (
      <div className="overflow-x-auto">
  <table style={{width:'100%'}} className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Tasks</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
     {tasks.map(task=>(
      <tr  key={task.id}>
        
        <td>{task.text}</td>
       
        <td>Blue</td>
      </tr>
     ))}
    </tbody>
  </table>
</div>
    
    )
}

export default List
