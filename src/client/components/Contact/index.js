import React from 'react';
import axios from 'axios';
import styles from './styles.scss';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: '',
      phone: '',
      name: '',
    };
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  onChange(e, field) {
    let val = e.target.value;
    this.setState({
      [field]: val,
    });
  }
  submit(event) {
    event.preventDefault();
    
    axios
      .post('/message', this.state)
      .then((resp) =>{
        this.setState({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        $('#cmsgSubmit').text('Message sent successfully');
      })
      .catch(function(error) {
        console.log(error);
      });
      
      
  }
  showToast() {
    return (
      <div
        className='toast'
        role='alert'
        aria-live='assertive'
        aria-atomic='true'
      >
        <div className='toast-header'>
          <strong class='mr-auto'>Bootstrap</strong>
          <button
            type='button'
            class='ml-2 mb-1 close'
            data-dismiss='toast'
            aria-label='Close'
          >
            <span aria-hidden='true'>&times;</span>
          </button>
        </div>
        <div class='toast-body'>Hello, world! This is a toast message.</div>
      </div>
    );
  }
  render() {
    return (
      <div id='contact' className={`${styles.form}`}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2>CONTACT</h2>
              <ul className={`${styles.listUnstyled} li-space-lg`}>
                <li className={styles.address}>
                  To get your video done, just write to us
                </li>
                {/* <li>
                  <i className='fas fa-map-marker-alt'></i>22 Innovative, San
                  Francisco, CA 94043, US
                </li> */}
                {/* <li>
                  <i className='fas fa-phone'></i>
                  <a className='blue' href='tel:003024630820'>
                    +81 720 2212
                  </a>
                </li> */}
                <li>
                  <i className='fas fa-envelope'></i>
                  <a
                    style={{ marginLeft: '10px' }}
                    className='blue'
                    href='mailto:ad@tweencraft.com'
                  >
                    ad@tweencraft.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6 offset-lg-3'>
              <form
                id='contactForm'
                data-toggle='validator'
                data-focus='false'
                onSubmit={this.submit}
              >
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control-input'
                    id='cname'
                    required
                    value={this.state.name}
                    onChange={(e) => {
                      this.onChange(e, 'name');
                    }}
                  />
                  <label className='label-control' htmlFor='cname'>
                    Name
                  </label>
                  <div className='help-block with-errors'></div>
                </div>
                <div className='form-group'>
                  <input
                    type='email'
                    className='form-control-input'
                    id='cemail'
                    value={this.state.email}
                    required
                    onChange={(e) => {
                      this.onChange(e, 'email');
                    }}
                  />
                  <label className='label-control' htmlFor='cemail'>
                    Email
                  </label>
                  <div className='help-block with-errors'></div>
                </div>
                <div className='form-group'>
                  <input
                    type='phone'
                    className='form-control-input'
                    id='cphone'
                    required
                    value={this.state.phone}
                    onChange={(e) => {
                      this.onChange(e, 'phone');
                    }}
                  />
                  <label className='label-control' htmlFor='cphone'>
                    Phone
                  </label>
                  <div className='help-block with-errors'></div>
                </div>
                <div className='form-group'>
                  <textarea
                    className='form-control-textarea'
                    id='cmessage'
                    required
                    value={this.state.message}
                    onChange={(e) => {
                      this.onChange(e, 'message');
                    }}
                  ></textarea>
                  <label className='label-control' htmlFor='cmessage'>
                    Your message
                  </label>
                  <div className='help-block with-errors'></div>
                </div>
                {/* <div className='form-group checkbox'>
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
                </div> */}
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
