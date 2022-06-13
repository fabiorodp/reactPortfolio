import React, { Component } from 'react';
import Cardlist from '../components/cardlist';
//import { robots } from './robots';
import SearchBox from '../components/searchbox';
import './app.css';
import Scroll from '../components/scroll';
import ErrorBoundry from '../components/errorboundry';


class App extends Component {
    
    constructor() {
        super()
        this.state =  {
                robots: [],
                searchField: ''
            };
    };

    // It does not need arrows because it inherits the module
    // We fetch a html to a json file
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
        /*
        async function getText('https://jsonplaceholder.typicode.com/users') {
            let response    = await fetch('https://jsonplaceholder.typicode.com/users');
            let users       = await response.json();
            this.setState({robots: users});
        }
        */
    };

    onSearchChange = (event) => {
        // console.log(event.target.value)
        this.setState({ searchField: event.target.value })
    };

    render() {
        // Function to filter the robots
        const filteredRobots = this.state.robots.filter(
            robot => {
                return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
            }
        );

        // We use tachyons for f1 CSS function
        return !this.state.robots ?
            <div className = 'tc'>
                <h1 className='f1'> RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <h1>LOADING...</h1>
            </div>
            :
            <div className = 'tc'>
                <h1 className='f1'> RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll >
                    <ErrorBoundry> 
                        <Cardlist robots = { filteredRobots } /> 
                    </ErrorBoundry>
                </Scroll>
            </div>
    };
}

export default App;