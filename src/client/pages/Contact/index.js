import React from 'react';
import { connect } from 'react-redux';
import { action } from '../../actions';
import ContactComponent from '../../components/Contact/';

class Contact extends React.Component {
  componentDidMount() {
    this.props.sendEvent();
  }

  render() {
    return (
      <div>
        <ContactComponent />
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

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
