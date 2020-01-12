import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { Search } from "./components/search-box/search-box";

import './App.css';

class App extends Component {
    constructor ( props ) {
        super ( props );

        this.state = {
            monsters: [],
            searchField: ''
        };
    }

    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((res) =>
                this.setState({
                    monsters: res
                })
            );
    }

   onChange =  async (e) => {

        await this.setState({
            searchField:  e.target.value
        });
       console.log(this.state.searchField);
    };

    render () {
        const { searchField, monsters} = this.state;

        const filteredMonsters = monsters.filter( monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
            <div className = 'App'>
                <h1>Monsters</h1>
                <Search onChange = { this.onChange } placeholder='some text'/>
                <CardList monsters = { filteredMonsters } />
            </div>
        );
    }
}

export default App;
