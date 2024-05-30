import React, { useState } from 'react';
import { robots } from './robots';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import Scroll from "./Scroll";


const App = () => {
    // Initialize state with hooks
    const [searchfield, setSearchfield] = useState('');

    const onSearchChange = (event) => {
        // Update the search field state
        setSearchfield(event.target.value);
    };

    // Filter robots based on the search field
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });




    return (
        <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
            <Cardlist robots={filteredRobots} />
            </Scroll>
        </div>
    );
};

export default App;
