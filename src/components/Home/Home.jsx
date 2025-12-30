import React from 'react';
import SceduleForm from '../ScheduleForm/ScheduleForm.jsx';
import ScedulePage from '../SchedulePage/SchedulePage.jsx';

function Home() {

  return(
    <div>
      <h2>This is the nail saloon</h2>

      <Link to="/schedule">
        <button>Schedule Now</button>
      </Link>
    </div>
  )
}

export default Home;
