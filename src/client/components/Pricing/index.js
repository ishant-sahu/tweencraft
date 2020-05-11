import React from 'react';
import styles from './styles.scss';
class PricingComponent extends React.Component {
  render() {
    return (
      <div id='contact' className={`${styles.pricing}`}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2>PRICING</h2>
              <div className={`${styles.pricingWrapper}`}>
                <h4>Price per 1 minute video</h4>
                <div className={styles.note}>
                  <div>- 2 revisions allowed free.</div>
                  <div>
                    - After 2 revisions, &#8377; 100 per revision will be charged.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.flexWrapper}>
          <div className={styles.tableWrapper}>
            <h6>You provide the script for the video</h6>
            <table>
              <tbody>
                <tr>
                  <td>Advanced amount (not refundable)</td>
                  <td>&#8377; 300 </td>
                </tr>
                <tr>
                  <td>After video completion</td>
                  <td>&#8377; 588 </td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>&#8377; 888 </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.tableWrapper}>
            <h6>We develop the script</h6>
            <table>
              <tbody>
                <tr>
                  <td>Advanced amount (not refundable)</td>
                  <td>&#8377; 400 </td>
                </tr>
                <tr>
                  <td>After video completion</td>
                  <td>&#8377; 800 </td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>&#8377; 1200 </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default PricingComponent;
