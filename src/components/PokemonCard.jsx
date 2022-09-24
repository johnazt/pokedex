import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PokemonCard = props => {
	const navigate = useNavigate();
	const [pokemon, setPokemon] = useState({});

	useEffect(() => {
		axios.get(props.url).then(res => setPokemon(res.data));
	}, []);

	const types = pokemon.types;

	return (
		<div
			className="pokemon-card"
			onClick={() => navigate(`/pokemons/${pokemon.id}`)}
		>
			<div className="pokemon-card-img">
				<img
					src={
						pokemon.sprites?.other?.["official-artwork"].front_default !== null
							? pokemon.sprites?.other?.["official-artwork"].front_default
							: pokemon.sprites.other.home?.front_default ||
							  pokemon.sprites.front_default
					}
					alt="pokemon-img"
				/>
			</div>

			<div className="pokemon-card-info">
				<p className="pokemon-card-name">{pokemon.name}</p>
				<div>
					{types?.map(elem => (
						<span key={elem.slot}>
							{elem.type.name}
							{types.length > 1 && types.indexOf(elem) === 0 ? "/" : ""}
						</span>
					))}
				</div>
				<span>Type</span>
			</div>



		</div>
	);
};

export default PokemonCard;
