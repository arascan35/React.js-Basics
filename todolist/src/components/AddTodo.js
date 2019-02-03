import React, { Component } from 'react'


export default class AddTodo extends Component {

  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.title){
      this.props.addTodo(this.state.title);
    }
    //this.setState(this.state.title='');     //Warning!! 
    this.setState({title : ''}); 
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });  //if there are one more blank line email,pw, etc.

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" name="title" placeholder="Add Todo..." value={this.state.title} onChange={this.onChange} />
        <input type="submit" value="submit" className="btn" />
      </form>
    )
  }
}
