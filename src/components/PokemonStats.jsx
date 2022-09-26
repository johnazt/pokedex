import React from "react";

const PokemonStats = ({ stats }) => {
	return (
		<div style={{ padding: "1em" }}>
			<div className="container-stats">
			<div className="details-title">Stats</div>
				{stats?.map(stat => {
					if (stats.indexOf(stat) === 3 || stats.indexOf(stat) === 4) return;

					return (
						
						<div style={{marginBottom: "2em"}} key={stat.stat.name}>
							<div className="container-title-stats">
								<span>
									{stat.stat.name.charAt(0).toUpperCase() +
										stat.stat.name.slice(1)}
								</span>
								<span>{stat.base_stat}/150</span>
							</div>
							<div className="bar-stats">
								<div style={{width: `${(stat.base_stat) - ((stat.base_stat)*(3333 / 10000))}%`}} className="bar-stats-progress"></div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default PokemonStats;
