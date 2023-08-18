import React, { useEffect, useState } from "react";
import Default from "../templates/Default";

export default function Home() {
  const [arts, setArts] = useState([]);

  const getApiData = async () => {
    const response = await fetch("https://artsapi.onrender.com/arts/").then(
      (response) => response.json()
    );
    setArts(response.data.arts);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <Default>
      <section className="container__banner">
        <h1 className="banner__titulo">Já sabe por onde começar?</h1>
        <p className="banner__texto">Encontre aqui a obra que você procura!</p>
        <input
          type="search"
          placeholder="Busque pela obra autor ou categoria"
          className="banner__pesquisa__input w-100"
        />
      </section>
      <section className="obras__recentes mt-3">
        <h2 className="mb-3 mx-4">Todas as Obras</h2>
        <div className="row mx-4 ">
          <div className="app">
            {arts &&
              arts.map((art) => (
                <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
                  <div className="card mx-3">
                    <img src={art.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="card-title text-center">
                      {art.name}
                      </div>
                      <div className="card-text text-center">{art.artist}</div>
                      <div className="card-text text-center">
                        R$ {art.price}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            ;
          </div>
        </div>
      </section>
    </Default>
  );
}
