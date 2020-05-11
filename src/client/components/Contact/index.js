import React from 'react';
import styles from './styles.scss';
import {phonepe, paytm, whatsapp, payment} from '../../images/'
class ContactComponent extends React.Component {
  

  render() {
    return (
      <div id='contact' className={`${styles.contact}`}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2>CONTACT</h2>
              <div className={styles.item}>
                <div>
                  <img src={phonepe}/>
                  9900158160
                </div>
                <div className={styles.item}>
                  <img src={paytm}/>
                  9900158160
                </div>
                <div className={styles.item}>
                  <img src={whatsapp}/>
                  9900158160
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactComponent;
