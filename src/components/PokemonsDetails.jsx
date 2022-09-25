import axios from "axios";
import React from "react";
import PokeNav from "./PokeNav";
import PokemonStats from "./PokemonStats";
import PokeMovements from "./PokeMovements";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const PokemonsDetails = () => {
	const { id } = useParams();

	const [pokeDetail, setPokeDetail] = useState({});

	useEffect(() => {
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
			.then(res => setPokeDetail(res.data));
	}, [id]);

	return (
		<div>
			<PokeNav />
			<div style={{ padding: "2em 1em" }}>
				<div className="pokemonDetail-info">
					<img
						src={
							pokeDetail.sprites?.other?.["official-artwork"].front_default !==
							null
								? pokeDetail.sprites?.other?.["official-artwork"].front_default
								: pokeDetail.sprites.other.home?.front_default ||
								  pokeDetail.sprites.front_default
						}
						alt="pokemon-detail"
					/>
					<span>#{pokeDetail.order}</span>
					<p>{pokeDetail.name}</p>
					<div>
						<div>
							<span>Weight</span>
							<span>{pokeDetail.weight}</span>
						</div>
						<div>
							<span>Height</span>
							<span>{pokeDetail.height}</span>
						</div>
					</div>
					<div>
						<div>
							<p>Type</p>
							<div>
								{pokeDetail.types?.map(type => (
									<span key={type.slot}>{type.type.name}</span>
								))}
							</div>
						</div>
						<div>
							<p>Abilities</p>
							<div>
								{pokeDetail.abilities?.map(ability => (
									<span key={ability.slot}>{ability.ability.name}</span>
								))}
							</div>
						</div>
					</div>
				</div>
				<PokemonStats stats={pokeDetail.stats} />
				<PokeMovements movements={pokeDetail.moves} />
			</div>
		</div>
	);
};

export default PokemonsDetails;
