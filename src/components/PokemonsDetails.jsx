import axios from "axios";
import React from "react";
import PokemonStats from "./PokemonStats";
import PokeMovements from "./PokeMovements";
import pokeImg from "../assets/poketitle.png";
import { useState } from "react";
import { useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom";

const PokemonsDetails = () => {
	const { id } = useParams();
	const [linearColor, setLinearColor] = useState("");
	const [textColor, setTextColor] = useState("");
	const [pokeDetail, setPokeDetail] = useState({});
	const navigate = useNavigate()
	useEffect(() => {
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
			.then(res => setPokeDetail(res.data));
	}, [id]);

	useEffect(() => {
		switch (pokeDetail.types?.[0].type?.name) {
			case "fire":
				setLinearColor("var(--linear-fire)");
				setTextColor("var(--text-fire)");
				break;
			case "grass":
				setLinearColor("var(--linear-grass)");
				setTextColor("var(--text-grass)");
				break;
			case "water":
				setLinearColor("var(--linear-water)");
				setTextColor("var(--text-water)");
				break;
			case "bug":
				setLinearColor("var(--linear-bug)");
				setTextColor("var(--text-bug)");
				break;
			case "normal":
				setLinearColor("var(--linear-normal)");
				setTextColor("var(--text-normal)");
				break;
			case "fighting":
				setLinearColor("var(--linear-fighting)");
				setTextColor("var(--text-fighting)");
				break;
			case "poison":
				setLinearColor("var(--linear-poison)");
				setTextColor("var(--text-poison)");
				break;
			case "ghost":
				setLinearColor("var(--linear-ghost)");
				setTextColor("var(--text-ghost)");
				break;
			case "rock":
				setLinearColor("var(--linear-rock)");
				setTextColor("var(--text-rock)");
				break;
			case "dark":
				setLinearColor("var(--linear-dark)");
				setTextColor("var(--text-dark)");
				break;
			case "ice":
				setLinearColor("var(--linear-ice)");
				setTextColor("var(--text-ice)");
				break;
			case "steel":
				setLinearColor("var(--linear-steel)");
				setTextColor("var(--text-steel)");
				break;
			case "electric":
				setLinearColor("var(--linear-electric)");
				setTextColor("var(--text-electric)");
				break;
			case "fairy":
				setLinearColor("var(--linear-fairy)");
				setTextColor("var(--text-fairy)");
				break;
			case "psychic":
				setLinearColor("var(--linear-psychic)");
				setTextColor("var(--text-psychic)");
				break;
			case "ground":
				setLinearColor("var(--linear-ground)");
				setTextColor("var(--text-ground)");
				break;
			case "dragon":
				setLinearColor("var(--linear-dragon)");
				setTextColor("var(--text-dragon)");
				break;
			case "flying":
				setLinearColor("var(--linear-flying)");
				setTextColor("var(--text-flying)");
				break;
			default:
				break;
		}
	}, [pokeDetail]);

	return (
		<div>
			<div style={{ padding: "0 1em" }}>
			<div className="bg-red-black bg-top"></div>
			<div className="container-title container-pokedex">
				<img
					onClick={() => navigate("/pokemons")}
					className="pokemon-title-img"
					src={pokeImg}
					alt="poke-title"
				/>

				<div className="pokeball pokeball-top"></div>
			</div>
		</div>
			<div className="container-pokemon-detail">
				<div className="pokemonDetail-info">
					<div
						className="pokemon-details-img"
						style={{ background: linearColor }}
					>
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
						<span style={{ color: textColor }} className="details-id">
							#{pokeDetail.id}
						</span>
						<div>
							<div style={{ color: textColor }} className="details-name">
								{pokeDetail.name}
							</div>
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
					<div className="flex-type-abilities">
						<div className="details-type-abilities">
							<p className="details-type-abilities-title">Type</p>
							<div className="flex-type-abilities">
								{pokeDetail.types?.map(type => (
									<span
										style={{ border: `3px solid ${textColor}` }}
										key={type.slot}
									>
										{type.type.name}
									</span>
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
