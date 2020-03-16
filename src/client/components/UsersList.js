import React, { Component } from 'react';
import { connect } from 'react-redux';
import { usersAction } from '../actions';

class UsersList extends Component {
  componentDidMount() {
    //this.props.fetchUsers();
  }

  renderUsers() {
    return (this.props.users || []).map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }
  render() {
    return (
      <div>
        List of users
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { users: state.users };
};

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(usersAction.fetchUsers())
  });

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
