import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: '18yuhdh1',
        },
        {
          name: 'Frank',
          id: '18yuhdh2',
        },
        {
          name: 'Jacky',
          id: '18yuhdh3',
        },
        {
          name: 'Gothenk',
          id: '18yuhdh4',
        },
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return <div key={monster.id}><h1>{monster.name}</h1></div>;
          })
        }
      </div>
    );
  }
}

export default App;
