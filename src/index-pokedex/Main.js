import React, { useState, useEffect } from "react";
import { pokemones as pokemonsData } from "../data/pokemones";
import "./Main.css";
import { Link } from "react-router-dom";
import CardList from "../cardList/CardList";

function Main() {
  const [pokemones, setPokemones] = useState(pokemonsData);
  const [searchText, setSearchText] = useState("");
  const searchHandler = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  useEffect(() => {
    if (searchText) {
      const filteredPokemons = pokemonsData.filter(
        (pokemon) => pokemon.profile.includes(searchText)
      );
      setPokemones(filteredPokemons);
    }
    else {setPokemones(pokemonsData)};
  }, [searchText]);

  return (
    <>
      <CardList
        searchText={searchText}
        searchHandler={searchHandler}
        setPokemones={setPokemones}
      />
      <div className="searchCard">
        {pokemones.map((pokemon) => (
          <Link
            key={pokemon.name}
            style={{ textDecoration: "none" }}
            to={`/pokemon/${pokemon.name}`}
          >
            <div
              style={{ borderColor: `${pokemon.color}` }}
              className="pokemon-container"
            >
              <span style={{ color: `${pokemon.color}` }} className="id-number">
                #{pokemon.id}
              </span>
              <img
                className="pokemon-image"
                src={`/Imagenes/${pokemon.profile}.png`}
              />
              <div
                style={{ backgroundColor: `${pokemon.color}` }}
                className="name"
              >
                {pokemon.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Main;
