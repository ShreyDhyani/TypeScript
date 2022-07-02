import { Todo } from "../Interfaces";

export const getData = ():Todo[] =>{
    return JSON.parse(localStorage.getItem("data") as string);
}

export const setData = (newData: Todo[]) => {
    localStorage.setItem("data", JSON.stringify(newData));
}

export const createData = ():void => {
    localStorage.setItem("data", JSON.stringify([]));
}
