import React from 'react';
import { connect } from 'react-redux';
import { action } from '../../actions';
import ScriptComponent from '../../components/Script/';

class Script extends React.Component {
  componentDidMount() {
    //this.props.fetchSamples();
  }

  render() {
    return (
      <div>
        <ScriptComponent />
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

export default connect(mapStateToProps, mapDispatchToProps)(Script);
