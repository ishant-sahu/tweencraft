import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { calender } from '../../../assets/images';

class Home extends React.Component {
  render() {
    return (
      <div>
        <img src={calender} />
        <div> I am in the home right</div>
        <Link to={'/users'}>Press me</Link>
        </div>
    );
  }
}

export default Home;
