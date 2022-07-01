import React from "react";
import { registrationForm, loginForm } from "../../intefaces/interfaces";
import { field } from "../../types/types";

interface Props {
  labelText: string;
  inputValue: registrationForm | loginForm;
  change: (e: React.ChangeEvent<HTMLInputElement>, field: field) => void;
  field: field;
}

const FormField: React.FC<Props> = ({
  labelText,
  inputValue,
  change,
  field,
}) => {
  return (
    <div className="formField m-2 flex w-full bg-sky-50 border-2 border-blue-500 rounded-md">
      <label className="flex-none text-center p-2 text-blue-400 w-3/12">
        {labelText}
      </label>
      <input
        className={"flex-1 p-1 mx-1 outline-none"}
        value={inputValue[field as keyof loginForm]}
        type= { field === 'password' || field === 're_password'? 'password' : 'text'}
        onChange={(e) => change(e, field)}
      />
    </div>
  );
};

export default FormField;
