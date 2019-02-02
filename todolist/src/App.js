import React, { Component } from 'react';
import Todos from "./components/Todos";

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: "One",
        completed: false
      },
      {
        id: 2,
        title: "Two",
        completed: false  //make true for checking styling
      },
      {
        id: 3,
        title: "Three",
        completed: false
      }
    ]
  }

//Component Drilling ?
// Toggle Complate 
markComplated= (id) => {
  //console.log(id)
  this.setState({todos : this.state.todos.map(todo => {
    if(todo.id === id){
      todo.completed =! todo.completed;
    }
    return todo;
  }) })       //in app.js remember STATE !!
}

//Delete delTodo
delTodo=(id)=>{
  this.setState({todos : [...this.state.todos.filter(todo => todo.id !== id)]});     //copy all elements except selected id element
}                                                                                   // != error, !== correct

  render() {
    //console.log(this.state.todos);
    return (
      <div className="App">
        <Todos todos= {this.state.todos} markComplated={this.markComplated} delTodo={this.delTodo}/>
      </div>
    );
  }
}

export default App;
