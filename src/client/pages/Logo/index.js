import React from 'react';
import { connect } from 'react-redux';
import { action } from '../../actions';
import LogoComponent from '../../components/Logo/';

class Logo extends React.Component {
  componentDidMount() {
    this.props.fetchSamples();
  }

  render() {
    return (
      <div>
        <LogoComponent />
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

export default connect(mapStateToProps, mapDispatchToProps)(Logo);
