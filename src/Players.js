import React, { Component } from 'react';
import axios from "axios";
import Sidebar from "./Sidebar";
import PlayerInfo from "./PlayerInfo"
import BannerPlayers from "./BannerPlayers";
import Spinner from "react-spinkit";
import "./App.css"

const alignGrid = {
    display: "flex",
    flexWrap: "wrap"
}
const alignSearch = {
    margin: "0px 0px 0px 150px",
    padding: "50px"

}
const styleInput = {
    padding: "10px 200px 10px 10px"
}

const centerSpinner = {
    margin: "100px auto",
    color:"#9E0B0F"

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
        data: [],
        isLoaded: false,
        searchTerm: "",
        isLoaded: false
    }
    componentDidMount() {
        axios.get(URL)
            .then(res => {
                this.setState({
                    isLoaded: true,
                    data: res.data
                });
            });

    }

    handleSearchTerm = (event) => {
        this.setState({ searchTerm: event.target.value })
    }
    render() {
        const { isLoaded } = this.state;
        if (!isLoaded) {
            return (
            <div>
            <Sidebar />
            <BannerPlayers />
            <Spinner name="folding-cube" style={centerSpinner} />
            </div>
             ) }
    
        else {
            const Filter = this.state.data.filter(name => `${name.name} ${name.steamid} ${name.personaname} `.toUpperCase()
                .indexOf(this.state.searchTerm.toUpperCase()) >= 0)
                .map(name =>
                    <PlayerInfo
                        key={name.account_id}
                        {...name}
                    />
                )
            return (
                <div>
                    <Sidebar />
                    <BannerPlayers />
                    <div style={alignSearch}>
                        Search:  <input style={styleInput}
                            onChange={this.handleSearchTerm}
                            value={this.state.searchTerm}
                            type="text"
                            placeholder="Search Player name"
                        />
                    </div>
                    <div>{Filter}</div>
                </div>
            )
        }
    }
}

export default Players;