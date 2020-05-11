import React from 'react';
import styles from './styles.scss';
class PaymentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaymentDone: true,
    };
    this.onChange = this.onChange.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
  }
  onChange(e, field) {
    let val = e.target.value;
    this.setState({
      [field]: val,
    });
  }
  onFileChange() {}

  renderRequestBox() {
    return (
      <div>
        <h5>Your Video is submitted.</h5>
        <p>
          Please make a payment of &#8377; 888 and attach screenshot of receipt
        </p>
        <div className='form-group' style={{ textAlign: 'center' }}>
          <button
            type='submit'
            className={`form-control-submit-button order-button`}
            onClick={() => {
              document.getElementById('uploadLogo').click();
            }}
          >
            UPLOAD PAYMENT RECEIPT
            <input
              type='file'
              name='myfile'
              accept='image/*'
              id='uploadLogo'
              onChange={(e) => this.onFileChange(e)}
            />
          </button>
        </div>
      </div>
    );
  }

  renderPaymentDone() {
    return (
      <div>
        <h5>Your Video is submitted.</h5>
        <p>Our team will reach out to you shortly.</p>
      </div>
    );
  }

  render() {
    return (
      <div className={`${styles.payment}`}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 offset-lg-3'>
              <h2>PAYMENT</h2>
              <div className={styles.paymentBox}>
                {this.state.isPaymentDone
                  ? this.renderPaymentDone()
                  : this.renderRequestBox()}
              </div>
            </div>
            {!this.state.isPaymentDone && <div className='col-lg-4 offset-lg-4' style={{ marginTop: '30px' }}>
              <div className='form-group'>
                <button type='submit' className='form-control-submit-button'>
                  SUBMIT
                </button>
              </div>
            </div>}
          </div>
        </div>
      </div>
    );
  }
}
export default PaymentComponent;
