import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from "axios";

const TodosCollectAndShow = () =>
{
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then(json => setTodos(json.data))
  }, []);

const titlelist = () => {
  return todos.map(titles =>{
    return(
      <li>{titles.title}</li>
    )
  })
}

 return(
  <div>
    <h1> This list contains the 'title' fields of array of objects downloaded from &nbsp;
      <a
          className="todos-link"
          href="https://jsonplaceholder.typicode.com/todos"
          target="_blank"
          rel="noopener noreferrer"
        >
      JSON todos
      </a>
    </h1>
    <ul>
    {titlelist()}
    </ul>
  </div>
 )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <TodosCollectAndShow />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
