import React from 'react';
import styles from './styles.scss';
import { startImg, endImg, inDialogue } from '../../images/';
class CallOfActionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRadio: 'noscript',
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e, field) {
    let val = e.target.value;
    this.setState({
      [field]: val,
    });
  }

  renderScreens() {
    return (
      <div className='row' style={{ marginTop: '50px' }}>
        <div className='col-lg-12'>
          <h5 style={{ marginTop: '30px' }}>
            When your contact information should be displayed
          </h5>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='form-control-radio-group'>
                <input id='option4' name='option4' type='checkbox' />
                <label htmlFor='option4' className={styles.labelText}>
                  Always on screen
                </label>
              </div>
              <div className={styles.imgItem}>
                <img src={startImg} />
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='form-control-radio-group'>
                <input id='option5' name='option5' type='checkbox' />
                <label htmlFor='option5' className={styles.labelText}>
                  In Dialogue
                </label>
              </div>
              <div className={styles.imgItem}>
                <img src={inDialogue} />
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='form-control-radio-group'>
                <input id='option6' name='option6' type='checkbox' />
                <label htmlFor='option6' className={styles.labelText}>
                  In the End
                </label>
              </div>
              <div className={styles.imgItem}>
                <img src={endImg} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div id='contact' className={`${styles.callOfAction}`}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2>CALL OF ACTION</h2>
              <h5 style={{ marginTop: '30px' }}>
                Your viewer should contact you at
              </h5>
              <div className='row'>
                <div className='offset-lg-2 col-lg-4 '>
                  <div className='form-control-radio-group'>
                    <input id='option1' name='option1' type='checkbox' />
                    <label htmlFor='option1' className={styles.labelText}>
                      Phone no in Video
                    </label>
                  </div>
                </div>
                <div className={`col-lg-4 form-group`}>
                  <input
                    type='text'
                    className='form-control-input'
                    id='cname'
                    required
                    value={this.state.name}
                    onChange={(e) => {
                      this.onChange(e, 'name');
                    }}
                  />{' '}
                  <label className='label-control' htmlFor='cname'>
                    Phone no
                  </label>
                  <div className='help-block with-errors'></div>
                </div>
              </div>
              <div className='row'>
                <div className='offset-lg-2 col-lg-4 '>
                  <div className='form-control-radio-group'>
                    <input id='option2' name='option2' type='checkbox' />
                    <label htmlFor='option2' className={styles.labelText}>
                      Website in Video
                    </label>
                  </div>
                </div>
                <div className={`col-lg-4 form-group`}>
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
                    Website URL
                  </label>
                  <div className='help-block with-errors'></div>
                </div>
              </div>
              <div className='row'>
                <div className='offset-lg-2 col-lg-4 '>
                  <div className='form-control-radio-group'>
                    <input id='option3' name='option3' type='checkbox' />
                    <label htmlFor='option3' className={styles.labelText}>
                      Email in Video
                    </label>
                  </div>
                </div>
                <div className={`col-lg-4 form-group`}>
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
                    Email
                  </label>
                  <div className='help-block with-errors'></div>
                </div>
              </div>
              {this.renderScreens()}
              <div className='col-lg-4 offset-lg-4'>
                <div className='form-group'>
                  <button type='submit' className='form-control-submit-button'>
                    NEXT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CallOfActionComponent;
