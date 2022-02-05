import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import './index.css';




const App = ()=>{

  return(
  <TodoApp/>
  );
};


ReactDOM.render(<App/>,
  
document.getElementById('root'))