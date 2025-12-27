import React from 'react';
import TodoForm from '../TodoForm/TodoForm.jsx';
import TodoList from '../TodoList/TodoList.jsx';

function Garden() {

  return(
    <div>
      <h2>This is the todo list!</h2>

      <TodoForm />
      <TodoList />
    </div>
  )
}

export default Garden;
