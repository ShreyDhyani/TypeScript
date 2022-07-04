import { Todo } from "../Interfaces"
import { completeTodo } from "./completeTodo"
import { getData, setData } from "./localstorageConrolers"

export const deleteTodo = (todoName: string): Todo[] => {
    completeTodo(todoName);
    let data: Todo[] = getData().filter((todo: Todo)=>{
        return !todo.status;
    })
    setData(data);
    return data;
}