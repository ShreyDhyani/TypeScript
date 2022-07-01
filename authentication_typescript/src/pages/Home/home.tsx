import React from "react";
import LoginForm from "../../components/LoginForm/loginForm";
import RegistrationForm from "../../components/RegistrationForm/registrationForm";
import Topbar from "../../components/Topbar/topbar";



const Home: React.FC = () => {
  return (
    <div className="Home flex flex-col">
      <Topbar />
      <RegistrationForm/>
      {/* <LoginForm /> */}
    </div>
  );
};

export default Home;
