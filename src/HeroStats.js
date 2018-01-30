import React, { Component } from 'react'
import Sidebar from "./Sidebar";
import Heroes from "./Heroes"
import "./App.css"
import axios from "axios";

const URL = "https://api.opendota.com/api/heroStats";

class HeroStats extends Component {
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
        const Stats = this.state.data.map(stat => (
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
        ))
        return (
            <div>
                <Sidebar />
                <div className="container">
                    {Stats}
                </div>
            </div>
        )
    }
}

export default HeroStats;