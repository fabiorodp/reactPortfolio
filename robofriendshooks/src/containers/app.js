import React, { useState, useEffect } from 'react';
import Cardlist from '../components/cardlist';
import SearchBox from '../components/searchbox';
import './app.css';
import Scroll from '../components/scroll';
import ErrorBoundry from '../components/errorboundry';


function App () {
    const [ robots, setRobots] = useState([]);
    const [ searchField, setSearchField] = useState('');
    
    useEffect(
        ()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
        }, 
        []
    );

    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    };

    const filteredRobots = robots.filter(
        robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        }
    );

    return !robots ?
        <div className = 'tc'>
            <h1 className='f1'> RoboFriends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <h1>LOADING...</h1>
        </div>
        :
        <div className = 'tc'>
            <h1 className='f1'> RoboFriends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll >
                <ErrorBoundry> 
                    <Cardlist robots = { filteredRobots } /> 
                </ErrorBoundry>
            </Scroll>
        </div>
};

export default App;