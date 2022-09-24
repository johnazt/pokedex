import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/poketitle.png"

const PokemonCard = props => {
	const navigate = useNavigate();
	const [pokemon, setPokemon] = useState({});

	useEffect(() => {
		axios.get(props.url).then(res => setPokemon(res.data));
	}, []);

	return (
		<div
			className="pokemon-card"
			onClick={() => navigate(`/pokemons/${pokemon.id}`)}
		>
			<img
				src={
					pokemon.sprites?.other?.["official-artwork"].front_default !== null
						? pokemon.sprites?.other?.["official-artwork"].front_default
						: pokemon.sprites.other.home?.front_default ||
						  pokemon.sprites.front_default
				}
				alt="pokemon-img"
			/>
			<p>{pokemon.name}</p>
		</div>
	);
};

export default PokemonCard;
