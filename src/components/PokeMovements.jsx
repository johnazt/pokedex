import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const PokeMovements = ({ movements }) => {
	// console.log(movements)
	return (
		<div>
			<h2>Movements</h2>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"1em"}}>
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
