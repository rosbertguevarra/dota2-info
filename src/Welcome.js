import React from 'react';
import { Jumbotron } from 'reactstrap';
import Sidebar from "./Sidebar"
import axios from "axios";

axios.get("https://api.opendota.com/api/metadata")
  .then((Response)=>{
    console.log(Response)
  })


const Style = {
    width: "70%",
    marginLeft: "200px"
}



const Welcome = () => {
  return (
    <div>
    <Sidebar / >
      <Jumbotron style={Style}>
        <h1 className="display-3">Dota2 info</h1>
        <p className="lead">This is a collection of information of Teams, Live ongoing brodacast and Hero Rankings using the Opendota API.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
        <p className="lead">
         
        </p>
      </Jumbotron>
    </div>
  );
};

export default Welcome;