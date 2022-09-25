import pokeImg from '../assets/poketitle.png'
import React from 'react';

const PokeNav = () => {
    return (
        <div style={{padding: "0 1em"}} >
            <div className="bg-red-black bg-top"></div>
            <div className="container-title">
					<img className="pokemon-title-img" src={pokeImg} alt="poke-title" />
					<div className="pokeball pokeball-top"></div>
				</div>
        </div>
    );
};

export default PokeNav;