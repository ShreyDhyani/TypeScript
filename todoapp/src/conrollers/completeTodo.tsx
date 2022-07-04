import { Todo } from "../Interfaces";
import { getData, setData } from "./localstorageConrolers"

export const completeTodo = (todoName: string): Todo[] =>{
    let data: Todo[] = getData().map((todo)=>{
        return todoName === todo.task ? {...todo, status: true} : todo;
    })
    setData(data);
    return data;
}