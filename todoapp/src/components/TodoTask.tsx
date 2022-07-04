import React, { useEffect} from "react";
import { Todo } from "../Interfaces";

interface Props {
  key: number,
  todo: Todo;
  deleteTask: (taskName: string) => void,
  // completeTask: (taskName: string) => void,
}

const TodoTask: React.FC<Props> = ({ ...props }) => {
  // const [status, setState] = useState<boolean>(props.todo.status);

  // const changeStatus = () => {
  //   props.completeTask(props.todo.task);
  //   setStatus(!status);
  // };

  useEffect(()=>{
    console.log(props.todo);
  }, [props.todo]);

  return (
    <div
      key={props.key}
      className={
        // (status ? "line-through " : "") +
        "my-1 font-mono bg-blue-200 border-2 border-blue-600 rounded-3xl px-2 py-1"
      }
    >
      {props.todo.task +
        " is to be complete in " +
        props.todo.deadline +
        " days"}
      {/* <button
        className="ml-1 bg-green-400 h-8 w-8 rounded-full text-blue-800 border-2 border-green-700"
        hidden={status}
        onClick={(e)=>{changeStatus()}}
      >
        {'O'}
      </button> */}
      <button
        className="ml-1 bg-red-400 h-8 w-8 rounded-full text-amber-800 border-2 border-red-700"
        hidden={false}
        onClick={(e)=>{props.deleteTask(props.todo.task)}}
      >
        {'x'}
      </button>
      {/* <button onClick={(e)=>{console.log(status)}}>checker</button> */}
    </div>
  );
};

export default TodoTask;
