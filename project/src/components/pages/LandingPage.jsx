import React from "react";

import leao from "../../img/Leao.png";
import sopa from "../../img/sopa.png";

export default function LandingPage() {
  return (
    <div className="d-flex justify-content-evenly align-items-center">
      <div className="">
        <h1 className="h1">
          Nós estamos aqui para te proporcionar a melhor experiência em compra e
          venda de obras de arte, seja muito bem-vindo e tenha uma ótima
          apreciação.
        </h1>
      </div>

      <div className="">
        <form className="form-inline">
          <div className="form-row">
            <h6>Preencha o formulário para receber atualizações</h6>

            <div className="form-group col-md-12">
              <label htmlFor="inputName4">Nome</label>
              <input
                type="name"
                className="form-control"
                id="inputName"
                placeholder="Escreva seu nome"
              />
            </div>

            <div className="form-group col-md-12">
              <label htmlFor="inputEmail4">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Escreva seu email"
              />
            </div>

            <div className="form-group col-md-12">
              <label htmlFor="inputPhone4">WhatsApp</label>
              <input
                type="number"
                className="form-control"
                id="inputPhone"
                placeholder="Escreva seu número"
              />
            </div>

            <div className="form-group col-md-12">
              <label>Principal interesse</label>
              <select
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
              >
                <option disabled selected>
                  Selecione
                </option>
                <option value="purchaser">Comprar</option>
                <option value="artist">Expor</option>
                <option value="both">Explorar as Possibilidades</option>
              </select>
            </div>

            <button className="btn btn-primary">Enviar</button>
          </div>
        </form>
      </div>
      <div className="d-flex">
        <div className="d-block p-2 align-items-center justify-content-around">
          <h2 className="h2">
            Quem Somos: Nosso site foi criado para permitir que artistas possam
            expor e vender suas obras de forma simplificada, intuitiva e
            personalizada.
            <small className="text-muted">
              Auxiliando aos compradores e colecionadores a ter um contato
              direto com as obras e seus vendedores com conforto, praticidade e
              principalmente privacidade.
            </small>
          </h2>
          <img
            width="70%vp"
            className="img-fluid rounded float-end"
            src={leao}
            alt="Leao marinho branco com colar de perolas, com uma perola na boca "
          />
        </div>
      </div>
      <div className="d-block p-2 align-items-center justify-content-around">
        <h2 className="h2">
          Nosso objetivo: Nosso intuito é valorizar a sua visão como artista,
          fazendo uma curadoria que transmita ao comprador toda a expressividade
          de sua obra.
          <small className="text-muted img-left">
            Além da privacidade e praticidade para comprar suas obras
            priorizamos uma experiência confortável e de confiança. Geramos
            autonomia para artistas e compradores.
          </small>
        </h2>
        <img
          width="70%vp"
          className="img-fluid rounded float-start"
          src={sopa}
          alt="Uma tigela de sopa com um portal para outro universo"
        />
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-between border-top h-25">
        <p>© 2023 GGAF Inc. All rights reserved.</p>
      </div>
    </div>
  );
}
