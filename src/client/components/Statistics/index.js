import React from 'react';
import styles from './styles.scss';

class Statistics extends React.Component {
  componentDidMount() {
    if ($ && window) {
      let a = 0;
      $(window).scroll(function() {
        if ($('#counter').length) {
          // checking if CountTo section exists in the page, if not it will not run the script and avoid errors
          let oTop = $('#counter').offset().top - window.innerHeight;
          if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter-value').each(function() {
              let $this = $(this),
                countTo = $this.attr('data-count');
              $({
                countNum: $this.text()
              }).animate(
                {
                  countNum: countTo
                },
                {
                  duration: 2000,
                  easing: 'swing',
                  step: function() {
                    $this.text(Math.floor(this.countNum));
                  },
                  complete: function() {
                    $this.text(this.countNum);
                    //alert('finished');
                  }
                }
              );
            });
            a = 1;
          }
        }
      });
    }
  }
  render() {
    return (
      <div className={styles.statistics}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div id='counter' className={styles.counter}>
                <div className={styles.cell}>
                  <div
                    className={`counter-value ${styles.counterValue} number-count`}
                    data-count='231'
                  >
                    1
                  </div>
                  <p className={styles.counterInfo}>Happy Users</p>
                </div>
                <div className={styles.cell}>
                  <div
                    className={`counter-value ${styles.counterValue} number-count`}
                    data-count='85'
                  >
                    1
                  </div>
                  <p className={styles.counterInfo}>Issues Solved</p>
                </div>
                <div className={styles.cell}>
                  <div
                    className={`counter-value ${styles.counterValue} number-count`}
                    data-count='59'
                  >
                    1
                  </div>
                  <p className={styles.counterInfo}>Good Reviews</p>
                </div>
                <div className={styles.cell}>
                  <div
                    className={`counter-value ${styles.counterValue} number-count`}
                    data-count='127'
                  >
                    1
                  </div>
                  <p className={styles.counterInfo}>Case Studies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Statistics;
