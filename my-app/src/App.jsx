import React, {Component} from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox"
import { robots } from "./robots";

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchField: '',
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField : event.target.value })
        
    }
    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        console.log(filteredRobots)
        return(
            <div className="tc">  
            <h1 className="tc">RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots={filteredRobots}/>
            </div>
        );
    }
}


export default App