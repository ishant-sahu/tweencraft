import React from 'react';
import { connect } from 'react-redux';
import { action } from '../../actions';
import PricingComponent from '../../components/Pricing/';

class Pricing extends React.Component {
  componentDidMount() {
    this.props.sendEvent();
  }

  render() {
    return (
      <div>
        <PricingComponent />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { homeData: state.home };
};

const mapDispatchToProps = (dispatch) => ({
  sendEvent: () => dispatch(action.sendEvent()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pricing);
