import React from 'react';
import TodoForm from '../TodoForm/TodoForm.jsx';
import TodoList from '../TodoList/TodoList.jsx';

function Home() {

  return(
    <div>
      <h2>This is the todo list!</h2>

      <TodoForm />
      <TodoList />

      <Link to="/about">
        <button>Scedule Now</button>
      </Link>
    </div>
  )
}

export default Home;
