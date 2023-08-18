import React, { useState } from "react";

export default function CadastroObra() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [artist, setArtist] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    fetch("https://artsapi.onrender.com/arts/", {
      method: "POST",
      body: JSON.stringify({ name, image, price, artist, quantity }),
      headers: { "Content-type": "application/json" },
    }).then(() => {
      setName("");
      setPrice("");
      setImage("");
      setArtist("");
      setQuantity("");
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
        <h1>Cadastrar Obra</h1>

        <form onSubmit={handleFormSubmit} className="create-post__form">
          <div className="create-post__form-name">
            <label htmlFor="name">Título</label>
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
          <div className="create-post__form-image">
            <label htmlFor="image">Quantidade</label>
            <input
              type="number"
              id="quantity"
              image="quantity"
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
            />
          </div>
          <div className="create-post__form-artista">
            <label htmlFor="image">Artista</label>
            <input
              type="text"
              id="artist"
              image="artista"
              value={artist}
              onChange={(event) => setArtist(event.target.value)}
            />
          </div>

          <button className="button-primary">Upload</button>
        </form>
      </div>

      <div className="app-footer">© 2023 GGAF Inc. All rights reserved.</div>
    </div>
  );
}
