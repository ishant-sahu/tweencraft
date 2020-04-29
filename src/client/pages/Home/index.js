import React from 'react';
import { connect } from 'react-redux';
import { homeAction } from '../../actions';
import NavBar from '../../components/NavBar/';
import Headers from '../../components/Headers/';
import Testimonials from '../../components/Testimonials';
import Features from '../../components/Features';
import Preview from '../../components/Preview';
import Goals from '../../components/Goals';
import Screenshots from '../../components/Screenshots';
import Download from '../../components/Download';
import Statistics from '../../components/Statistics';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import VideoList from '../../components/VideoList';
import Characters from '../../components/Characters';

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
        {funnyStories && funnyStories.length > 0 ? (
          <VideoList
            heading={'Make Stories for Fun'}
            stories={funnyStories}
            type={'funny'}
          />
        ) : null}
        {commercialStories && commercialStories.length > 0 ? (
          <VideoList
            heading={'Make Stories to Engage Customers '}
            stories={commercialStories}
            type={'commercial'}
          />
        ) : null}
         <Preview />
         <Screenshots />
         <Characters />
        <Features />

       
        
        <Testimonials />
        
        {/* <Goals /> */}
        
        <Download />
        {/* <Statistics /> */}
        <Contact />
        <Footer />
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
