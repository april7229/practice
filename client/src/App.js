import React, { Component } from 'react';
import axios from 'axios';

class App extends Component
{
  state = {
    users: [ {} ],
  };

  componentWillMount()
  {
    // gather data from back end
    // set data on state
    axios.get( 'http://localhost:5000' )
      .then( prom =>
      {
        // console.log(prom.data.users);
        this.setState( { users: prom.data.users } )
      } )
  }

  render()
  {
    console.log( this.state )
    return (
      <div className="App">
        {this.state.users.map( eachUser =>
        {
          return <div className='names' key={eachUser.id + eachUser.name}>{eachUser.name}</div>
        } )}
      </div>
    );
  }
}

export default App;
