import React, { Component } from 'react';

class SelectedUser extends Component {

  render() {
    const { user } = this.props;
    return (
      <div className="displayUser" >
        <h3 className='title'> {user.name}</h3>
        <p> <span className='focus'> Company : </span> {user.company.name} </p>
        <p> <span className='focus'> Email : </span> {user.email} </p>
        <p> <span className='focus'> Contact no : </span> {user.phone} </p>
        <p> <span className='focus'> Website : </span> {user.website} </p>
        <div>
          <h4 className='address_section focus'>Address: </h4>
          <span> {user.address.city}, </span>
          <span> {user.address.street}, </span>
          <span> {user.address.zipcode} </span>
        </div>
      </div>
    )
}
}
export default SelectedUser;
