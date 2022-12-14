import React, { useState } from 'react';
import './App.css';
import Template from './components/Template';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할일 1",
      checked: true
    },
    {
      id: 2,
      text: "할일 2",
      checked: true
    },
    {
      id: 3,
      text: "할일 3",
      checked: true
    }
  ]);
  
  return (
    <Template>
      <TodoList todos={todos} />
    </Template>
  )
}

export default App