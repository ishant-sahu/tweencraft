import React from 'react';
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
import styles from './styles.scss';

class Home extends React.Component {
  render() {
    return (
      <div className={styles.Home}>
        <NavBar />
        <Headers />
        <Testimonials />
        <Features />
        <Preview />
        <Goals />
        <Screenshots />
        <Download />
        <Statistics />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
