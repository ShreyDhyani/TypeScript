import { useState, useEffect } from 'react';
import SideBar from '../components/sideBar/SideBar';
import UserForm from '../components/userForm.js/UserForm';

export default function Home() {
  const [userData, setUsersData] = useState(null);

  const check = () => {
    console.log(userData);
  };

  function addUserData(){
    
  }

  useEffect(() => {
    if (!localStorage.getItem("users_data")) {
      localStorage.setItem("users_data", JSON.stringify([]));
    } else {
      setUsersData(JSON.parse(localStorage.getItem("users_data")!));
    }
  }, []);


  return (
    <>
    <div className="App flex flex-wrap mt-3">
        <UserForm />
        <SideBar />
      </div>
      <div className="w-full  items-center inline-block">
        <button
          className="bg-red-900 text-white py-3 px-7 m-7 rounded-md "
          onClick={() => check()}
        >
          Checker
        </button>
      </div>
    </>
  )
}
