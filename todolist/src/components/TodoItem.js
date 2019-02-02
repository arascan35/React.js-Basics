import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
   //Dynamic styling
    getStyle = () => {

        return {
            textDecoration : this.props.todo.completed ? 
            'line-through' : 'none',
            backgroundColor : '#f4f4f4',
            padding : '10px',
            BorderBottom : '1px #ccc dotted'
        }
        /* Old fashion
        if(this.props.todo.completed){
            return {
                textDecoration : 'line-through'
            }
        }
        else{
            return {
                textDecoration : 'none'
            }
        }
        */
    }
 
    render() {
        // id = this.props.todo.id 
        // title = this.props.todo.title
        const {id,title } = this.props.todo
    return (
      <div style={this.getStyle()}>
        <p>
            <input type="checkbox" name="" id="" onChange={this.props.markComplated.bind(this,id)} ></input>
            {title}
            <button style={btnStyle} onClick ={this.props.delTodo.bind(this,id)}>x</button>
        </p>
      </div>
    )
  }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired // todo is a single object
}

/*
const itemStyle = {
    backgroundColor : '#f4f4f4'
}
*/

const btnStyle = {
    backgroundColor :'#ff0000',
    color : 'white',
    border :'none',
    padding : '5px 10px',
    borderRadius : '50%',
    cursor : 'pointer',
    float : 'right'
}
export default TodoItem;