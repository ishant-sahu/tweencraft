import React from 'react';
import styles from './styles.scss';
import {
  details1Iphone,
  details2Iphone,
  detailsLightBox1,
  detailsLightBox2
} from '../../images/index';

class Goals extends React.Component {
  componentDidMount() {
    if ($) {
        $('.popup-with-move-anim').magnificPopup({
            type: 'inline',
            fixedContentPos: false, /* keep it false to avoid html tag shift with margin-right: 17px */
            fixedBgPos: true,
            overflowY: 'auto',
            closeBtnInside: true,
            preloader: false,
            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-slide-bottom'
        });
    }
  }

  render() {
    return (
      <div>
        <div id='details' className={styles.basic2}>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <img
                  className='img-fluid'
                  src={details1Iphone}
                  alt='alternative'
                />
              </div>
              <div className='col-lg-6'>
                <div className={styles.textContainer}>
                  <h3 className={styles.h3}>Goals Setting</h3>
                  <p>
                  Chimpoon can easily help you track your personal development
                    evolution if you take the time to properly setup your goals
                    at the beginning of the training process. Check out the
                    details
                  </p>
                  <a
                    className={`btn-solid-reg popup-with-move-anim ${styles.btnSolidReg}`}
                    href='#details-lightbox-1'
                  >
                    LIGHTBOX
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.basic3}>
          <div className='second'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className={styles.textContainer}>
                    <h3 className={styles.h3}>Calendar Input</h3>
                    <p>
                      The calendar input function enables the user to setup
                      training, meditation and relaxation sessions with ease.
                      Just open the feature and start setting up your time as
                      you desire
                    </p>
                    <a
                      className={`btn-solid-reg popup-with-move-anim ${styles.btnSolidReg}`}
                      href='#details-lightbox-2'
                    >
                      LIGHTBOX
                    </a>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <img
                    className='img-fluid'
                    src={details2Iphone}
                    alt='alternative'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id='details-lightbox-1'
          className={`${styles.lightboxBasic} lightbox-basic zoom-anim-dialog mfp-hide`}
        >
          <div className='row'>
            <button
              title='Close (Esc)'
              type='button'
              className={`${styles.button} ${styles.mfpClose} ${styles.xButton}`}
            >
              ×
            </button>
            <div className='col-lg-6'>
              <img
                className='img-fluid'
                src={detailsLightBox1}
                alt='alternative'
              />
            </div>
            <div className='col-lg-6'>
              <h3 className={styles.h3}>Goals Setting</h3>
              <hr />
              <p>
              Chimpoon can easily help you track your personal development
                evolution if you take the time to set it up.
              </p>
              <h4 className={styles.h4}>User Feedback</h4>
              <p>
                This is a great app which can help you save time and make your
                live easier. And it will help improve your productivity levels.
              </p>
              <p>
                You should definitely give it a try when you need a good app.
              </p>
              <table >
                <tr >
                  <td className={styles.iconCell}>
                    <i className='fas fa-desktop'></i>
                  </td>
                  <td>Responsive layout</td>
                </tr>
                <tr>
                  <td className={styles.iconCell}>
                    <i className='fas fa-bullhorn'></i>
                  </td>
                  <td>Distinctive CTAs</td>
                </tr>
                <tr>
                  <td className={styles.iconCell}>
                    <i className='fas fa-image'></i>
                  </td>
                  <td>Image gallery slider</td>
                </tr>
                <tr>
                  <td className={styles.iconCell}>
                    <i className='fas fa-envelope'></i>
                  </td>
                  <td>Contact forms</td>
                </tr>
                <tr>
                  <td className={styles.iconCell}>
                    <i className='fab fa-font-awesome-flag'></i>
                  </td>
                  <td>FontAwesome icons</td>
                </tr>
                <tr>
                  <td className={styles.iconCell}>
                    <i className='fas fa-code'></i>
                  </td>
                  <td>Well-structured code</td>
                </tr>
              </table>
              <a className={`btn-solid-reg styles.btnSolidReg`} href='#your-link'>
                DETAILS
              </a>{' '}
              <a
                className={`btn-outline-reg ${styles.mfpClose} ${styles.asButton}`}
                href='#details'
              >
                BACK
              </a>
            </div>
          </div>
        </div>

        <div
          id='details-lightbox-2'
          className='lightbox-basic zoom-anim-dialog mfp-hide'
        >
          <div className='row'>
            <button
              title='Close (Esc)'
              type='button'
              className='mfp-close x-button'
            >
              ×
            </button>
            <div className='col-lg-6'>
              <img
                className='img-fluid'
                src={detailsLightBox2}
                alt='alternative'
              />
            </div>
            <div className='col-lg-6'>
              <h3>Calendar Input</h3>
              <hr />
              <p>
                The calendar input function enables the user to setup training,
                meditation and relaxation sessions with ease.
              </p>
              <h4>User Feedback</h4>
              <p>
                This is a great app which can help you save time and make your
                live easier. And it will help improve your productivity levels.
              </p>
              <p>
                You should definitely give it a try when you need a good app.
              </p>
              <table>
                <tr>
                  <td className={styles.iconCell}>
                    <i className='fas fa-desktop'></i>
                  </td>
                  <td>Responsive layout</td>
                </tr>
                <tr>
                  <td className={styles.iconCell}>
                    <i className='fas fa-bullhorn'></i>
                  </td>
                  <td>Distinctive CTAs</td>
                </tr>
                <tr>
                  <td className={styles.iconCell}>
                    <i className='fas fa-image'></i>
                  </td>
                  <td>Image gallery slider</td>
                </tr>
                <tr>
                  <td className={styles.iconCell}>
                    <i className='fas fa-envelope'></i>
                  </td>
                  <td>Contact forms</td>
                </tr>
                <tr>
                  <td className={styles.iconCell}>
                    <i className='fab fa-font-awesome-flag'></i>
                  </td>
                  <td>FontAwesome icons</td>
                </tr>
                <tr>
                  <td className={styles.iconCell}>
                    <i className='fas fa-code'></i>
                  </td>
                  <td>Well-structured code</td>
                </tr>
              </table>
              <a className='btn-solid-reg' href='#your-link'>
                DETAILS
              </a>{' '}
              <a
                className='btn-outline-reg mfp-close as-button'
                href='#details'
              >
                BACK
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Goals;
