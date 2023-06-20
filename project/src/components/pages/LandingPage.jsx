import React from "react";

export default function LandingPage() {
  return (
    <div class="d-flex justify-content-evenly align-items-center">
      <div class="">
        <h1 class="h1">
          Nós estamos aqui para te proporcionar a melhor experiência em compra e
          venda de obras de arte, seja muito bem-vindo e tenha uma ótima
          apreciação.
        </h1>
      </div>

      <div class="">
        <form class="form-inline">
          <div class="form-row">
            <h6>Preencha o formulário para receber atualizações</h6>

            <div class="form-group col-md-12">
              <label for="inputName4">Nome</label>
              <input
                type="name"
                class="form-control"
                id="inputName"
                placeholder="Escreva seu nome"
              />
            </div>

            <div class="form-group col-md-12">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                class="form-control"
                id="inputEmail"
                placeholder="Escreva seu email"
              />
            </div>

            <div class="form-group col-md-12">
              <label for="inputPhone4">WhatsApp</label>
              <input
                type="number"
                class="form-control"
                id="inputPhone"
                placeholder="Escreva seu número"
              />
            </div>

            <div class="form-group col-md-12">
              <label>Principal interesse</label>
              <select
                class="form-select form-select-sm"
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

            <button class="btn btn-primary">Enviar</button>
          </div>
        </form>
      </div>
    </div>

    //   <div class="d-flex">
    //   <div class="d-block p-2 align-items-center justify-content-around">
    //     <h2 class="h2">
    //       Quem Somos: Nosso site foi criado para permitir que artistas possam
    //       expor e vender suas obras de forma simplificada, intuitiva e
    //       personalizada.
    //       <small class="text-muted"
    //         >Auxiliando aos compradores e colecionadores a ter um contato direto
    //         com as obras e seus vendedores com conforto, praticidade e
    //         principalmente privacidade.</small
    //       >
    //     </h2>
    //     <!-- <div id="" class=""></div> -->
    //     <img
    //       width="70%vp"
    //       class="img-fluid rounded float-end"
    //       src="img/Leao.png"
    //       alt="Leao marinho branco com colar de perolas, com uma perola na boca "
    //     />
    //   </div>

    //   <div class="d-block p-2 align-items-center justify-content-around">
    //     <h2 class="h2">
    //       Nosso objetivo: Nosso intuito é valorizar a sua visão como artista,
    //       fazendo uma curadoria que transmita ao comprador toda a expressividade
    //       de sua obra.
    //       <small class="text-muted img-left"
    //         >Além da privacidade e praticidade para comprar suas obras
    //         priorizamos uma experiência confortável e de confiança. Geramos
    //         autonomia para artistas e compradores.</small
    //       >
    //     </h2>
    //     <!-- <div id="" class=""></div> -->
    //     <img
    //       width="70%vp"
    //       class="img-fluid rounded float-start"
    //       src="img/sopa.png"
    //       alt="Uma tigela de sopa com um portal para outro universo"
    //     />
    //   </div>
    // </div>
  );
}
