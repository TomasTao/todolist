import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Todos from './componments/Todos';
import Navbar from './componments/Navbar';
import AddTodo from './componments/AddTodo';
import About from './componments/About';
import Axios from 'axios';


export class App extends Component {

  state = {
    todos:[]
  }

  componentDidMount()
  {
    Axios.get('http://3.17.159.3:5000/todos/')
    .then(res=>this.setState({todos: res.data}))
  }
  mark =(id)=>
  {
    Axios.post(`http://3.17.159.3:5000/todos/${id}`)
  .then(res=>this.setState({todos: this.state.todos.map(todo=>{
    if(todo._id===id)
    {
      todo.completed = !todo.completed;
    }
    return todo;
  })}));
}

add_todo=(title)=>
{
 Axios.post('http://3.17.159.3:5000/todos/add',{
   title,
   completed: false,
 })
  .then(res=>this.setState({todos: [...this.state.todos, res.data ]}));
}

delete =(id)=>
{
  Axios.delete(`http://localhost:5000/todos/${id}`)
  .then(res=>this.setState(
    {
        todos:this.state.todos.filter(todo=>todo._id!==id)
    }));
};
  render() {
      return (
        <Router>
          <div className = "App">
            <div className = "container" >
            <Navbar />
            <Route exact path = "/" render = {(props)=>(
            <div>
            <AddTodo add_todo = {this.add_todo} />
            <Todos todos = {this.state.todos} mark = {this.mark} delete = {this.delete} />
            </div>
            )}/>
            <Route path = "/about" component = {About} />
            </div>
          </div>
        </Router>
      )
  }
}


export default App;
