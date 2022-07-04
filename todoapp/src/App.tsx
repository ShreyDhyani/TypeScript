import React, { useEffect, useState } from "react";
import TodoTask from "./components/TodoTask";
import { Todo } from "./Interfaces";
import {
  createData,
  getData,
} from "./conrollers/localstorageConrolers";
// import { completeTodo } from "./conrollers/completeTodo";
import { deleteTodo } from "./conrollers/deleteTodo";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todos, setTodos] = useState<Todo[]>(getData());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else {
      setDeadline(parseInt(e.target.value));
    }
  };

  const validate = (): boolean => {
    if (task !== "" && deadline !== 0) return true;
    return false;
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem(
        "data",
        JSON.stringify([
          ...todos,
          { task: task, deadline: deadline, status: false },
        ])
      );
      setTodos([...getData()]);
      setDeadline(0);
      setTask("");
    }
  };

  const deleteTask = (todoName: string): void => {
    setTodos(deleteTodo(todoName));
  };

  // const completeTask = (todoName:string): void =>{
  //   setTodos(completeTodo(todoName));
  // }

  useEffect(() => {
    if (!getData()) {
      createData();
    }
  }, []);

  return (
    <div className="App">
      <div className="InputContainer flex flex-col mx-auto pb-2 border-b-2 w-7/12">
        <input
          className="w-9/12 p-2 mx-auto my-2 border-2 rounded-lg"
          type="text"
          placeholder="Task..."
          value={task}
          name="task"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          className="w-7/12 p-2 mx-auto my-2 border-2 rounded-lg"
          type="number"
          placeholder="Deadline (in Days...)"
          value={deadline}
          name="deadline"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button
          className="bg-blue-300 rounded-lg w-fit mx-auto p-3 mt-2 text-white hover:bg-blue-500"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          {"Add Task"}
        </button>
      </div>
      <div className="TodoList flex flex-col mx-auto justify-center items-center mt-3">
        {todos?.map((todo: Todo, key: number) => {
          return (
            <TodoTask
              key={key}
              todo={todo}
              deleteTask={deleteTask}
              // completeTask={completeTask}
            />
          );
        })}
      </div>
      {/* <button
        onClick={(e) => {
          console.log(todos);
        }}
      >
        Clicky
      </button> */}
    </div>
  );
};

export default App;
