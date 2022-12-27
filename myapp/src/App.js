import logo from './logo.svg';
import './App.css';
import User from "./components/User/User"


import React, { Component } from 'react'

export default class App extends Component {

    constructor(props){
      super(props)


      this.state= {
        users : [
          {id:1, name:'Somi'},
          {id:2, name:'Neda'},
          {id:3, name:'Azadeh'},
          {id:4, name:'Leili'}

        ]
      }

      this.userRemoveHandler=this.userRemoveHandler.bind(this)
    }


    userRemoveHandler(userId){
      // console.log(userId);
      let oldUsers = [...this.state.users]
      // console.log(oldUsers);

      let mainUserIndex = oldUsers.findIndex(user => {
        return user.id === userId
      })
      // console.log(mainUserIndex);
      oldUsers.splice(mainUserIndex, 1)
      // console.log(oldUsers);
      this.setState({
        users : oldUsers
      })
      // console.log(oldUsers);
    }

  render() {
    return (
      <div>
        {this.state.users.map (user => (
          <User key ={user.id}  {...user} onRemove={this.userRemoveHandler}/>

        ))}
        
      </div>
    )
  }
}
