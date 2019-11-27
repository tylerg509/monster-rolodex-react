import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list-component.jsx';
import { SearchBox } from './components/search-box/searchbox-component';

class  App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }

  } 
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters: users}))
  }


  handleChange = e =>{
    this.setState({searchField: e.target.value})
    //could also write the following in constructor rather than the arrow function
    //// this.handleChange = this.handleChange.bind(this)
  }


render(){
  const {monsters, searchField}= this.state
  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase()))
  return(
    <div className="App">
      <h1> Monsters Rolodex</h1>
      <SearchBox
        placeholder="Search Monsters" 
        handleChange={this.handleChange}>>
      </SearchBox>

      <CardList monsters={filteredMonsters }> </CardList>
    </div>

  )

  }
}

export default App;
