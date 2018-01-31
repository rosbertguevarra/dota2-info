import React, { Component } from 'react'
import Sidebar from "./Sidebar";
import "./App.css"
import axios from "axios";
import Games from "./Games";

const alignGrid = {
    display: "flex",
    flexWrap: "wrap"
}

const URL = "https://api.opendota.com/api/live";


axios.get(URL)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

class LiveGames extends Component {
    state = {
        data: []
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
        const Live = this.state.data.map(live => (
            <Games

                league_id={live.league_id}
                activate_time = {live.activate_time}
                average_mmr = {live.average_mmr}
                radiant_score = {live.radiant_score}
                dire_score = {live.dire_score}
                spectators = {live.spectators}
            />

        ))
        return (
            <div>
                <Sidebar />
            <div style = {alignGrid}>{Live}</div>
            </div>
        )
    }
}





export default LiveGames;