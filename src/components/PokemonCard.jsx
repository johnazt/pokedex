import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PokemonCard = props => {
	const navigate = useNavigate();
	const [pokemon, setPokemon] = useState({});
	const types = pokemon.types;

	useEffect(() => {
		axios.get(props.url).then(res => setPokemon(res.data));
	}, []);


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
				<div >
					{types?.map(elem => (
						<span className="pokemon-card-type" key={elem.slot}>
							{(elem.type.name).charAt(0).toUpperCase() + (elem.type.name).slice(1)}
							{types.length > 1 && types.indexOf(elem) === 0 ? " / " : ""}
						</span>
					))}
				</div>
				<span style={{ color: "#9F9F9F", paddingBottom:"1em" }}>Type</span>
				<hr style={{ width: "100%", border:"none", borderTop:"1px solid #E5E5E5"} } />
				<div className="pokemon-card-stats">
					<div className="pokemon-stats">
						<p>HP</p> 
						<span>{pokemon.stats && pokemon.stats[0].base_stat}</span>
					</div>
					<div className="pokemon-stats">
						<p>ATTACK</p> 
						<span>{pokemon.stats && pokemon.stats[1].base_stat}</span>
					</div>
					<div className="pokemon-stats">
						<p>DEFENSE</p> <span>{pokemon.stats && pokemon.stats[2].base_stat}</span>
					</div>
					<div className="pokemon-stats">
						<p>SPEED</p> <span>{pokemon.stats && pokemon.stats[5].base_stat}</span>
					</div>
				</div> 
			</div>
		</div>
	);
};

export default PokemonCard;
