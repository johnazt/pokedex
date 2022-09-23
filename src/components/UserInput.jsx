import React from "react";
import pokeImg from "../assets/poketitle.png";
import { useDispatch} from "react-redux";
import { getName } from "../store/slices/user.slice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserInput = () => {
	const [username, setUsername] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const getUser = () => {
		dispatch(getName(username));
		navigate("/pokemons");
	};

	return (
		<div>
			<img src={pokeImg} className="poke-title" alt="poke-title" />
			<div className="container-welcome">
				<h2>¡Hola entrenador!</h2>
				<p>Para poder comenzar, dame tu nombre</p>
			</div>
			<div className="container-input">
				<input
					type="text"
					value={username}
					onChange={e => setUsername(e.target.value)}
				/>
				<button onClick={getUser}>Comenzar</button>
			</div>
		</div>
	);
};

export default UserInput;
