import React from 'react';
import { connect } from 'react-redux';
import { action } from '../../actions';
import HowItWorksComponent from '../../components/HowItWorks/';

class HowItWorks extends React.Component {
  componentDidMount() {
   this.props.sendEvent();
  }

  render() {
  
    return (
      <div >
        <HowItWorksComponent />
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

export default connect(mapStateToProps, mapDispatchToProps)(HowItWorks);
