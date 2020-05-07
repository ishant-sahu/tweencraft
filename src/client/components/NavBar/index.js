import React from 'react';
import styles from './styles.scss';
import { logo } from '../../images/';

export default () => (
  <nav className={`navbar navbar-expand-md navbar-dark ${styles.navbarCustom} fixed-top`}>
    <a className={`navbar-brand ${styles.navbarBrand} ${styles.logoImage}`} href='/'>
      <img src={logo} alt='logo' />
    </a>
  </nav>
);
