import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todo extends Component {

    is_marked=()=>
    {
       return {
           textDecoration: this.props.todo.completed? "line-through": "none"
       } 
    }

    render() {
        const{_id,title,completed} = this.props.todo;
        return (
            <div className="container-fuild">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                          <input type="checkbox" checked={completed} onChange = {this.props.mark.bind(this,_id)} />
                        </div>
                    </div>
                        <p className="form-control text-light bg-secondary" style ={this.is_marked()}>{title}</p>
                        <div class="input-group-append">
                            <div class="btn-group dropleft">
                            <button type="button" class="btn btn-outline-secondary btn-sm dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="sr-only">Toggle Dropdown</span>
                            </button>
                            <div class="dropdown-menu">
                                <button class="dropdown-item" onClick={this.props.mark.bind(this,_id)}>Mark</button>
                                <button class="dropdown-item" onClick = {this.props.delete.bind(this,_id)}>Delete</button>
                            </div>
                            </div>
                        </div>
                </div>
            </div>
            
        )
    }
}
Todo.propTypes = {
    todo: PropTypes.object.isRequired,
    mark: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired
}
export default Todo
