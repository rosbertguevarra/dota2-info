import React from 'react'
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle,
} from 'reactstrap';



const adjustWidth = {
    width: "50%",
    margin: "100px 50px 50px 250px "
}



const Heroes = (props) => (
    <div className="banner">
        <Card style={adjustWidth}>
            <CardImg top width="100%" src={"https://api.opendota.com" + props.img} alt="hero image" />
            <CardBody>
                <CardTitle>{props.localized_name}</CardTitle>
                <CardSubtitle>Ingame Icon: <img src={"https://api.opendota.com" + props.icon} alt="hero icon" /></CardSubtitle>
                <p>Competetive wins : {props.pro_win}></p>
                <p>Professional pick : {props.pro_pick}></p>
                <p>Professional ban : {props.pro_ban}></p>
            </CardBody>
        </Card>
    </div>
)

export default Heroes;