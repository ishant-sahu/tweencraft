import React from 'react';
import { Link } from 'react-router-dom';
import { calender } from '../../../assets/images';
import styles from './styles.scss';

class Home extends React.Component {
  render() {
   
    return (
      <div className={styles.Home}>
        <img src={calender} />
        <div> I am in the home right now 123</div>
        <Link to={'/users'}>Press me</Link>
        </div>
    );
  }
}

export default Home;
