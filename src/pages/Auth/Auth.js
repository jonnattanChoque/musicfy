import React, { useState } from 'react';
import "./Auth.scss";
import { AuthOptions, RegisterForm, LoginForm } from "../../components/Auth";

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
    <div>
      {renderComponent()}
    </div>
  )
}