import React, { Component } from 'react';
import CardList from '../components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchfield: '',
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchfield } = this.state;
    const searchedMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchfield.toLowerCase())
    );

    return (
      <div className='app text-center'>
        <input
          onChange={(e) => {
            this.setState({ searchfield: e.target.value });
          }}
          className='my-5 p-3'
          type='search'
          placeholder='Search Amoung Monsters'
        />
        <CardList monsters={searchedMonsters} />
      </div>
    );
  }
}

export default App;
