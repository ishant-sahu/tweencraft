import React from 'react';
import styles from './styles.scss';
import { Link } from 'react-router-dom';
class SingleOrderComponent extends React.Component {
  render() {
    const item = {
      orderId: 192788645,
      amount: 588,
      advancePaid: 300,
      status: 'In work',
      typeOfBusiness: 'ABCD',
      nameOfBusiness: 'PRQ Corporation',
      characters: 'Nikki,Tom',
      logoPlacement: 'Top Right',
    };

    return (
      <div className={`${styles.singleOrder}`}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 offset-lg-3'>
              <h2>ORDER </h2>
              <div className={styles.orderBox}>
                <table className={styles.order}>
                  <tbody>
                  <tr>
                      <td>Order Id</td>
                      <td>{item.orderId}</td>
                    </tr>
                    <tr>
                      <td>Type of Business</td>
                      <td>{item.typeOfBusiness}</td>
                    </tr>
                    <tr>
                      <td>Name Of Business</td>
                      <td> &#8377; {item.nameOfBusiness}</td>
                    </tr>
                    <tr>
                      <td>Advance Paid</td>
                      <td> &#8377; {item.advancePaid}</td>
                    </tr>
                    <tr>
                      <td>Status</td>
                      <td>{item.status}</td>
                    </tr>
                    <tr>
                      <td>Characters</td>
                      <td>{item.characters}</td>
                    </tr>
                    <tr>
                      <td>Logo Placement</td>
                      <td>{item.logoPlacement}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SingleOrderComponent;
