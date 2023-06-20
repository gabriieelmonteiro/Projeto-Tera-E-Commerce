import React from "react";

import logo from "../../img/logo.jpg";

export default function Login() {
  return (
    <div className="login center">
      <div className="login__logo">
        <img src={logo} className="responsive" alt="" />
      </div>
      <form className="login__form">
        <div className="login__form-email">
          <label htmlFor="email">Usuário</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="login__form-password">
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="password" />
        </div>
      </form>
    </div>
  );
}
