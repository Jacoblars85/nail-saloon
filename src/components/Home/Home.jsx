import React from 'react';
import TodoForm from '../SceduleForm/SceduleForm.jsx';
import TodoList from '../ScedulePage/ScedulePage.jsx';

function Home() {

  return(
    <div>
      <h2>This is the todo list!</h2>

      {/* <TodoForm /> */}
      {/* <TodoList /> */}

      <Link to="/about">
        <button>Scedule Now</button>
      </Link>
    </div>
  )
}

export default Home;
