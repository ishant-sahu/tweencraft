import React from 'react';
import styles from './styles.scss';
import { featuresIphone1,featuresIphone2,featuresIphone3 } from '../../images/index';

class Features extends React.Component {
  render() {
    return (
      <div id='features' className={styles.tabs}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2 className={styles.h2}>FEATURES</h2>
              <div className={`p-heading ${styles.pHeading} p-large`}>
              Chimpoon was designed based on input from personal development
                coaches and popular trainers so it offers all
              </div>
            </div>
          </div>
          <div className='row'>
            <ul className={`nav nav-tabs ${styles.navTabs}`} id='lenoTabs' role='tablist'>
              <li className='nav-item'>
                <a
                  className={`nav-link ${styles.navLink} active`}
                  id='nav-tab-1'
                  data-toggle='tab'
                  href='#tab-1'
                  role='tab'
                  aria-controls='tab-1'
                  aria-selected='true'
                >
                  <i  className={`fas ${styles.fas} fa-cog`}></i>CONFIGURING
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className={`nav-link ${styles.navLink}`}
                  id='nav-tab-2'
                  data-toggle='tab'
                  href='#tab-2'
                  role='tab'
                  aria-controls='tab-2'
                  aria-selected='false'
                >
                  <i className={`fas ${styles.fas} fa-binoculars`}></i>TRACKING
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className={`nav-link ${styles.navLink}`}
                  id='nav-tab-3'
                  data-toggle='tab'
                  href='#tab-3'
                  role='tab'
                  aria-controls='tab-3'
                  aria-selected='false'
                >
                  <i className={`fas ${styles.fas} fa-search`}></i>MONITORING
                </a>
              </li>
            </ul>

            <div className={`tab-content ${styles.tabContent}`} id='lenoTabsContent'>
              <div
                className={`tab-pane fade show active ${styles.tab1}`}
                id='tab-1'
                role='tabpanel'
                aria-labelledby='tab-1'
              >
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-4'>
                      <div className={`${styles.card} ${styles.leftPane} ${styles.first}`}>
                        <div className={`${styles.cardBody}`}>
                          <div className={styles.textWrapper}>
                            <h4 className={styles.cardTitle}>Goal Setting</h4>
                            <p>
                              Like any self improving process, everything starts
                              with setting your goals and committing to them
                            </p>
                          </div>
                          <div className={styles.cardIcon}>
                            <i className={`far fa-compass ${styles.far}`}></i>
                          </div>
                        </div>
                      </div>
                      <div className={`${styles.card} ${styles.leftPane}`}>
                        <div className={`${styles.cardBody}`}>
                          <div className={styles.textWrapper}>
                            <h4 className={styles.cardTitle}>Visual Editor</h4>
                            <p>
                            Chimpoon provides a well designed and ergonomic visual
                              editor for you to edit your notes and input data
                            </p>
                          </div>
                          <div className={styles.cardIcon}>
                            <i className={`far fa-file-code ${styles.far}`}></i>
                          </div>
                        </div>
                      </div>
                      <div className={`${styles.card} ${styles.leftPane}`}>
                        <div className={`${styles.cardBody}`}>
                          <div  className={styles.textWrapper}>
                            <h4 className={styles.cardTitle}>Refined Options</h4>
                            <p>
                              Each option packaged in the app's menus is
                              provided in order to improve your personal
                              development status
                            </p>
                          </div>
                          <div className={styles.cardIcon}>
                            <i className={`far fa-gem ${styles.far}`}></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-4'>
                      <img
                        className='img-fluid'
                        src={featuresIphone1}
                        alt='alternative'
                      />
                    </div>

                    <div className='col-lg-4'>
                      <div className={`${styles.card} ${styles.leftPane} ${styles.first}`}>
                        <div className={`${styles.cardBody}`}>
                          <div className={styles.cardIcon}>
                            <i className={`far fa-calender-check ${styles.far}`}></i>
                          </div>
                          <div className={styles.textWrapper}>
                            <h4 className={styles.cardTitle}>Calendar Input</h4>
                            <p>
                              Schedule your appointments, meetings and
                              periodical evaluations using the provided in-app
                              calendar option
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={`${styles.card} ${styles.leftPane}`}>
                        <div className={`${styles.cardBody}`}>
                          <div className={styles.cardIcon}>
                            <i className={`far fa-bookmark ${styles.far}`}></i>
                          </div>
                          <div className={styles.textWrapper}>
                            <h4 className={styles.cardTitle}>Easy Reading</h4>
                            <p>
                              Reading focus mode for long form articles, ebooks
                              and other materials which involve large text areas
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={`${styles.card} ${styles.leftPane}`} >
                        <div className={`${styles.cardBody}`}>
                          <div className={`${styles.cardIcon}`}>
                            <i className={`far fa-cube ${styles.far}`}></i>
                          </div>
                          <div className={styles.textWrapper}>
                            <h4 className={styles.cardTitle}>Good Foundation</h4>
                            <p>
                              Get a solid foundation for your self development
                              efforts. Try Chimpoon mobile app for any mobile
                              platform
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`tab-pane fade ${styles.tab2}`}
                id='tab-2'
                role='tabpanel'
                aria-labelledby='tab-2'
              >
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-4'>
                      <img
                        className='img-fluid'
                        src={featuresIphone2}
                        alt='alternative'
                      />
                    </div>

                    <div className='col-md-8'>
                      <div className={styles.textArea}>
                        <h3>Track Result Based On Your</h3>
                        <p>
                          After you've configured the app and settled on the
                          data gathering techniques you can not start the
                          information trackers and start collecting those
                          <a className='turquoise' href='#your-link'>
                            interesting details
                          </a>
                          . You can always change them.
                        </p>
                      </div>

                      <div className={styles.iconCardsArea}>
                        <div className={styles.card}>
                          <div className={styles.cardIcon}>
                            <i className={`fas fa-cube ${styles.fas}`}></i>
                          </div>
                          <div className={styles.cardBody}>
                            <h4 className={styles.cardTitle}>Good Foundation</h4>
                            <p>
                              Get a solid foundation for your self development
                              efforts. Try Chimpoon mobile app for any mobile
                              platform
                            </p>
                          </div>
                        </div>
                        <div className={styles.card}>
                          <div className={styles.cardIcon}>
                            <i className={`fas fa-bookmark ${styles.fas}`}></i>
                          </div>
                          <div className={styles.cardBody}>
                            <h4 className={styles.cardTitle}>Easy Reading</h4>
                            <p>
                              Reading focus mode for long form articles, ebooks
                              and other materials which involve large text areas
                            </p>
                          </div>
                        </div>
                        <div className={styles.card}>
                          <div className={styles.cardIcon}>
                            <i className={`fas fa-calednder-check ${styles.fas}`}></i>
                          </div>
                          <div className={styles.cardBody}>
                            <h4 className={styles.cardTitle}>Calendar Input</h4>
                            <p>
                              Schedule your appointments, meetings and
                              periodical evaluations using the provided in-app
                              calendar option
                            </p>
                          </div>
                        </div>
                        <div className={styles.card}>
                          <div className={styles.cardIcon}>
                            <i className={`far fa-file-code ${styles.far}`}></i>
                          </div>
                          <div className={styles.cardBody}>
                            <h4 className={styles.cardTitle}>Visual Editor</h4>
                            <p>
                            Chimpoon provides a well designed and ergonomic visual
                              editor for you to edit your notes and input data
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                 className={`tab-pane fade ${styles.tab3}`}
                id='tab-3'
                role='tabpanel'
                aria-labelledby='tab-3'
              >
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-8'>
                      <div className={styles.iconCardsArea}>
                        <div className={styles.card}>
                          <div className={styles.cardIcon}>
                            <i className={`far fa-calender-check ${styles.far}`}></i>
                          </div>
                          <div className={styles.cardBody}>
                            <h4 className={styles.cardTitle}>Calendar Input</h4>
                            <p>
                              Schedule your appointments, meetings and
                              periodical evaluations using the provided in-app
                              calendar option
                            </p>
                          </div>
                        </div>
                        <div className={styles.card}>
                          <div className={styles.cardIcon}>
                            <i className={`far fa-file-code ${styles.far}`}></i>
                          </div>
                          <div className={styles.cardBody}>
                            <h4 className={styles.cardTitle}>Visual Editor</h4>
                            <p>
                            Chimpoon provides a well designed and ergonomic visual
                              editor for you to edit your notes and input data
                            </p>
                          </div>
                        </div>
                        <div className={styles.card}>
                          <div className={styles.cardIcon}>
                            <i className={`fas fa-cube ${styles.fas}`}></i>
                          </div>
                          <div className={styles.cardBody}>
                            <h4 className={styles.cardTitle}>Good Foundation</h4>
                            <p>
                              Get a solid foundation for your self development
                              efforts. Try Chimpoon mobile app for any mobile
                              platform
                            </p>
                          </div>
                        </div>
                        <div className={styles.card}>
                          <div className={styles.cardIcon}>
                            <i className={`far fa-bookmark ${styles.far}`}></i>
                          </div>
                          <div className={styles.cardBody}>
                            <h4 className={styles.cardTitle}>Easy Reading</h4>
                            <p>
                              Reading focus mode for long form articles, ebooks
                              and other materials which involve large text areas
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className={styles.textArea}>
                        <h3>Monitoring Tools Evaluation</h3>
                        <p>
                          Monitor the evolution of your finances and health
                          state using tools integrated in Leno. The generated
                          real time reports can be filtered based on any
                          <a className='turquoise' href='#your-link'>
                            desired criteria
                          </a>
                          .
                        </p>
                      </div>
                    </div>

                    <div className='col-md-4'>
                      <img
                        className='img-fluid'
                        src={featuresIphone3}
                        alt='alternative'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Features;
