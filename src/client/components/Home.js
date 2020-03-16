import React from 'react';
import {Redirect} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div> I am in the home component</div>
      <button
        onClick={() => {
          return <Redirect to={'/users'} />
        }}
        >
          Press me
      </button>
      
    </div>
  );
};

export default Home;
