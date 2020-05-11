import React from 'react';
import { connect } from 'react-redux';
import { action } from '../../actions';
import CallOfActionComponent from '../../components/CallOfAction/';

class CallOfAction extends React.Component {
  componentDidMount() {
    this.props.fetchSamples();
  }

  render() {
    return (
      <div>
        <CallOfActionComponent />
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

export default connect(mapStateToProps, mapDispatchToProps)(CallOfAction);
