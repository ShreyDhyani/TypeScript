import React, { useState } from "react";
import FormField from "../supportComponents/formField";
import { loginForm } from "../../intefaces/interfaces";
import { field } from "../../types/types";

const LoginForm: React.FC = () => {
  const [loginFormData, setLoginFormData] =
    useState<loginForm>({
      email: "",
      password: "",
    });

  const handleValueChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: field
  ) => {
    setLoginFormData({
      ...loginFormData,
      [field]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const users  = localStorage.getItem("users");
    if(users?.includes(`"email":"${loginFormData.email}","password":"${loginFormData.password}"`)){
        console.log("User is Registered");
    }else{
        console.log("User is not registered");
    }
  };

  return (
    <div className="RegistrationForm flex-auto p-3 mx-auto w-5/12 my-5 border-2 border-red-200 rounded-lg">
      <label className=" mb-3 flex w-full justify-center text-sky-600 text-3xl">
        {"Login Form"}
      </label>
      <form
        className="flex flex-col items-center"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <FormField
          labelText="Email"
          inputValue={loginFormData}
          change={handleValueChange}
          field="email"
        />
        <FormField
          labelText="Password"
          inputValue={loginFormData}
          change={handleValueChange}
          field="password"
        />
        <button className="border-blue-700 text-blue-700 p-3 mx-1 my-3 border-2 bg-amber-300 rounded-lg hover:bg-blue-700 hover:text-white">
          Submit
        </button>
      </form>
    </div>
  );
};
export default LoginForm;
