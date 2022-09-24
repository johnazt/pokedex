import "./App.css";
import UserInput from "./components/UserInput";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { HashRouter, Route, Routes } from "react-router-dom";
import Pokemons from "./components/Pokemons";
import PokemonsDetails from "./components/PokemonsDetails";

function App() {
	return (
		<HashRouter>
			<div className="App">
				<Routes>
					<Route path="/" element={<UserInput />} />
					<Route element={<ProtectedRoutes />}>
						<Route path="/pokemons" element={<Pokemons />} />
						<Route path="/pokemons/:id" element={<PokemonsDetails />} />
					</Route>
				</Routes>
				
			</div>
		</HashRouter>
	);
}

export default App;
