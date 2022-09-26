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
					<div className="pokemon-details-img">
						<img
							src={
								pokeDetail.sprites?.other?.["official-artwork"]
									.front_default !== null
									? pokeDetail.sprites?.other?.["official-artwork"]
											.front_default
									: pokeDetail.sprites.other.home?.front_default ||
									  pokeDetail.sprites.front_default
							}
							alt="pokemon-detail"
						/>
					</div>
					<div className="pokemon-details-name">
						<span className="details-id">#{pokeDetail.id}</span>
						<div>
							<div className="details-name">{pokeDetail.name}</div>
						</div>
						<div className="details-container-weight-height">
							<div className="details-w-h">
								<span>Weight</span>
								<span>{pokeDetail.weight}</span>
							</div>
							<div className="details-w-h">
								<span>Height</span>
								<span>{pokeDetail.height}</span>
							</div>
						</div>
					</div>
					<div>
						<div className="details-type-abilities">
							<p className="details-type-abilities-title">Type</p>
							<div className="flex-type-abilities">
								{pokeDetail.types?.map(type => (
									<span key={type.slot}>{type.type.name}</span>
								))}
							</div>
						</div>
						<div className="details-type-abilities">
							<p className="details-type-abilities-title">Abilities</p>
							<div className="flex-type-abilities">
								{pokeDetail.abilities?.map(ability => (
									<span key={ability.slot}>{ability.ability.name}</span>
								))}
							</div>
						</div>
					</div>
					<PokemonStats stats={pokeDetail.stats} />
				</div>
				<PokeMovements movements={pokeDetail.moves} />
			</div>
		</div>
	);
};

export default PokemonsDetails;
