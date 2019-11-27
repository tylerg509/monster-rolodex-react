import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list-component.jsx'

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


render(){
  return(
    <div className="App">
      <input 
        type="search" 
        placeholder="Search Monsters" 
        onChange={e=> {
          this.setState({searchField:e.target.value}
          ) 
/*           this.setState({searchField:e.target.value}, ()=>
          console.log(this.state) //have to console log within this.setstate due to the async nature of set state otherwise would be one character behind
          ) */
        }}>
      </input>
      <CardList monsters={this.state.monsters }>

      </CardList>
    </div>

  )

  }
}

export default App;
