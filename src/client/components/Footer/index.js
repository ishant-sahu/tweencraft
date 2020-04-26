import React from 'react';
import styles from './styles.scss';

class Footer extends React.Component {
  render() {
    return (
        <div className={styles.footer}>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className={styles.footerCol}>
                        <h4>About Chimpoon</h4>
                        <p>We're passionate about creating the best mobile apps for personal development</p>
                    </div>
                </div> 
                <div className="col-md-4">
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
                </div> 
                <div className="col-md-4">
                    <div className="footer-col last">
                        <h4>Social Media</h4>
                        <span className="fa-stack">
                            <a href="#your-link">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-facebook-f fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#your-link">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-twitter fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#your-link">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-google-plus-g fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#your-link">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-instagram fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#your-link">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-linkedin-in fa-stack-1x"></i>
                            </a>
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
