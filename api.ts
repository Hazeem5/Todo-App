const baseUrl="http://localhost:3001/tasks"
import { Task } from "./tasks/task"
export const getAlltodos = async (): Promise<Task[]> =>
{
    const ret=await fetch(baseUrl);
    const todo=await ret.json();
    return todo;
}