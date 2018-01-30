import React from "react";



const Games = (props) => (
    <div>
        <h1>Average MMR: {props.average_mmr}</h1>
        <h1>Radiant kills: {props.radiant_score}</h1>
        <h1>Dire kills: {props.dire_score}</h1>
        <h1>Spectators: {props.spectators}</h1>
        </div>
)

export default Games;