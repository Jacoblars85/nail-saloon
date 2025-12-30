import React from 'react';
import SceduleForm from '../SceduleForm/SceduleForm.jsx';
import ScedulePage from '../ScedulePage/ScedulePage.jsx';

function Home() {

  return(
    <div>
      <h2>This is the nail saloon</h2>

      <Link to="/about">
        <button>Scedule Now</button>
      </Link>
    </div>
  )
}

export default Home;
