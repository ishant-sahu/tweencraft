import React from 'react';
import { connect } from 'react-redux';
import { action } from '../../actions';
import SamplesComponent from '../../components/Samples/';

class Samples extends React.Component {
  componentDidMount() {
    this.props.sendEvent();
  }

  render() {
    const data = [
     {
        _id: '5ebd20412f0c883ee025ac81',
        ad_id: 0,
        thumbnail_url: 'http://img.youtube.com/vi/-DJFKeKVbXM/0.jpg',
        youtube_url:
          'https://www.youtube.com/watch?v=-DJFKeKVbXM&feature=youtu.be',
        __v: 0,
        type: 'commercial',
      },
      {
        _id: '5ebd204a2f0c883ee025ac82',
        ad_id: 1,
        thumbnail_url: 'http://img.youtube.com/vi/Wo2NFbr8KCo/0.jpg',
        youtube_url:
          'https://www.youtube.com/watch?v=Wo2NFbr8KCo&feature=youtu.be',
        __v: 0,
        type: 'commercial',
      },
      {
        _id: '5ebd20512f0c883ee025ac83',
        ad_id: 2,
        thumbnail_url: 'http://img.youtube.com/vi/Q6qI1QSLJJw/0.jpg',
        youtube_url:
          'https://www.youtube.com/watch?v=Q6qI1QSLJJw&feature=youtu.be',
        __v: 0,
        type: 'commercial',
      },
      {
        _id: '5ebd20582f0c883ee025ac84',
        ad_id: 3,
        thumbnail_url: 'http://img.youtube.com/vi/Qp04EiVRa2w/0.jpg',
        youtube_url:
          'https://www.youtube.com/watch?v=Qp04EiVRa2w&feature=youtu.be',
        __v: 0,
        type: 'commercial',
      },
      {
        _id: '5ebd206e2f0c883ee025ac85',
        ad_id: 4,
        thumbnail_url: 'http://img.youtube.com/vi/mZT2AVQjfwE/0.jpg',
        youtube_url: 'https://www.youtube.com/watch?v=mZT2AVQjfwE',
        __v: 0,
        type: 'funny',
      },
      {
        _id: '5ebd207a2f0c883ee025ac86',
        ad_id: 5,
        thumbnail_url: 'http://img.youtube.com/vi/9oJ5VQ0A_Ms/0.jpg',
        youtube_url: 'https://www.youtube.com/watch?v=9oJ5VQ0A_Ms',
        __v: 0,
        type: 'funny',
      }
    ];

    return (
      <div>
        <SamplesComponent stories={data} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Samples);
