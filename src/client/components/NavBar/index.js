import React from 'react';
import styles from './styles.scss';
import {logo} from '../../images/index';

export default () => (
  <nav className={`navbar navbar-expand-md navbar-dark ${styles.navbarCustom} fixed-top`}>
    <a className={`navbar-brand ${styles.navbarBrand} ${styles.logoText}`} href='/'>
      {/* <img src={logo} alt='logo' /> */}
      Chimpoon
    </a>
    <button
      className={`navbar-toggler ${styles.navbarToggler}`}
      type='button'
      data-toggle='collapse'
      data-target='#navbarsExampleDefault'
      aria-controls='navbarsExampleDefault'
      aria-expanded='false'
      aria-label='Toggle navigation'
    >
      <span className={`${styles.navbarTogglerAwesome} fas fa-bars`}></span>
      <span className={`${styles.navbarTogglerAwesome} fas fa-times`}></span>
    </button>
    <div className='collapse navbar-collapse' id='navbarsExampleDefault'>
      <ul className={`navbar-nav ${styles.navbarNav } ml-auto`}>
        <li className={`${styles.navItem}`}>
          <a className={`${styles.navLink} page-scroll`} href='#header'>
            HOME <span className='sr-only'>(current)</span>
          </a>
        </li>
        <li className={`${styles.navItem}`}>
          <a className={`${styles.navLink} page-scroll`} href='#features'>
            FEATURES
          </a>
        </li>
        <li className={`${styles.navItem}`}>
          <a className={`${styles.navLink} page-scroll`} href='#preview'>
            PREVIEW
          </a>
        </li>
        <li className={`${styles.navItem} dropdown ${styles.dropdown}`}>
          <a
            className={`${styles.navLink} dropdown-toggle ${styles.dropdownToggle} page-scroll`}
            href='#details'
            id='navbarDropdown'
            role='button'
            aria-haspopup='true'
            aria-expanded='false'
          >
            DETAILS
          </a>
          <div className={`dropdown-menu ${styles.dropdownMenu}`} aria-labelledby='navbarDropdown'>
            <a className={`dropdown-item ${styles.dropdownItem}`} href='terms-conditions.html'>
              <span className={styles.itemText}>TERMS CONDITIONS</span>
            </a>
            <div className={styles.dropdownItemsDivideHr}></div>
            <a className={`dropdown-item ${styles.dropdownItem}`}  href='privacy-policy.html'>
              <span className={styles.itemText}>PRIVACY POLICY</span>
            </a>
          </div>
        </li>

        <li className={styles.navItem}>
          <a className={`${styles.navLink} page-scroll`} href='#contact'>
            CONTACT
          </a>
        </li>
      </ul>
      <span className={`${styles.navItem} ${styles.socialIcons}`}>
        <span className={`fa-stack ${styles.faStack}`}>
          <a href='#your-link'>
            <i className={`fas fa-circle fa-stack-2x ${styles.faStack2x}`}></i>
            <i className={`fab fa-facebook-f fa-stack-1x ${styles.faStack1x}`}></i>
          </a>
        </span>
        <span className={`fa-stack ${styles.faStack}`}>
          <a href='#your-link'>
            <i  className={`fas fa-circle fa-stack-2x ${styles.faStack2x}`}></i>
            <i className={`fab fa-twitter fa-stack-1x ${styles.faStack1x}`}></i>
          </a>
        </span>
      </span>
    </div>
  </nav>
);
