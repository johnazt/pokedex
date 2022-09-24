import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import pokeImg from "../assets/poketitle.png";
import PokemonCard from "./PokemonCard";

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

	//Pagination pokemons
	const [page, setPage] = useState(1);
	const pokemonsPerPage = 16;
	const lastPokemonIndex = page * pokemonsPerPage;
	const firstPokemonIndex = lastPokemonIndex - pokemonsPerPage;
	const pokemonPagination = pokemons.slice(firstPokemonIndex, lastPokemonIndex);

	const totalPages = Math.ceil(pokemons.length / pokemonsPerPage);
	const pagesNumbers = [];
	for (let i = 1; i <= totalPages; i++) {
		pagesNumbers.push(i);
	}

	return (
		<div>
			<div className="bg-red-black bg-top"></div>
			<div className="container-pokemon-page">
				<div className="container-title">
					<img className="pokemon-title-img" src={pokeImg} alt="poke-title" />
					<div className="pokeball pokeball-top"></div>
				</div>
				<div className="container-pokemon-welcome">
					<p>
						<b>Bienvenido {username},</b> aquí podrás encontrar tu pokemón
						favorito
					</p>
					<div className="container-search">
						<input
							className="input-style"
							type="text"
							placeholder="Buscar por nombre"
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
							<option value="">Selecciona un tipo de elemento</option>
							{pokemonType.map(type => (
								<option className="div" key={type.name} value={type.url}>
									{type.name}
								</option>
							))}
						</select>
					</div>
				</div>
				<main>
					<ul className="container-list-pokemon">
						{pokemonPagination.map(pokemon => (
							<PokemonCard key={pokemon.name} url={pokemon.url} />
						))}
					</ul>

						<div className="container-total-buttons">
							<button style={{alignSelf: "start"}} onClick={() => setPage(page - 1)} disabled={page === 1}>
								Prev
							</button>
												<div className="container-buttons">
							{pagesNumbers.map(number => (
								<button key={number} onClick={() => setPage(number)}>{number}</button>
							))}
												</div>
							<button
								onClick={() => setPage(page + 1)}
							disabled={page === totalPages}
							style={{alignSelf: "start"}}
							>
								Next
							</button>
						</div>
				</main>
			</div>
		</div>
	);
};

export default Pokemons;
