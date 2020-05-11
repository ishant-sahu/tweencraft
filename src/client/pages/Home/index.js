import React from 'react';
import { connect } from 'react-redux';
import { action } from '../../actions';
import Headers from '../../components/Headers/';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchStories();
  }

  render() {
    // const { homeData } = this.props;
    // if (homeData && homeData.data && homeData.data.length > 0) {
    //   (homeData.data || []).forEach((item) => {
    //     if (item.type === 'funny') {
    //       funnyStories = item.arr || [];
    //     }
    //     if (item.type === 'commercial') {
    //       commercialStories = item.arr || [];
    //     }
    //   });
    // }
    return (
      <div >
        <Headers />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { homeData: state.home };
};

const mapDispatchToProps = (dispatch) => ({
  fetchStories: () => dispatch(action.fetchStories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
