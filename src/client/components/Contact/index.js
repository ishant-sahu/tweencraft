import React from 'react';
import styles from './styles.scss';
import { Link } from 'react-router-dom';
import { phonepe, paytm, whatsapp, payment } from '../../images/';
class ContactComponent extends React.Component {
  render() {
    return (
      <div className={`${styles.contact}`}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 offset-lg-3'>
              <h2>CONTACT US</h2>
              <div className={styles.contactBox}>
                <h5>Phone: +91-7022756420</h5>
                <h5>Email: ad@tweencraft.com</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactComponent;
