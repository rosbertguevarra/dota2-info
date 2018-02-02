import React, { Component } from 'react'
import Sidebar from "./Sidebar";
import Heroes from "./Heroes"
import "./App.css"
import axios from "axios";
import Banner from "./Banner"
import Spinner from "react-spinkit"

const alignGrid = {
    display: "flex",
    flexWrap: "wrap"
}

const centerSpinner = {
    margin: "100px auto",
    color:"#9E0B0F",
    fontSize: "20px"

}


const URL = "https://api.opendota.com/api/heroStats";

class HeroStats extends Component {
    state = {
        data: [],
        searchTerm: "",
        isLoaded: false
    }
    handleSearchTerm = (event) => {
        this.setState({ searchTerm: event.target.value })
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

    componentWillUnmount(){
        this.setState({isLoaded: false})
    }

    render() {
        const { isLoaded } = this.state;
        if (!isLoaded) {
            return (
            <div>
            <Sidebar />
            <Banner />
            <Spinner name="folding-cube" style={centerSpinner} />
            </div>
             ) }
    
        else {
        const Filter = this.state.data.filter(stat =>`${stat.localized_name}`.toUpperCase()
        .indexOf(this.state.searchTerm.toUpperCase()) >= 0)
        .map(stat => 
            <Heroes
                key={stat.id}
                {...stat}
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
}

export default HeroStats;