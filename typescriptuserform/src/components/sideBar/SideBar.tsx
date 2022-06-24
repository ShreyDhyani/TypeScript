import React, { useEffect, useState } from "react";
import { FaPencilAlt } from 'react-icons/fa'

export default function SideBar() {
  const [users, setUsers] = useState(["No data present"]);

  interface userinterface {
    username: string;
    mobile_no: string;
    email: string;
  }

  useEffect(() => {
    if (localStorage.getItem("users_data")) {
      setUsers(JSON.parse(localStorage.getItem("users_data")!));
    }
  }, []);

  const deleteUser = (index: number) => {
    console.log(index);
    console.log(users);
    let array = users;
    array.splice(index,1)
    setUsers([...array]);
    localStorage.setItem("users_data", JSON.stringify(array));
  }

  const displayUsers = (user: userinterface, index: number) => {
    return (
      <div key={index} className="UserCard p-2 m-2 flex  text-sm bg-amber-200 border-amber-700 border-2 rounded-md">
        <label className="userLabel flex-1">{user.username} : {user.email}</label>
        <button className="deleteButton flex-none w-2 m-1" onClick={()=> deleteUser(index)}><FaPencilAlt color="red"/></button>
      </div>
    );
  };

  // const checkArray = (users:any) => {
  //   if (users.)

  // }

  return (
    <div className="SideBar h-full flex-none w-4/12 p-2 m-1 border-amber-700 border-2 rounded-md bg-amber-100 ">
      <div className="UserList flex flex-col">
        {users.map((user, index ) => displayUsers(user as unknown as userinterface, index))}
        {/* {users.map( (user) => <label>{user}</label> )} */}
      </div>
    </div>
  );
}
