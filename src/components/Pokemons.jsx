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
			.get("https://pokeapi.co/api/v2/pokemon/")
			.then(res => setPokemons(res.data.results));

		axios
			.get("https://pokeapi.co/api/v2/type/")
			.then(res => setPokemonType(res.data.results));
	}, []);

	const searchByName = () => {
		navigate(`/pokemons/${inputName}`);
	};

	// useEffect(() => {
	//     const keyDownHandler = event => {

	//       if (event.key === 'Enter') {
	//         event.preventDefault();

	//       }
	//     };

	//     document.addEventListener('keydown', keyDownHandler);

	//     return () => {
	//       document.removeEventListener('keydown', keyDownHandler);
	//     };
	//   }, []);

	const searchByType = typeUrl => {
		if (typeUrl) {
			axios
				.get(typeUrl)
				.then(res => setPokemons(res.data.pokemon.map(elem => elem.pokemon)));
		}
	};

	console.log(pokemons);

	return (
		<div>
			<div className="bg-red-black bg-top"></div>
			<div className="container-pokemon-page">
				<div className="container-title">
					<img className="pokemon-title-img" src={pokeImg} alt="poke-title" />
					<div className="pokeball pokeball-top"></div>
				</div>
				<div className="container-pokemon-welcome">
					<p><b>Bienvenido {username},</b> aquí podrás encontrar tu pokemón favorito</p>
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
						<select className="select" onChange={e => searchByType(e.target.value)}>
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
						{pokemons?.map(pokemon => (
							<PokemonCard key={pokemon.name} url={pokemon.url} />
						))}
					</ul>
				</main>
						</div>
			</div>
	);
};

export default Pokemons;
