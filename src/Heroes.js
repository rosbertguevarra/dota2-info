import React from 'react'
import Sidebar from "./Sidebar"
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const adjustWidth = {
    width: "25%"
}

    
const Heroes = (props) => (
    
    // <div>
    //     <
    //     <h1>{props.localized_name}</h1>
    //     <img src={"https://api.opendota.com" + props.img} />
    //     <img src={"https://api.opendota.com" + props.icon} />
    //     <h1>{props.pro_win}</h1>
    //     <h1>{props.pro_pick}</h1>
    //     <h1>{props.pro_ban}</h1>
    // </div>
    <div>
    <Card style={adjustWidth}>
      <CardImg top width="100%" src={"https://api.opendota.com" + props.img}  />
      <CardBody>
        <CardTitle>{props.localized_name}</CardTitle>
        <CardSubtitle>Ingame Icon: <img src={"https://api.opendota.com" + props.icon} /></CardSubtitle>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
      </CardBody>
    </Card>
  </div>


)

export default Heroes;