import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import PokemonCard from "./PokemonCard";

const Pokemons = () => {
	const username = useSelector(state => state.userName);

	const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		axios
			.get("https://pokeapi.co/api/v2/pokemon/")
			.then(res => setPokemons(res.data.results));
	}, []);


	return (
		<div>
			<h2>Pokemons</h2>
			<p>Bienvenido {username}, aquí podrás encontrar tu pokemón favorito</p>

			<main>
				<ul>
					{pokemons?.map(pokemon => (
                        <PokemonCard key={pokemon.name} url={pokemon.url} />
					))}
				</ul>
			</main>
		</div>
	);
};

export default Pokemons;
