import React, { Component } from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

export class Todos extends Component {
    render() {
        return  this.props.todos.map((todo)=>(
        <Todo key = {todo._id} todo ={todo} mark = {this.props.mark} delete ={this.props.delete} />
        ));
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    mark: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired
}
export default Todos

