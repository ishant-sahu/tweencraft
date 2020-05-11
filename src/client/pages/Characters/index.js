import React from 'react';
import { connect } from 'react-redux';
import { action } from '../../actions';
import CharactersComponent from '../../components/Characters/';

class Characters extends React.Component {
  componentDidMount() {
    this.props.fetchSamples();
  }

  render() {
    return (
      <div>
        <CharactersComponent />
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

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
