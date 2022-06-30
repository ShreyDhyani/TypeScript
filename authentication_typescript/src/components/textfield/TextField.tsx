import React, { useState } from "react";


//This is a person interface all the fields describes a piece of information about person
//Each of the field is givrn a data type which can be primitive like number, boolean etc of it can 
//be a complex object like a Person
interface Person {
  firstName: string;
  lastName: string;
  age?: number;
  email?: string;
  mobile_No?: string;
  DOB?: Date;
  father?: Person;
}
//A ? added to type decleration makes it optional(the variable or prop, NOT THE TYPE)

interface Props {
  name: string;
  status?: boolean; //Fields with ? are not mandatory
  id?: number;
  func?: (person: Person) => void; //prop_name: () => return_type
} //These are props to be taken in by our current functional component
//See how the syntax below

export const TextField: React.FC<Props> = () => {
  const [flag, setFlag] = useState<boolean |undefined>(true); //This is infered type casting, here type is automatically given to flag which is boolean
  //I had to remove null and switch it to undefined since it is not accepted by input property display

  // setFlag(undefined); Will not work as null and undefined are not equal in typescript
  // setFlag(null); Will work since we used pipe '|' functionn to determine that flag can be both null and boolean.

  const turnOff = () =>{
    setFlag(!flag);
  }

  return (
    <div className="flex flex-col">
      <input className="m-auto my-4 p-4 w-4/12 border-2"  placeholder="Enter Text here" disabled={flag} />
      <button className="bg-blue-400 rounded-lg w-fit m-auto p-3 hover:bg-blue-700 text-white" onClick={(e)=>turnOff()}>Click</button>
      {/* Here I had to add undefined and remove null as disabled does not accept null to flag type */}
    </div>
  );
};
