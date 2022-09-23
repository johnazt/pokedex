import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PokemonCard = props => {
    const navigate = useNavigate()
	const [pokemon, setPokemon] = useState({});

	useEffect(() => {
		axios.get(props.url).then(res => setPokemon(res.data));
	}, []);


	return (
        <div onClick={() => navigate(`/pokemons/${pokemon.id}`)}>
			<img
				src={pokemon.sprites?.other.dream_world.front_default}
				alt="pokemon-img"
			/>
			<p>{pokemon.name}</p>

		</div>
	);
};

export default PokemonCard;
