import React, { useState } from 'react';
import "./Auth.scss";
import { AuthOptions, RegisterForm, LoginForm } from "../../components/Auth";
import { Image } from 'semantic-ui-react';
import { logoNameWhite } from "../../assets";

export function Auth() {
  // Const
  const [typeForm, setTypeForm] = useState(null);

  // Functions
  const openLoginForm = () => setTypeForm("login");
  const openRegisterForm = () => setTypeForm("register");
  const goBack = () => setTypeForm(null);

  const renderComponent = () => {
    switch (typeForm) {
      case "login":
        return <LoginForm openRegisterForm={openRegisterForm} goBack={goBack} />;
      case "register":
        return <RegisterForm openLoginForm={openLoginForm} goBack={goBack} />;
      default:
        return <AuthOptions openLoginForm={openLoginForm} openRegisterForm={openRegisterForm} />;
    }
  }

  return (
    <div className='auth'>
      <div className='auth_content'>
        <Image src={logoNameWhite} alt="Musicfy" className='auth_content-logo' />
        {renderComponent()}
      </div>
    </div>
  )
}