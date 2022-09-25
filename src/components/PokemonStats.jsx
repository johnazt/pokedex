import React from "react";

const PokemonStats = ({ stats }) => {
	return (
		<div>
			<h2>Stats</h2>
			<div className="container-stats">
				{stats?.map(stat => {
					if (stats.indexOf(stat) === 3 || stats.indexOf(stat) === 4) return;

					return (
						<p key={stat.stat.name}>
							<span>
								{stat.stat.name.charAt(0).toUpperCase() +
									stat.stat.name.slice(1)}
							</span>
							{stat.base_stat}
						</p>
					);
				})}
			</div>
		</div>
	);
};

export default PokemonStats;
