import React from 'react';
import styles from './styles.scss';
export default () => (
  <div className={styles.spinnerWrapper}>
    <div className={styles.spinner}>
      <div className={styles.bounce1}></div>
      <div className={styles.bounce2}></div>
      <div className={styles.bounce3}></div>
    </div>
  </div>
);
