import React, { Component } from 'react'
import Sidebar from "./Sidebar";
import Heroes from "./Heroes"
import "./App.css"
import axios from "axios";
import Banner from "./Banner"


const alignGrid = {
    display: "flex",
    flexWrap: "wrap"
}





const URL = "https://api.opendota.com/api/heroStats";

class HeroStats extends Component {
    state = {
        data: [],
        searchTerm: ""
    }
    handleSearchTerm = (event) => {
        this.setState({ searchTerm: event.target.value })
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
        const Filter = this.state.data.filter(stat =>`${stat.localized_name}`.toUpperCase().
        indexOf(this.state.searchTerm.toUpperCase()) >= 0)
        .map(stat => 
            <Heroes
                key={stat.id}
                id={stat.id}
                name={stat.name}
                localized_name={stat.localized_name}
                img={stat.img}
                icon={stat.icon}
                pro_win={stat.pro_win}
                pro_pick={stat.pro_pick}
                pro_ban={stat.pro_ban}

            />
        )
        return (
            <div>
                <Sidebar />
                <Banner />
                <div className="search-input">
                    Search:  <input
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

export default HeroStats;