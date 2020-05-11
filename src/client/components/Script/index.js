import React from 'react';
import styles from './styles.scss';
class ScriptComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRadio: 'noscript',
    };
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
  }
  onChange(e, field) {
    let val = e.target.value;
    this.setState({
      [field]: val,
    });
  }
  onFileChange(e) {
    let files = e.target.files;
    if (files && files.length > 0) {
      if (files[0].size && files[0].size > 4194304) {
        return;
      }
    }
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

  renderScriptAvailable() {
    return (
      <div>
        <div className='form-group' style={{ textAlign: 'center' }}>
          <button
            type='submit'
            className={`form-control-submit-button order-button`}
            onClick={() => {
              document.getElementById('fileUpload').click();
            }}
          >
            UPLOAD SCRIPT
            <input
              type='file'
              name='myfile'
              accept='image/*'
              id='fileUpload'
              onChange={(e) => this.onFileChange(e)}
            />
          </button>
        </div>
        <div className={styles.scriptAvailable}>
          <div className={styles.flexItem}>
            <h4>Script should follow the below example</h4>
            <div className={styles.scriptWrapper}>
              <h5>Characters : Rahul , Rakesh , Vijai</h5>
              <ol>
                <li>
                  <cite>Rahul</cite>
                  <blockquote>
                    <p>Yaar aaj kahan ja rahe ho.?</p>
                  </blockquote>
                </li>

                <li>
                  <cite>Rajesh</cite>
                  <blockquote>
                    <p>Grocery khareedne ja raha hun.</p>
                  </blockquote>
                </li>

                <li>
                  <cite>Vijay</cite>
                  <blockquote>
                    <p> Grocery ghar pe kyon nahin mangate?</p>
                  </blockquote>
                </li>
                <li>......</li>
              </ol>
            </div>
          </div>
          <div className={styles.flexItem}>
            <h4>Pricing</h4>
            <div className={styles.scriptWrapper}>
              <div>- 1 min video &#8377; 1200</div>
              <div>- Advance payment &#8377; 400(non refundable)</div>
              <div>- 2 revision free, after that each revision &#8377; 100</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  renderNoScriptAvailable() {
    return (
      <div className={`${styles.scriptAvailable} ${styles.noScript}`}>
        <div className={styles.flexItem}>
          <div className={`form-group`}>
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
              Name of Business
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
              Main message
            </label>
            <div className='help-block with-errors'></div>
          </div>
        </div>
        <div className={styles.flexItem}>
          <h4 style={{ marginTop: '0' }}>Pricing</h4>
          <div className={styles.scriptWrapper}>
            <div>- 1 min video &#8377; 888</div>
            <div>- Advance payment &#8377; 300(non refundable)</div>
            <div>- 2 revision free, after that each revision &#8377; 100</div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    const { selectedRadio } = this.state;
    return (
      <div id='contact' className={`${styles.script}`}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2>VIDEO SCRIPT</h2>
            </div>
          </div>
          <div className={`row ${styles.formWrapper}`}>
            <div className='col-lg-6 offset-lg-3'>
              <div className='form-control-radio-group'>
                <input
                  id='radio1'
                  name='radio'
                  type='radio'
                  onChange={() => {
                    this.setState({ selectedRadio: 'script' });
                  }}
                  checked={selectedRadio === 'script'}
                />
                <label htmlFor='radio1'>I have my script</label>
              </div>
              <div className='form-control-radio-group'>
                <input
                  id='radio2'
                  name='radio'
                  type='radio'
                  onChange={() => {
                    this.setState({ selectedRadio: 'noscript' });
                  }}
                  checked={selectedRadio === 'noscript'}
                />
                <label htmlFor='radio2'>
                  Don't worry we will create a script for you
                </label>
              </div>
            </div>
          </div>
          {selectedRadio === 'script' && this.renderScriptAvailable()}
          {selectedRadio === 'noscript' && this.renderNoScriptAvailable()}
          <div className='form-group' style={{ textAlign: 'center' }}>
            <button
              type='submit'
              className={`form-control-submit-button order-button`}
              onClick={() => {
                //document.getElementById('fileUpload').click();
              }}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default ScriptComponent;
