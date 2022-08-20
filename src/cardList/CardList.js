import { pokemones } from "../data/pokemones";
import "../index-pokedex/Main.css";
import { useState } from "react";

function CardList({setPokemones, searchText, searchHandler}) {
  const [sortPokes, setsortPokes] = useState("byID");

  function sortByName() {
    const sortName = [...pokemones].sort((a, b) => (a.name > b.name ? 1 : -1));
    setPokemones(sortName);
    setsortPokes("byName");
  }

  function changeSort() {
    setPokemones(pokemones);
    setsortPokes("byID");
  }

  const initialText = "#";
  const [buttonText, setButtonText] = useState(initialText);

  function handleClick() {
    if (buttonText == "A") {
      setButtonText("#");
    } else {
      setButtonText("A");
    }
  }

  return (
    <div className="head">
      <div className="head-container">
        <img className="pokeball-img" src="/Imagenes/Pokeball.png" />
        <h1>Pokédex</h1>
        <button
          onClick={() => {
            sortPokes == "byID" ? sortByName() : changeSort();
            handleClick();
          }}
          className="sortButton"
        >
          {buttonText}
          <img src="/Imagenes/Arrow.svg" />
        </button>
      </div>
      <div className="searchBar">
        <input
          type="text"
          placeholder="🔍︎ Search"
          value={searchText}
          onChange={searchHandler}
        ></input>
      </div>
    </div>
  );
}

export default CardList;
