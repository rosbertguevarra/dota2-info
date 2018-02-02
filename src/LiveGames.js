import React, { Component } from 'react'
import Sidebar from "./Sidebar";
import "./App.css"
import axios from "axios";
import Games from "./Games";
import Spinner from "react-spinkit"
import BannerBooths from "./BannerBooths";

const alignGrid = {
    display: "flex",
    flexWrap: "wrap"
}

const alignSearch = {
    margin: "0px 0px 0px 200px",
    padding: "50px"
}

const styleInput = {
    padding: "10px 200px 10px 10px"
}

const centerSpinner = {
    margin: "100px auto",
    color:"#9E0B0F",
    fontSize: "20px"

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
        searchTerm: "",
        isLoaded: false

    }

    handleSearchTerm = (event) => {
        this.setState({ searchTerm: event.target.value });
    }

    componentDidMount() {
        axios.get(URL)
            .then(res => {
                this.setState({
                    data: res.data,
                    isLoaded: true

                });
            });
    }
    render() {
        const { isLoaded } = this.state;
        if (!isLoaded) {
            return (
                <div>
                    <Sidebar />
                    <BannerBooths />
                    <Spinner name="folding-cube" style={centerSpinner} />
                </div>
            )
        }

        else {
            const Filter = this.state.data.filter(stat => `${stat.average_mmr}`.toUpperCase()
                .indexOf(this.state.searchTerm.toUpperCase()) >= 0)
                .map(live =>
                    <Games
                        {...live}
                    />

                )
            return (
                <div>
                    <Sidebar />
                    <BannerBooths />
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

}



export default LiveGames;