import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './styles.scss';
const re = /^\d{10}$/;
class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      name: '',
    };
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  handleNumberInput(value, limitDigits) {
    let length = value.toString().length;
    if (Number(value) < 0) {
      return '';
    }
    if (
      (limitDigits && length > limitDigits ? true : false) ||
      isNaN(parseInt(value[length - 1]))
    ) {
      return value.toString().substr(0, length - 1);
    }
    return value;
  }
  onChange(e, field) {
    let val = e.target.value;

    if (field === 'phone') {
        this.setState({
          [field]: this.handleNumberInput(val,10),
        });
    } else {
      this.setState({
        [field]: val,
      });
    }
  }

   
  submit(event) {
    event.preventDefault();
    
    const { name, phone } = this.state;
    if(re.test(phone)){
      this.props.sendEvent({ type: 'order_request', data:{name, phone} });
      
      toast.success('We have received your request.Our team will get back to you in some time.', {
        position: "top-right",
        autoClose:5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    } else{
      toast.error('Please enter a valid phone number', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    
  }
  render() {
    return (
      <div id='order-now' className={`${styles.login}`}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2>ORDER</h2>
            </div>
          </div>
          <div className={`row ${styles.formWrapper}`}>
            <div className='col-lg-4 offset-lg-4 col-sm-12 offset-sm-0'>
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
        <ToastContainer />
      </div>
    );
  }
}
export default LoginComponent;
