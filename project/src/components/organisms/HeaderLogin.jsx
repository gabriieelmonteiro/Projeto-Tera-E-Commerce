import React from "react";

export default function HeaderLogin() {
  return (
    <nav id="nav" class="nav navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="landingPage.html">
        About
      </a>
      <button
        id="btnLogin-nav"
        class="btnLogin-nav container__text text-center"
      >
        Login
      </button>
      <button id="btnReg-nav" class="btnReg-nav container__text text-center">
        Register
      </button>
    </nav>
  );
}
