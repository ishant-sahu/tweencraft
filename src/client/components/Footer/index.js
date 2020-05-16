import React from 'react';
import styles from './styles.scss';

class Footer extends React.Component {
  render() {
    return (
      <div  id="footer" className={styles.footer}>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6'>
              <div className={styles.footerCol}>
                <h4>Contact Us</h4>
                <p>
                  Phone: +91-7022756420
                  <br />
                  Email: ad@tweencraft.com
                </p>
              </div>
            </div>
            {/* <div className='col-sm-4'>
              <div className={`${styles.footerCol} ${styles.middle}`}>
                        <h4>Important Links</h4>
                        <ul className={`${styles.listUnstyled} li-space-lg`}>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className={styles.mediaBody}>Our business partners <a className="turquoise" href="#your-link">startupguide.com</a></div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className={styles.mediaBody}>Read our <a className="turquoise" href="terms-conditions.html">Terms & Conditions</a>, <a className="turquoise" href="privacy-policy.html">Privacy Policy</a></div>
                            </li>
                        </ul>
                    </div>
            </div> */}
            <div className={`col-sm-6 ${styles.align}`} >
              <div className='footer-col last'>
                <h4>Social Media</h4>
                <span className={`${styles.navItem} ${styles.socialIcons}`}>
                  <span className={`fa-stack ${styles.faStack}`}>
                    <a
                      href='https://www.facebook.com/tweencraftapp'
                      target='_blank'
                    >
                      <i
                        className={`fas fa-circle fa-stack-2x ${styles.faStack2x}`}
                      ></i>
                      <i
                        className={`fab fa-facebook-f fa-stack-1x ${styles.faStack1x}`}
                      ></i>
                    </a>
                  </span>
                  <span className={`fa-stack ${styles.faStack}`}>
                    <a
                      href='https://www.instagram.com/tweencraftapp/'
                      target='_blank'
                    >
                      <i
                        className={`fas fa-circle fa-stack-2x ${styles.faStack2x}`}
                      ></i>
                      <i
                        className={`fab fa-instagram fa-stack-1x ${styles.faStack1x}`}
                      ></i>
                    </a>
                  </span>
                  <span className={`fa-stack ${styles.faStack}`}>
                    <a
                      href='https://www.youtube.com/channel/UCQP0C_4_xlA-bvZGxEwxnGg'
                      target='_blank'
                    >
                      <i
                        className={`fas fa-circle fa-stack-2x ${styles.faStack2x}`}
                      ></i>
                      <i
                        className={`fab fa-youtube fa-stack-1x ${styles.faStack1x}`}
                      ></i>
                    </a>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
