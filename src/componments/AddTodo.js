import React, { Component } from 'react';

import PropTypes from 'prop-types';


export class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
      }
    state = {
        title:''
    }
    onChange =(e)=>this.setState({[e.target.name]: e.target.value});
    onSubmit=()=>
    {
        const inp = this.myRef.current;
        this.props.add_todo(this.state.title);
        this.setState({title:''});
        inp.value = "";
    }
    render() {
        return (
            
 
            <div className="input-group mb-0">
            <input type="text" className="form-control" name = "title" ref={this.myRef} placeholder="Add something you want to do" aria-label="" aria-describedby="basic-addon1"  onChange = {this.onChange}/>
            <div className="input-group-prepend">
            <input className="btn btn-secondary float-right" type = "submit" value = "submit" onClick={this.onSubmit} />
            </div>
            </div>
          

        )
    }
}
AddTodo.propTypes = {

    AddTodo: PropTypes.func.isRequired
}
export default AddTodo
