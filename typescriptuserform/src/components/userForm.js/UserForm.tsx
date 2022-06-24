import React, { useEffect, useState } from "react";
// import SingleInputField from "../singleInputField/SingleInputField";

export default function UserForm() {

  interface user {
    username: string;
    mobile_no: string;
    email: string;
  }

  const [input, setInput] = useState({
    username: "",
    mobile_no: "",
    email: "",
  });
  const [usersData, setUsersData] = useState(Array);

  const validation = (data: user) => {
    const values = Object.values(data);
    if(values.includes("")){
      return false;
    }
    return true;
  }

  const clearInput = () => {
    setInput({
      username: "",
      mobile_no: "",
      email: "",
    });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(validation(input)){
      usersData.push(input);
      localStorage.setItem("users_data", JSON.stringify(usersData));
      clearInput();
    }
  };

  const onChange = (value:string, location:string) => {
    setInput({...input, [location]: value})
  };

  useEffect(()=> {
    if(!localStorage.getItem("users_data")){
      localStorage.setItem("users_data", JSON.stringify([]));
    }else{
      setUsersData(JSON.parse(localStorage.getItem("users_data")!));
    }
  }, [])

  return (
    <div className="UserForm flex-1 p-2 m-1 border-blue-700 border-2 rounded-md bg-blue-100">
      <form className="flex flex-col" onSubmit={ (e) => handleSubmit(e)}>
        <div className="UsernameInputField py-2 px-1">
          <label className="flex flex-row ">
            <div className="w-4/12 text-center p-1">Username</div>
            <input
              className="bg-blue-200 w-full ml-2 p-1"
              type="text"
              value={input.username}
              onChange={(e) => onChange(e.target.value, "username")}
            />
          </label>
        </div>
        <div className="MobileNoInputField py-2 px-1">
          <label className="flex flex-row ">
            <div className="w-4/12 text-center p-1">Mobile No</div>
            <input
              className="bg-blue-200 w-full ml-2 p-1"
              type="text"
              value={input.mobile_no}
              onChange={(e) => onChange(e.target.value, "mobile_no")}
            />
          </label>
        </div>
        <div className="EmailInputField py-2 px-1">
          <label className="flex flex-row ">
            <div className="w-4/12 text-center p-1">Email</div>
            <input
              className="bg-blue-200 w-full ml-2 p-1"
              type="text"
              value={input.email}
              onChange={(e) => onChange(e.target.value, "email")}
            />
          </label>
        </div>
        {/* <SingleInputField
          tag="Username"
          value={form.username}
          form={form}
          onChange={onChange}
        /> */}
        <input className="text-white bg-blue-700 w-fit self-center mt-3 py-1 px-3 rounded-md" type="submit" />
      </form>
    </div>
  );
}
