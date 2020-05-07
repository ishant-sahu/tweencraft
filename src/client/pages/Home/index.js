import React from 'react';
import { connect } from 'react-redux';
import { homeAction } from '../../actions';
import NavBar from '../../components/NavBar/';
import Headers from '../../components/Headers/';
import Contact from '../../components/Contact';

import styles from './styles.scss';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchStories();
  }

  render() {
    const { homeData } = this.props;
    let funnyStories = [];
    let commercialStories = [];
    if (homeData && homeData.data && homeData.data.length > 0) {
      (homeData.data || []).forEach((item) => {
        if (item.type === 'funny') {
          funnyStories = item.arr || [];
        }
        if (item.type === 'commercial') {
          commercialStories = item.arr || [];
        }
      });
    }
    return (
      <div className={styles.Home}>
        <NavBar />
        <Headers />

       
        {/* <Contact /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { homeData: state.home };
};

const mapDispatchToProps = (dispatch) => ({
  fetchStories: () => dispatch(homeAction.fetchStories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
