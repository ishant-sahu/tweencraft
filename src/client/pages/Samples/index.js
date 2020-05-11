import React from 'react';
import { connect } from 'react-redux';
import { action } from '../../actions';
import SamplesComponent from '../../components/Samples/';

class Samples extends React.Component {
  componentDidMount() {
    this.props.fetchSamples();
  }

  render() {
    const data = [
      {
        youtube_url: 'https://www.youtube.com/watch?v=mZT2AVQjfwE',
        thumbnail_path:
          'https://kalptestbucket.s3-us-west-2.amazonaws.com/images/sallu_bhai_aur_duniya_wale.jpg',
      },
      {
        youtube_url: 'https://www.youtube.com/watch?v=9oJ5VQ0A_Ms',
        thumbnail_path:
          'https://kalptestbucket.s3-us-west-2.amazonaws.com/images/sallu_bhai_aur_duniya_wale.jpg',
      },
      {
        youtube_url: 'https://www.youtube.com/watch?v=mZT2AVQjfwE',
        thumbnail_path:
          'https://kalptestbucket.s3-us-west-2.amazonaws.com/images/sallu_bhai_aur_duniya_wale.jpg',
      },
      {
        youtube_url: 'https://www.youtube.com/watch?v=9oJ5VQ0A_Ms',
        thumbnail_path:
          'https://kalptestbucket.s3-us-west-2.amazonaws.com/images/sallu_bhai_aur_duniya_wale.jpg',
      },
      {
        youtube_url: 'https://www.youtube.com/watch?v=mZT2AVQjfwE',
        thumbnail_path:
          'https://kalptestbucket.s3-us-west-2.amazonaws.com/images/sallu_bhai_aur_duniya_wale.jpg',
      },
      {
        youtube_url: 'https://www.youtube.com/watch?v=9oJ5VQ0A_Ms',
        thumbnail_path:
          'https://kalptestbucket.s3-us-west-2.amazonaws.com/images/sallu_bhai_aur_duniya_wale.jpg',
      },
      {
        youtube_url: 'https://www.youtube.com/watch?v=mZT2AVQjfwE',
        thumbnail_path:
          'https://kalptestbucket.s3-us-west-2.amazonaws.com/images/sallu_bhai_aur_duniya_wale.jpg',
      },
      {
        youtube_url: 'https://www.youtube.com/watch?v=9oJ5VQ0A_Ms',
        thumbnail_path:
          'https://kalptestbucket.s3-us-west-2.amazonaws.com/images/sallu_bhai_aur_duniya_wale.jpg',
      },
    ];

    return (
      <div >
        <SamplesComponent stories={data} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Samples);
