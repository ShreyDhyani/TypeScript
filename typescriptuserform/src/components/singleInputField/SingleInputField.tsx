import { useState } from "react";

type Props = {
  tag: string;
  value: string;
  form: Object;
  onChange: any;
};

export default function SingleInputField({ tag, value, form, onChange }: Props) {
  // const [input, setInput] = useState("");

  // const setInputValue = (v:string) => {
  //   setInput(v);
  //   value = v;
  //   console.log(value);
  // }

  return (
    <div className="SingleInputField py-2 px-1">
      <label className="flex flex-row ">
        <div className="w-4/12 text-center">{tag}</div>
        <input 
          className="bg-blue-200 w-full ml-2" 
          type="text" 
          value={value} 
          // onChange={(e) => onChange(,e.target.value)}
        />
      </label>
    </div>
  );
}
