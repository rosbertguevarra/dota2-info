import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Minimap from "./300px-Minimap_7.07.png"


const adjustWidth = {
    width: "45%",
    margin: "100px 50px 50px 250px "
}



const Games = (props) => (
    <div>
        <Card style={adjustWidth}>
            <CardImg top width="100%" src={Minimap} alt="Card image cap" />
            <CardBody>
                <CardTitle>Top Games</CardTitle>
                <CardSubtitle>Average MMR: {props.average_mmr}</CardSubtitle>
                <p>Radiant kills: {props.radiant_score}</p>
                <p>Dire kills: {props.dire_score}</p>
                <p>Spectators: {props.spectators}</p>
            </CardBody>
        </Card>
    </div>

)



export default Games;