import React from "react";
import pokeImg from "../assets/poketitle.png";
import { useDispatch } from "react-redux";
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
		<>
			<div>
				<div className="container-intro-page">
					<img src={pokeImg} className="poke-title" alt="poke-title" />
					<div className="container-welcome">
						<p className="greeting-text">¡Hola entrenador!</p>
						<p className="greeting-text-secundary">
							Para poder comenzar, dame tu nombre
						</p>
					</div>
					<div className="container-input">
						<input
							className="input-style"
							type="text"
							value={username}
							placeholder="Tu nombre..."
							onChange={e => setUsername(e.target.value)}
							maxLength="30"
						/>
						<button onClick={getUser}>Comenzar</button>
					</div>
				</div>
			</div>
			<div className="bg-red-black">
				<div className="pokeball"></div>
			</div>
		</>
	);
};

export default UserInput;
