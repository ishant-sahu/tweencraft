import React from 'react';
import styles from './styles.scss';

class Contact extends React.Component {
  render() {
    return (
      <div id='contact' className={`${styles.form}`}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2>CONTACT</h2>
              <ul className={`${styles.listUnstyled} li-space-lg`}>
                <li className={styles.address}>
                  Don't hesitate to give us a call or just use the contact form
                  below
                </li>
                <li>
                  <i className='fas fa-map-marker-alt'></i>22 Innovative, San
                  Francisco, CA 94043, US
                </li>
                <li>
                  <i className='fas fa-phone'></i>
                  <a className='blue' href='tel:003024630820'>
                    +81 720 2212
                  </a>
                </li>
                <li>
                  <i className='fas fa-envelope'></i>
                  <a className='blue' href='mailto:office@Chimpoon.com'>
                    office@Chimpoon.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6 offset-lg-3'>
              <form id='contactForm' data-toggle='validator' data-focus='false'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control-input'
                    id='cname'
                    required
                  />
                  <label className='label-control' for='cname'>
                    Name
                  </label>
                  <div className='help-block with-errors'></div>
                </div>
                <div className='form-group'>
                  <input
                    type='email'
                    className='form-control-input'
                    id='cemail'
                    required
                  />
                  <label className='label-control' for='cemail'>
                    Email
                  </label>
                  <div className='help-block with-errors'></div>
                </div>
                <div className='form-group'>
                  <textarea
                    className='form-control-textarea'
                    id='cmessage'
                    required
                  ></textarea>
                  <label className='label-control' for='cmessage'>
                    Your message
                  </label>
                  <div className='help-block with-errors'></div>
                </div>
                <div className='form-group checkbox'>
                  <input
                    type='checkbox'
                    id='cterms'
                    value='Agreed-to-Terms'
                    required
                  />
                  I have read and agree to Chimpoon's stated conditions in{' '}
                  <a href='privacy-policy.html'>Privacy Policy</a> and{' '}
                  <a href='terms-conditions.html'>Terms Conditions</a>
                  <div className='help-block with-errors'></div>
                </div>
                <div className='form-group'>
                  <button type='submit' className='form-control-submit-button'>
                    SUBMIT MESSAGE
                  </button>
                </div>
                <div className='form-message'>
                  <div id='cmsgSubmit' className='h3 text-center hidden'></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
