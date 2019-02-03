import React, { Component } from 'react';
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import {BrowserRouter as Router} from 'react-router-dom';
import UUID from 'uuid';
import './App.css';
import about from './components/pages/About';

class App extends Component {

  state = {
    todos: [
      {
        id: UUID.v4(),
        title: "One",
        completed: false
      },
      {
        id: UUID.v4(),
        title: "Two",
        completed: false  //make true for checking styling
      },
      {
        id: UUID.v4(),
        title: "Three",
        completed: false
      }
    ]
  }

  //Component Drilling ?
  // Toggle Complate 
  markComplated = (id) => {
    //console.log(id)
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })       //in app.js remember STATE !!
  }

  //Delete delTodo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });     //copy all elements except selected id element
  }                                                                                     // != error, !== correct

  //Add todo

  addTodo = (title) => {
    const newTodo = {
      id: UUID.v4(),
      title, //title : title
      completed: false
    }

    this.setState({ todos: [...this.state.todos, newTodo] });     //copy all elements and add new one
  }

  render() {
    //console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className="contanier">
            <Header />
            <React exact path="/" render={prop => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplated={this.markComplated} delTodo={this.delTodo} />
              </React.Fragment>
            )}/>
            <React path="/about" component={about}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
