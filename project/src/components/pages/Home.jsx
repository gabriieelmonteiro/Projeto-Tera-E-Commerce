import React from "react";

import macaco from "../../img/DALL·E 2023-04-19 21.06.20 - A cartoon of a monkey in space.png";
import fish from "../../img/DALL·E 2023-04-19 21.08.49 - A photo of a Samoyed dog with its tongue out hugging a white Siamese cat.png";
import teddy from "../../img/DALL·E 2023-04-19 21.06.53 - A photo of a teddy bear on a skateboard in Times Square.png";
import futuristic from "../../img/DALL·E 2023-04-19 21.09.20 - Two futuristic towers with a skybridge covered in lush foliage, digital art.png";
import dog from "../../img/DALL·E 2023-04-19 21.05.32 - 3D render of a cute tropical fish in an aquarium on a dark blue background, digital art.png";

import Default from "../template/Default";

export default function Home() {
  return (
    // Importando os components Header e Footer
    <div>
      <Default>
        <section class="container__banner">
          <h1 class="banner__titulo">Já sabe por onde começar?</h1>
          <p class="banner__texto">Encontre aqui a obra que você procura!</p>
          <input
            type="search"
            placeholder="Busque pela obra autor ou categoria"
            class="banner__pesquisa__input w-100"
          />
        </section>
        <section class="obras__recentes mt-3">
          <h2 class="mb-3 mx-4">Novos lançamentos</h2>
          <div class="row mx-4">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 justify-content-around">
              <div class="card mx-3">
                <img src={fish} class="card-img-top" alt="..." />
                <div class="card-body">
                  <div class="card-title">Cute tropical fish</div>
                  <div class="card-text text-center">DALL.E2</div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
              <div class="card mx-3">
                <img src={macaco} class="card-img-top" alt="..." />
                <div class="card-body">
                  <div class="card-title">Monkey in space</div>
                  <div class="card-text text-center">DALL.E2</div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
              <div class="card mx-3">
                <img src={teddy} class="card-img-top" alt="..." />
                <div class="card-body">
                  <div class="card-title">Teddy bear on a skateboard</div>
                  <div class="card-text text-center">DALL.E2</div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
              <div class="card mx-3">
                <img src={teddy} class="card-img-top" alt="..." />
                <div class="card-body">
                  <div class="card-title">Teddy bear on a skateboard</div>
                  <div class="card-text text-center">DALL.E2</div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
              <div class="card mx-3">
                <img src={dog} class="card-img-top" alt="..." />
                <div class="card-body">
                  <div class="card-title">Samoyed dog</div>
                  <div class="card-text text-center">DALL.E2</div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
              <div class="card mx-3">
                <img src={futuristic} class="card-img-top" alt="..." />
                <div class="card-body">
                  <div class="card-title">Futuristic towers</div>
                  <div class="card-text text-center">Creditas</div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
              <div class="card mx-3">
                <img src={fish} class="card-img-top" alt="..." />
                <div class="card-body">
                  <div class="card-title">Cute tropical fish</div>
                  <div class="card-text text-center">DALL.E2</div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
              <div class="card mx-3">
                <img src={macaco} class="card-img-top" alt="..." />
                <div class="card-body">
                  <div class="card-title">Monkey in space</div>
                  <div class="card-text text-center">DALL.E2</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Default>
    </div>
  );
}
