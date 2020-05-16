import React from 'react';
import { connect } from 'react-redux';
import { action } from '../../actions';
import VideoInformationComponent from '../../components/VideoInformation/';

class VideoInformation extends React.Component {
  componentDidMount() {
    //this.props.fetchSamples();
  }

  render() {
    return (
      <div>
        <VideoInformationComponent />
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

export default connect(mapStateToProps, mapDispatchToProps)(VideoInformation);
