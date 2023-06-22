import React from "react";

import favoritos from "../../img/Favoritos.svg";
import usuario from "../../img/Usuário.svg";

export default function Header() {
  return (
    <section class="cabecalho">
      <div class="container"></div>
      <div className="lista-menu">
        <p>Quem somos</p>
        <p>Login e Cadastro</p>
        <p>Quem somos</p>
      </div>

      <div class="perfil">
        <i>
          <img src={favoritos} alt="" />
        </i>
        <i>
          <img src={usuario} alt="" />
        </i>
      </div>
    </section>
  );
}
