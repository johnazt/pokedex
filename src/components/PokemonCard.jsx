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

	useEffect(() => {
		if (types?.[0].type?.name === "fire") {
			setLinearColor("var(--fire)");
			setBgColor("#DE701C");
			setTextColor("#E75C35");
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
				<p className="pokemon-card-name">{pokemon.name}</p>
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
