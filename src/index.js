import React from 'react'
import ReactDOM from 'react-dom'

import TodoApp from './components/TodoApp/TodoApp'
import './index.css'

function App() {
  return <TodoApp />
}

ReactDOM.render(<App />, document.getElementById('root'))
