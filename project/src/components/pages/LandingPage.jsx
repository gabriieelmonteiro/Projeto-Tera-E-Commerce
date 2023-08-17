import React, { useState } from "react";

export default function LandingPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    fetch("https://artsapi.onrender.com/arts/", {
      method: "POST",
      body: JSON.stringify({ name, image, price }),
      headers: { "Content-type": "application/json" },
    }).then(() => {
      setName("");
      setPrice("");
      setImage("");
    });
  };

  return (
    <div className="wrapper">
      <div className="app-header">
        <div className="app-header__logo">
          <img src="images/logo.svg" className="responsive" alt="" />
        </div>
        <div className="app-header__menu">
          <i className="fa fa-bars"></i>
        </div>
      </div>

      <div className="create-post">
        <h1>Criar</h1>

        <form onSubmit={handleFormSubmit} className="create-post__form">
          <div className="create-post__form-name">
            <label htmlfor="name">Título</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="create-post__form-price">
            <label htmlFor="price">Preço</label>
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>

          <div className="create-post__form-image">
            <label htmlFor="image">Url da imagem</label>
            <input
              type="text"
              id="image"
              image="image"
              value={image}
              onChange={(event) => setImage(event.target.value)}
            />
          </div>

          <button className="button-primary">Salvar</button>
        </form>
      </div>

      <div className="app-footer">Módulo React :: Full Stack Development</div>
    </div>
  );
}
