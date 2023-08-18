import React, { useState } from "react";

import logo from "../../img/logo.jpg";

export default function Logon() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    fetch("https://artsapi.onrender.com/users/", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-type": "application/json" },
    }).then(() => {
      setName("");
      setEmail("");
      setPassword("");
    });
  };
  return (
    <div>
      <div className="login center">
        <div className="login__logo">
          <img src={logo} className="responsive" alt="" />
        </div>
        <form onSubmit={handleFormSubmit} className="login__form">
          <div className="login__form-name">
            <label htmlFor="name">Nome Completo</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="login__form-email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="login__form-password">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button class="button-primary">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
