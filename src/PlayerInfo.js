import React from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Badge,Button } from 'reactstrap';


    const adjustWidth = {
        width: "50%",
        margin: "100px 50px 50px 250px "
    }


const PlayerInfo = (props) => (
    <div>
        <Card style={adjustWidth}>
            <CardImg top width="100%" src={props.avatarfull} alt="Card image cap" />
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <CardSubtitle>{props.personaname}</CardSubtitle>
                <Badge color="secondary" pill>Steam ID: {props.steamid}</Badge>
                <Badge color="primary" pill>Last Login: {props.last_login}</Badge>
                <p>Team name: {props.team_name}</p>
                <p>Team tag: {props.team_tag}</p>
                <p>Team name: {props.team_name}</p>
                <p>Country: {props.loccountrycode}</p>
            </CardBody>
        </Card>
    </div>





)






export default PlayerInfo;