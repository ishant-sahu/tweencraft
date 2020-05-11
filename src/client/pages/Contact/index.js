import React from 'react';
import { connect } from 'react-redux';
import { action } from '../../actions';
import ContactComponent from '../../components/Contact/';

class Contact extends React.Component {
  componentDidMount() {
    this.props.fetchSamples();
  }

  render() {
    return (
      <div>
        <ContactComponent />
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

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
