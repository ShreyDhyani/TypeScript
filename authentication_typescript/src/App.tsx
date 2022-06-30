// import Home from "./pages/Home/home";

// export default function App() {
//   return (
//     <div className="App">
//       <Home />
//     </div>
//   );
// }

import React from 'react';
import { TextField } from './components/textfield/TextField';

interface Person {
  firstName: string;
  lastName: string;
  age?: number;
  email?: string;
  mobile_No?: string;
  DOB?: Date;
}

const App: React.FC = () => {

  const print = (person: Person) => {
    console.log("My name is ", person.firstName, " ", person.lastName);
    if(person.age !== undefined){
      console.log("I am ", person.age, " years old");
    }
    if(person.email !== undefined){
      console.log("Email me at ", person.email);
    }
  }

  return(
    <div>
      <TextField name={'Here is a string.'} id={1} status={true} func={print}/>
    </div>
  )
}

export default App;