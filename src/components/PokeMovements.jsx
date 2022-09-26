import React from "react";
import Chip from "@mui/material/Chip";

const PokeMovements = ({ movements }) => {
	return (
		<div className="pokemonDetail-info" style={{ padding: "2em 1em" }}>
			<div className="details-title">Movements</div>
			<div style={{ display: "flex", flexWrap: "wrap", gap: "1em" }}>
				{movements?.map(move => (
					<Chip
						key={move.move.name}
						label={move.move.name}
						sx={{
							color: "#302F2F",
							fontSize: "1.1em",
							paddingTop: "1em",
							paddingBottom: "1em",
						}}
						size="medium"
					/>
				))}
			</div>
		</div>
	);
};

export default PokeMovements;
