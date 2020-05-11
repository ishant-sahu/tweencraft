import React from 'react';
import { connect } from 'react-redux';
import { action } from '../../actions';
import LoginComponent from '../../components/Login/';

class Login extends React.Component {
  componentDidMount() {
    this.props.fetchSamples();
  }

  render() {
    return (
      <div>
        <LoginComponent />
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
