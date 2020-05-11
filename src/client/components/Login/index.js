import React from 'react';
import styles from './styles.scss';
class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          phone: '',
          otp:''
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
  render() {
    return (
      <div id='contact' className={`${styles.login}`}>
         <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2>LOGIN</h2>
            </div>
          </div>
          <div className={`row ${styles.formWrapper}`}>
            <div className='col-lg-4 offset-lg-4'>
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
                    SUBMIT
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
export default LoginComponent;
