import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


class Todos extends Component {
/*
  markComplated= () => {
    console.log("Hello")
  }
*/
  render() {
    //console.log(this.props.todos);
    return this.props.todos.map((todo)=> ( // todos comes from app.js <Todos todos= {this.state.todos}/>
        <TodoItem key= {todo.id} todo = {todo} markComplated = {this.props.markComplated} delTodo ={this.props.delTodo}/>
    ));
 }
}


//PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired // todo is an arry
}

export default Todos;
