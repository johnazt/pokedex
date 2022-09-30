import pokeImg from "../assets/poketitle.png";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PokeNav = ({ setPokemons, setPage }) => {
	const navigate = useNavigate();

	const goToPokemonPage = () => {
		navigate("/pokemons");

		setPage(1);
		axios
			.get("https://pokeapi.co/api/v2/pokemon?limit=1155&offset=0")
			.then(res => setPokemons(res.data.results));
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
