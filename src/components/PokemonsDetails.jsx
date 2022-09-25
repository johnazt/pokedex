import axios from "axios";
import React from "react";
import PokeNav from "./PokeNav";
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

	console.log(pokeDetail);

	return (
		<div>
			<PokeNav/>
			<div>
                <img
                    src={pokeDetail.sprites?.other?.["official-artwork"].front_default !== null
                        ? pokeDetail.sprites?.other?.["official-artwork"].front_default
                        : pokeDetail.sprites.other.home?.front_default ||
                        pokeDetail.sprites.front_default }
					alt="pokemon-detail"
				/>
				<span>#{pokeDetail.order}</span>
				<p>{pokeDetail.name}</p>
				
			</div>
		</div>
	);
};

export default PokemonsDetails;
