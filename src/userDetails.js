import React, { Component } from 'react';

class UserDetails extends Component {

  render() {
    const { user, selectedUserId, animation } = this.props;

    return (
      <li className={ selectedUserId === user.id ? 'active selectUser' : 'selectUser'} user-id={user.id}>
        <span className={ animation ? 'fadeInUp animatedFadeInUp animatedText' : null}> {user.name} </span>
      </li>
    );
  }
}

export default UserDetails;
