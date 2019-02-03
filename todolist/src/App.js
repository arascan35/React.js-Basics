import React, { Component } from 'react';
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import UUID from 'uuid';      // missions taken by jsonplaceholder.com
import './App.css';
import About from './components/pages/About';
import axios from 'axios';      //fetching library from server

class App extends Component {

  state = {
    todos: []
  /*[
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
  ]*/
  }

  componentDidMount (){
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then(res => this.setState({todos : res.data}));
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

    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res =>this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));


    /*
    //copy all elements except selected id element
    // != error, !== correct
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }); 
    */    
  }                                                                                    

  //Add todo

  addTodo = (title) => {

    axios.post("https://jsonplaceholder.typicode.com/todos",{
      title,
      completed:false
    }).then(res =>this.setState({ todos: [...this.state.todos, res.data] }));


    /*
    const newTodo = {
      id: UUID.v4(),
      title, //title : title
      completed: false
    }

    this.setState({ todos: [...this.state.todos, newTodo] });     //copy all elements and add new one
    */
  }

  render() {
    //console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className="contanier">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplated={this.markComplated} delTodo={this.delTodo} />
              </React.Fragment>
            )}>
            </Route>
            <Route path="/about" component={About}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
