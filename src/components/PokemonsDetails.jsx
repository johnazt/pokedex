import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const PokemonsDetails = () => {
	const { id } = useParams();

	const [pokeDetail, setPokeDetail] = useState([]);

	useEffect(() => {
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
			.then(res => setPokeDetail(res.data));
	}, []);

	console.log(pokeDetail);

	return (
		<div>
			<h2>Pokemons Details</h2>
			<div>
				<p>{pokeDetail.name}</p>
				<img
					src={pokeDetail.sprites?.other.dream_world.front_default}
					alt="pokemon-detail"
				/>
			</div>
		</div>
	);
};

export default PokemonsDetails;
