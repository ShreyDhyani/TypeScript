import React, { useEffect, useState } from "react";
import FormField from "../supportComponents/formField";
import { registrationForm, user } from "../../intefaces/interfaces";
import { field } from "../../types/types";

const RegistrationForm: React.FC = () => {
  const [registrationFormData, setRegistrationFormData] =
    useState<registrationForm>({
      email: "",
      password: "",
      re_password: "",
    });
  const [users, setUsers] = useState<string | null>("");

  const handleValueChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: field
  ) => {
    setRegistrationFormData({
      ...registrationFormData,
      [field]: e.target.value,
    });
  };

  const validate = () => {
    if (
      Object.values(registrationFormData).includes("") ||
      registrationFormData["password"] !== registrationFormData["re_password"] ||
      users?.includes(`"email":"${registrationFormData.email}"`)
    ) {
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // console.log(users);
      // console.log(`"email":"${registrationFormData.email}"`);
      // console.log(users?.includes(`"email":"${registrationFormData.email}"`));
      // console.log(Object.values(registrationFormData).includes(""));
      // console.log(registrationFormData["password"] !== registrationFormData["re_password"]);
      // console.log(validate());
      if (validate()) {
        console.log(users);
        let array: user[] = JSON.parse(users as string);
        array.push({
          email: registrationFormData.email,
          password: registrationFormData.password,
        });
        localStorage.setItem("users", JSON.stringify(array));
        setUsers(localStorage.getItem("users"));
        setRegistrationFormData({
          ...registrationFormData,
          email: "",
          password: "",
          re_password: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", "[]");
    } else {
      setUsers(localStorage.getItem("users"));
    }
  }, []);

  return (
    <div className="RegistrationForm flex-auto p-3 mx-auto w-5/12 my-5 border-2 border-red-200 rounded-lg">
      <label className=" mb-3 flex w-full justify-center text-sky-600 text-3xl">
        {"RegistrationForm"}
      </label>
      <form
        className="flex flex-col items-center"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <FormField
          labelText="Email"
          inputValue={registrationFormData}
          change={handleValueChange}
          field="email"
        />
        <FormField
          labelText="Password"
          inputValue={registrationFormData}
          change={handleValueChange}
          field="password"
        />
        <FormField
          labelText="Re Password"
          inputValue={registrationFormData}
          change={handleValueChange}
          field="re_password"
        />
        <button className="border-blue-700 text-blue-700 p-3 mx-1 my-3 border-2 bg-amber-300 rounded-lg hover:bg-blue-700 hover:text-white">
          Submit
        </button>
      </form>
    </div>
  );
};
export default RegistrationForm;
