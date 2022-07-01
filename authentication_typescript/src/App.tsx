// import Home from "./pages/Home/home";

// export default function App() {
//   return (
//     <div className="App">
//       <Home />
//     </div>
//   );
// }

// import { TextField } from './components/textfield/TextField';
//<TextField name={'Here is a string.'} />

// interface Person {
//   firstName: string;
//   lastName: string;
//   age?: number;
//   email?: string;
//   mobile_No?: string;
//   DOB?: Date;
// }
// const print = (person: Person) => {
//   console.log("My name is ", person.firstName, " ", person.lastName);
//   if(person.age !== undefined){
//     console.log("I am ", person.age, " years old");
//   }
//   if(person.email !== undefined){
//     console.log("Email me at ", person.email);
//   }
// }

import React from "react";
import Home from "./pages/Home/home";

const App: React.FC = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
