import React from "react";
import { Link, useParams } from "react-router-dom";
import { pokemones } from "../data/pokemones";
import "./cards.css";
import ProgressBar from "@ramonak/react-progress-bar";

function Cards() {
  let { nombre } = useParams();
  let pokemon = pokemones.filter(pokemon => pokemon.name === nombre)[0]
  
  const currentIndex = pokemones.findIndex(pokemones => { return pokemones.name === pokemon.name })
  let prevName = 0
  if (currentIndex === 0) {
    prevName = pokemones[pokemones.length - 1].name
  } else {
    prevName = pokemones[currentIndex - 1].name
  }
  let nextName = 0
  if (currentIndex === pokemones.length - 1) {
    nextName = pokemones[0].name
  } else {
    nextName = pokemones[currentIndex + 1].name
  };

  return (
    <>
    
      <div className="card-container">
          <div style={{backgroundColor:`${pokemon.color}`}} className="card">
            <div className="img-container">
                <Link to="/">
                  <img className="arrow-img" src="/Imagenes/arrow-left.svg" />
                </Link>
                  <h1 style={{color:"white"}} className="nameTag">{pokemon.name}</h1>
                  <div style={{color:"white"}} className="idTag">#{pokemon.id}</div>
            </div>
            <div className="boxImage">
              <Link to={`/pokemon/${prevName}`}>
              <button className="arrowScroll2">
              <img src="/Imagenes/Frame.svg" />
              </button>
              </Link>

              <img
                className="card-image"
                src={`/Imagenes/${pokemon.profile}.png`}/>


              <Link to={`/pokemon/${nextName}`}>
              <button className="arrowScroll1">
              <img className="arrowScroll" src="/Imagenes/Frame.svg" />
              </button>
              </Link>
              
            </div>
            <div className="info-container">
              <div className="container">
                <div style={{backgroundColor:`${pokemon.color}`}} className="types">{pokemon.type}</div>
                {pokemon.type2 && (<div style={{backgroundColor: `${pokemon.color2}`}} className="types">{pokemon.type2}</div>)}
              </div>

              <h3 style={{color:`${pokemon.color}`}}>About</h3>

              <div className="about-pokemon">
                    <p>{pokemon.about}</p>
                <div className="weight">
                    <div className="data-container">
                        <img src="/Imagenes/Weight.svg" />
                        <div>{pokemon.weight}kg</div>
                    </div>
                    <div className="dataText">Weight</div>
                </div>
                <div className="height">
                  <div className="data-container">
                    <img src="/Imagenes/Height.svg" />
                    <div>{pokemon.height}m</div>
                  </div>
                  <div className="dataText">Height</div>
                </div>

                <div className="moves-container">
                    <div className="moves">
                        {pokemon.moves}
                        {pokemon.moves2 && (<div>{pokemon.moves2}</div>)}
                    </div>
                  <div className="dataText">Moves</div>
                </div>

            </div>
              
              <p>{pokemon.info}</p>

              <div className="Stats">
                <h3 style={{color:`${pokemon.color}`}}>Base Stats</h3>
                <ul>
                  <li>
                    <div style={{color:`${pokemon.color}`}} className="stats-name">HP</div>
                    <div className="stats-value">{pokemon.hp}</div>
                    <ProgressBar
                    bgColor={pokemon.color}
                    completed={pokemon.hp}
                    maxCompleted={300}
                    height={5}
                    isLabelVisible={false}
                    className="file"
                    baseBgColor={pokemon.color3} />
                  </li>
                  <li>
                    <div style={{color:`${pokemon.color}`}} className="stats-name">ATK</div>
                    <div className="stats-value">{pokemon.atk}</div>
                    <ProgressBar
                    bgColor={pokemon.color}
                    completed={pokemon.atk}
                    maxCompleted={300}
                    height={5}
                    isLabelVisible={false}
                    className="file"
                    baseBgColor={pokemon.color3} />
                  </li>
                  <li>
                    <div style={{color:`${pokemon.color}`}} className="stats-name">DEF</div>
                    <div className="stats-value">{pokemon.def}</div>
                    <ProgressBar
                    bgColor={pokemon.color}
                    completed={pokemon.def}
                    maxCompleted={300}
                    height={5}
                    isLabelVisible={false}
                    className="file"
                    baseBgColor={pokemon.color3} />
                  </li>
                  <li>
                    <div style={{color:`${pokemon.color}`}} className="stats-name">SATK</div>
                    <div className="stats-value">{pokemon.satk}</div>
                    <ProgressBar
                    bgColor={pokemon.color}
                    completed={pokemon.satk}
                    maxCompleted={300}
                    height={5}
                    isLabelVisible={false}
                    className="file"
                    baseBgColor={pokemon.color3} />
                  </li>
                  <li>
                    <div style={{color:`${pokemon.color}`}} className="stats-name">SDEF</div>
                    <div className="stats-value">{pokemon.sdef}</div>
                    <ProgressBar
                    bgColor={pokemon.color}
                    completed={pokemon.sdef}
                    maxCompleted={300}
                    height={5}
                    isLabelVisible={false}
                    className="file"
                    baseBgColor={pokemon.color3} />
                  </li>
                  <li>
                    <div style={{color:`${pokemon.color}`}} className="stats-name">SPD</div>
                    <div className="stats-value">{pokemon.spd}</div>
                    <ProgressBar
                    bgColor={pokemon.color}
                    completed={pokemon.spd}
                    maxCompleted={300}
                    height={5}
                    isLabelVisible={false}
                    className="file"
                    baseBgColor={pokemon.color3} />
                    
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}
export default Cards;
