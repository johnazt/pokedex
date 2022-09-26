import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PokeNav from "./PokeNav";
import PokemonCard from "./PokemonCard";
import Pagination from "./Pagination";

const Pokemons = () => {
	const username = useSelector(state => state.userName);
	const navigate = useNavigate();
	const [pokemons, setPokemons] = useState([]);
	const [inputName, setInputName] = useState("");
	const [pokemonType, setPokemonType] = useState([]);
	useEffect(() => {
		axios
			.get("https://pokeapi.co/api/v2/pokemon?limit=1155&offset=0")
			.then(res => setPokemons(res.data.results));

		axios
			.get("https://pokeapi.co/api/v2/type/")
			.then(res => setPokemonType(res.data.results));
	}, []);

	const searchByName = () => {
		navigate(`/pokemons/${inputName}`);
	};

	const searchByType = typeUrl => {
		if (typeUrl) {
			axios
				.get(typeUrl)
				.then(res => setPokemons(res.data.pokemon.map(elem => elem.pokemon)));
		}
	};

	const [page, setPage] = useState(1);
	const pokemonsPerPage = 16;
	const lastPokemonIndex = page * pokemonsPerPage;
	const firstPokemonIndex = lastPokemonIndex - pokemonsPerPage;
	const pokemonPagination = pokemons.slice(firstPokemonIndex, lastPokemonIndex);

	const totalPages = Math.ceil(pokemons.length / pokemonsPerPage);

	return (
		<div>
			<PokeNav />
			<div className="container-pokemon-page">
				<div className="container-pokemon-welcome">
					<p>
						<b>Welcome {username},</b> here you can find your favorite pokemon
					</p>
					<div className="flex-search">
						<div className="container-search">
							<input
								className="input-style"
								type="text"
								placeholder="Search by name or number"
								value={inputName}
								onChange={e => setInputName(e.target.value)}
							/>
							<button onClick={searchByName}>Search</button>
						</div>
						<div className="container-select">
							<select
								className="select"
								onChange={e => searchByType(e.target.value)}
							>
								<option value="">Select an item type</option>
								{pokemonType.map(type => (
									<option className="div" key={type.name} value={type.url}>
										{type.name}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>

				<main>
					<ul className="container-list-pokemon">
						{pokemonPagination.map(pokemon => (
							<PokemonCard key={pokemon.name} url={pokemon.url} />
						))}
					</ul>
				</main>
				<Pagination totalPages={totalPages} page={page} setPage={setPage} />
			</div>
		</div>
	);
};

export default Pokemons;
