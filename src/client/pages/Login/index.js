import React from 'react';
import { connect } from 'react-redux';
import { action } from '../../actions';
import LoginComponent from '../../components/Login/';

class Login extends React.Component {
  componentDidMount() {
   this.props.sendEvent();
  }

  render() {
    return (
      <div>
        <LoginComponent sendEvent={this.props.sendEvent}  />
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
