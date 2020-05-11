import React from 'react';
import styles from './styles.scss';
import { Link } from 'react-router-dom';
class OrdersComponent extends React.Component {
  render() {
    const orders = [
      {
        orderId: 192788645,
        amount: 588,
        advancePaid: 300,
        status: 'In work',
      },
      {
        orderId: 192788622,
        amount: 688,
        advancePaid: 400,
        status: 'Completed',
      },
    ];

    return (
      <div className={`${styles.orders}`}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 offset-lg-3'>
              <h2>YOUR ORDERS</h2>
              <div className={styles.orderBox}>
                {(orders || []).map((item, index) => {
                  return (
                    <table className={styles.order} key={index}>
                      <tbody>
                        <tr>
                          <td>Order Id</td>
                          <td>{item.orderId}</td>
                        </tr>
                        <tr>
                          <td>Amount</td>
                          <td> &#8377; {item.amount}</td>
                        </tr>
                        <tr>
                          <td>Advance Paid</td>
                          <td> &#8377; {item.advancePaid}</td>
                        </tr>
                        <tr>
                          <td>Order Status</td>
                          <td>{item.status}</td>
                        </tr>
                        <tr>
                          <td>
                            <Link to={`/order/${item.orderId}`}>View</Link>
                            <Link to={`/order/${item.orderId}`}>Edit</Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default OrdersComponent;
