import React, { Component } from 'react'
import Sidebar from "./Sidebar";
import "./App.css"
import axios from "axios";
import Games from "./Games";

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

const URL = "https://api.opendota.com/api/live";




// axios.get(URL)
//     .then(function (response) {
//         console.log(response);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

class LiveGames extends Component {
    state = {
        data: [],
        searchTerm: ""
    }

    handleSearchTerm = (event) => {
        this.setState({searchTerm: event.target.value});
    }

    componentDidMount() {
        axios.get(URL)
            .then(res => {
                this.setState({
                    data: res.data
                });
            });
    }
    render() {
        const Filter = this.state.data.filter(stat =>`${stat.average_mmr}`.toUpperCase()
        .indexOf(this.state.searchTerm.toUpperCase()) >= 0)
        .map(live => 
            <Games

                league_id={live.league_id}
                activate_time={live.activate_time}
                average_mmr={live.average_mmr}
                radiant_score={live.radiant_score}
                dire_score={live.dire_score}
                spectators={live.spectators}
            />

        )
        return (
            <div>
                <Sidebar />
                <div style={alignSearch}>
                    Search:  <input style={styleInput}
                        onChange={this.handleSearchTerm}
                        value={this.state.searchTerm}
                        type="text"
                        placeholder="Search mmr"
                    />
                </div>
                <div style={alignGrid}>{Filter}</div>
            </div>
        )
    }
}





export default LiveGames;