import React from 'react';
import styles from './styles.scss';
class VideoInformationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      phone: '',
      otp: '',
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
      .then((resp) => {
        this.setState({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
        $('#cmsgSubmit').text('Message sent successfully');
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div id='contact' className={`${styles.videoInformation}`}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2>VIDEO INFORMATION</h2>
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
                    Video Name
                  </label>
                  <div className='help-block with-errors'></div>
                </div>
                <div className='form-group'>
                  <select id='lang'  className='form-control-select'> 
                    <option value='select' onChange={this.onSelectChange}>
                      Purpose of Video
                    </option>
                    <option value='Java' onChange={this.onSelectChange}>
                      Java
                    </option>
                    <option value='C++' onChange={this.onSelectChange}>
                      C++
                    </option>
                    <option value='C++' onChange={this.onSelectChange}>
                      Other
                    </option>
                  </select>
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
                    Please specify
                  </label>
                  <div className='help-block with-errors'></div>
                </div>
                <div className='form-group'>
                  <button type='submit' className='form-control-submit-button'>
                    NEXT
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
export default VideoInformationComponent;
