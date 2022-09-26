import pokeImg from "../assets/poketitle.png";
import React from "react";
import { useNavigate } from "react-router-dom";
const PokeNav = () => {
	const navigate = useNavigate();
	const goToPokemonPage = () => {
		navigate("/pokemons");
	};
	return (
		<div style={{ padding: "0 1em" }}>
			<div className="bg-red-black bg-top"></div>
			<div className="container-title container-pokedex">
				<img
					onClick={goToPokemonPage}
					className="pokemon-title-img"
					src={pokeImg}
					alt="poke-title"
				/>

				<div className="pokeball pokeball-top"></div>
			</div>
		</div>
	);
};

export default PokeNav;
