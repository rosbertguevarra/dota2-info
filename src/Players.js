import React, {Component} from 'react';
import axios from "axios";
import Sidebar from "./Sidebar";
import PlayerInfo from "./PlayerInfo"
import "./App.css"

const alignGrid = {
    display: "flex",
    flexWrap: "wrap"
}
const alignSearch = {
    margin: "0px 0px 0px 200px",
    padding: "50px"

}
const styleInput ={
    padding: "10px 200px 10px 10px"
}


const URL = "https://api.opendota.com/api/proPlayers";

axios.get(URL)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });


class Players extends Component {    
    state = {
        data:[],
        searchTerm: ""
    }
    componentDidMount() {
        axios.get(URL)
            .then(res => {
                this.setState({
                    data: res.data
                });
            });
            
    }

    handleSearchTerm = (event)=>{
        this.setState({searchTerm: event.target.value})
    }
    render(){
        const Filter = this.state.data.filter(name =>`${name.name}`.toUpperCase()
        .indexOf(this.state.searchTerm.toUpperCase()) >= 0)
        .map(name => 
            <PlayerInfo
            key = {name.account_id}
            {...name}
            />
        )
        return (
            <div>
                <Sidebar />
                <div style={alignSearch}>
                    Search:  <input style= {styleInput}
                        onChange={this.handleSearchTerm}
                        value={this.state.searchTerm}
                        type="text"
                        placeholder="Search hero name"
                    />
              </div>
                <div style={alignGrid}>{Filter}</div>
            </div>
        )
    }
}

export default Players;