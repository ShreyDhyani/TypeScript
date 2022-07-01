import React, { useState } from "react";
import axios from "axios";

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
  // const [flag, setFlag] = useState<boolean | undefined>(false); This is infered type casting, here type is automatically given to flag which is boolean
  //I had to remove null and switch it to undefined since it is not accepted by input property display
  const [pokemonImageLink, setPokemondImageLink] = useState("");
  const [textInput, setTextInput] = useState("");

  //This here is an async function with an axios call which takes a string as an input
  const displayPokemonData = async (apiLink: string) => {
    let link = "";
    await axios
      .get(apiLink.toLowerCase())
      .then(async (response) => {
        console.log(response.data.sprites.front_default);
        link = response.data.sprites.front_default;
      })
      .catch(function (error) {
        console.log(error);
      });
    return link ? link : "No Data";
  };

  // setFlag(undefined); Will not work as null and undefined are not equal in typescript
  // setFlag(null); Will work since we used pipe '|' functionn to determine that flag can be both null and boolean.

  return (
    <div className="flex flex-col">
      <input
        className="m-auto my-4 p-4 w-4/12 border-2"
        placeholder="Enter Text here"
        // disabled={flag}
        value={textInput}
        onChange={(e) => {
          setTextInput(e.target.value);
        }}
      />
      <button
        className="bg-blue-400 rounded-lg w-fit m-auto p-3 hover:bg-blue-700 text-white"
        onClick={async () => {
          setPokemondImageLink(
            await displayPokemonData(`https://pokeapi.co/api/v2/pokemon/${textInput}`)
          );
        }}
      >
        Click
      </button>
      {/* Here I had to add undefined and remove null as disabled does not accept null to flag type */}
      <img
        src={pokemonImageLink}
        alt={pokemonImageLink}
        width="200"
        height="300"
        className="m-auto"
      />
      {/* <div className="m-auto" >{pokemonImageLink}</div> */}
    </div>
  );
};
