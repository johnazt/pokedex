import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PokemonCard = props => {
	const navigate = useNavigate();
	const [pokemon, setPokemon] = useState({});
	const types = pokemon.types;
	const [linearColor, setLinearColor] = useState("");
	const [bgColor, setBgColor] = useState("");
	const [textColor, setTextColor] = useState("");

	useEffect(() => {
		axios.get(props.url).then(res => setPokemon(res.data));
	}, []);

	// ========= RENDER COLORS POKEMON ============== //

	useEffect(() => {
		switch (types?.[0].type?.name) {
			case "fire":
				setLinearColor("var(--linear-fire)");
				setBgColor("var(--bg-fire)");
				setTextColor("var(--text-fire)");
				break;
			case "grass":
				setLinearColor("var(--linear-grass)");
				setBgColor("var(--bg-grass)");
				setTextColor("var(--text-grass)");
				break;
			case "water":
				setLinearColor("var(--linear-water)");
				setBgColor("var(--bg-water)");
				setTextColor("var(--text-water)");
				break;
			case "bug":
				setLinearColor("var(--linear-bug)");
				setBgColor("var(--bg-bug)");
				setTextColor("var(--text-bug)");
				break;
			case "normal":
				setLinearColor("var(--linear-normal)");
				setBgColor("var(--bg-normal)");
				setTextColor("var(--text-normal)");
				break;
			case "fighting":
				setLinearColor("var(--linear-fighting)");
				setBgColor("var(--bg-fighting)");
				setTextColor("var(--text-fighting)");
				break;
			case "poison":
				setLinearColor("var(--linear-poison)");
				setBgColor("var(--bg-poison)");
				setTextColor("var(--text-poison)");
				break;
			case "ghost":
				setLinearColor("var(--linear-ghost)");
				setBgColor("var(--bg-ghost)");
				setTextColor("var(--text-ghost)");
				break;
			case "rock":
				setLinearColor("var(--linear-rock)");
				setBgColor("var(--bg-rock)");
				setTextColor("var(--text-rock)");
				break;
			case "dark":
				setLinearColor("var(--linear-dark)");
				setBgColor("var(--bg-dark)");
				setTextColor("var(--text-dark)");
				break;
			case "ice":
				setLinearColor("var(--linear-ice)");
				setBgColor("var(--bg-ice)");
				setTextColor("var(--text-ice)");
				break;
			case "steel":
				setLinearColor("var(--linear-steel)");
				setBgColor("var(--bg-steel)");
				setTextColor("var(--text-steel)");
				break;
			case "electric":
				setLinearColor("var(--linear-electric)");
				setBgColor("var(--bg-electric)");
				setTextColor("var(--text-electric)");
				break;
			case "fairy":
				setLinearColor("var(--linear-fairy)");
				setBgColor("var(--bg-fairy)");
				setTextColor("var(--text-fairy)");
				break;
			case "psychic":
				setLinearColor("var(--linear-psychic)");
				setBgColor("var(--bg-psychic)");
				setTextColor("var(--text-psychic)");
				break;
			case "ground":
				setLinearColor("var(--linear-ground)");
				setBgColor("var(--bg-ground)");
				setTextColor("var(--text-ground)");
				break;
			case "dragon":
				setLinearColor("var(--linear-dragon)");
				setBgColor("var(--bg-dragon)");
				setTextColor("var(--text-dragon)");
				break;
			case "flying":
				setLinearColor("var(--linear-flying)");
				setBgColor("var(--bg-flying)");
				setTextColor("var(--text-flying)");
				break;
			default:
				break;
		}
	}, [pokemon]);

	return (
		<div
			className="pokemon-card"
			style={{ backgroundColor: bgColor }}
			onClick={() => navigate(`/pokemons/${pokemon.id}`)}
		>
			<div className="pokemon-card-img" style={{ background: linearColor }}>
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
				<p style={{ color: textColor }} className="pokemon-card-name">
					{pokemon.name}
				</p>
				<div>
					{types?.map(elem => (
						<span className="pokemon-card-type" key={elem.slot}>
							{elem.type.name.charAt(0).toUpperCase() + elem.type.name.slice(1)}
							{types.length > 1 && types.indexOf(elem) === 0 ? " / " : ""}
						</span>
					))}
				</div>
				<span style={{ color: "#9F9F9F", paddingBottom: "1em" }}>Type</span>
				<hr
					style={{
						width: "100%",
						border: "none",
						borderTop: "1px solid #E5E5E5",
					}}
				/>
				<div className="pokemon-card-stats">
					{pokemon?.stats?.map(stat => {
						if (
							pokemon.stats?.indexOf(stat) === 3 ||
							pokemon.stats?.indexOf(stat) === 4
						)
							return;
						return (
							<div key={stat.stat.name} className="pokemon-stats">
								<p>
									{stat.stat.name.charAt(0).toUpperCase() +
										stat.stat.name.slice(1)}
								</p>
								<span style={{ color: textColor }}>{stat.base_stat}</span>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default PokemonCard;
