import React from 'react';
import { connect } from 'react-redux';
import { action } from '../../actions';
import OrdersComponent from '../../components/Orders';

class Orders extends React.Component {
  componentDidMount() {
   // this.props.fetchSamples();
  }

  render() {
    return (
      <div>
        <OrdersComponent />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { homeData: state.home };
};

const mapDispatchToProps = (dispatch) => ({
  fetchSamples: () => dispatch(action.fetchSamples()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
