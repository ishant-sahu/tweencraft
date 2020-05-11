import React from 'react';
import styles from './styles.scss';
import { startLogo, endLogo, cornerLogo } from '../../images/';
class LogoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRadio: 'noscript',
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
  renderScreens() {
    return (
      <div className='row' style={{ marginTop: '50px' }}>
        <div className='col-lg-12'>
          <h5 style={{ marginTop: '30px' }}>Select logo Position</h5>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='form-control-radio-group'>
                <input id='option4' name='option4' type='checkbox' />
                <label htmlFor='option4' className={styles.labelText}>
                  Video Corner all the time
                </label>
              </div>
              <div className={styles.imgItem}>
                <img src={cornerLogo} />
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='form-control-radio-group'>
                <input id='option5' name='option5' type='checkbox' />
                <label htmlFor='option5' className={styles.labelText}>
                  Video Start
                </label>
              </div>
              <div className={styles.imgItem}>
                <img src={startLogo} />
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='form-control-radio-group'>
                <input id='option6' name='option6' type='checkbox' />
                <label htmlFor='option6' className={styles.labelText}>
                  Video End
                </label>
              </div>
              <div className={styles.imgItem}>
                <img src={endLogo} />
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
              <h2>UPLOAD LOGO</h2>

              <div className='form-group' style={{ textAlign: 'center' }}>
                <button
                  type='submit'
                  className={`form-control-submit-button order-button`}
                  onClick={() => {
                    document.getElementById('uploadLogo').click();
                  }}
                >
                  UPLOAD LOGO
                  <input
                    type='file'
                    name='myfile'
                    accept='image/*'
                    id='uploadLogo'
                    onChange={(e) => this.onFileChange(e)}
                  />
                </button>
              </div>

              {this.renderScreens()}
              <h5>Upload other images you want to see in the video</h5>
              <div className='form-group' style={{ textAlign: 'center' }}>
                <button
                  type='submit'
                  className={`form-control-submit-button order-button`}
                  onClick={() => {
                    document.getElementById('uploadLogo').click();
                  }}
                >
                  UPLOAD IMAGES
                  <input
                    type='file'
                    name='myfile'
                    accept='image/*'
                    id='uploadLogo'
                    onChange={(e) => this.onFileChange(e)}
                  />
                </button>
              </div>
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
export default LogoComponent;
