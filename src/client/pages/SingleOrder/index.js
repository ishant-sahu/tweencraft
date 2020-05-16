import React from 'react';
import { connect } from 'react-redux';
import { action } from '../../actions';
import SingleOrderComponent from '../../components/SingleOrder';

class SingleOrder extends React.Component {
  componentDidMount() {
    //this.props.fetchSamples();
  }

  render() {
    return (
      <div>
        <SingleOrderComponent />
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

export default connect(mapStateToProps, mapDispatchToProps)(SingleOrder);
