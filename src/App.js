import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HomePageActions from './actions';
import { Wrapper, UserProfile } from './styles';
import UserDetails from './userDetails';
import SelectedUser from './selectedUser';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedUserId: Number(),
      searchableUser: false,
      filteredUserList: [],
      searchedTerm: '',
    }
  }

  componentDidMount() {
    const { actions } = this.props;
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        actions.homeActions.fetchUserData(persons);
      })
  }

  handleActivityLinks = (event) => {
    const { actions } = this.props;
    const clickUser = event.target.closest('.selectUser');
    const targetUserId = clickUser.getAttribute('user-id');
    actions.homeActions.getUserDetailsById(targetUserId);
    this.setState({ selectedUserId : Number(targetUserId) });

  }

  searchUser = (event) => {
    const { userList } = this.props;
    let filterdList = userList.filter( user => user.name.toUpperCase().indexOf(event.target.value.toUpperCase()) >= 0);
    this.setState({
      searchableUser : event.target.value.length ? true : false,
      selectedUserId: Number(),
      filteredUserList: filterdList,
      searchedTerm: event.target.value,
    });
  }

  toggle = () => {
    this.setState({
      searchableUser : false,
      searchedTerm: '',
      selectedUserId: Number(),
    })
  }

  render() {
    const { selectedUserId, searchableUser, filteredUserList, searchedTerm } = this.state;
    const { userList, selectedUserDetails } = this.props;
    return (
      <Wrapper>
        <i className="fa fa-search fa-search search-icon"></i>
        <input type="text" name="searchBar" placeholder="search for user" value={searchedTerm} onChange={this.searchUser} />
        { searchableUser && <i className="fa fa-close close-icon" onClick={this.toggle}></i> }
        <h3 className='header'>Explore all users</h3>
        <UserProfile>
          { !searchableUser && (<ul className="list-unstyled userList" onClick={this.handleActivityLinks}>
            { userList.map(person => <UserDetails user={person} key={person.id} selectedUserId={selectedUserId} />)}
          </ul>
          )}
          { searchableUser && (<ul className="list-unstyled userList" onClick={this.handleActivityLinks}>
            { filteredUserList.map(person => <UserDetails user={person} key={person.id} selectedUserId={selectedUserId} animation />)}
          </ul>
          )}
          <div className="rightSection">
            { searchableUser && filteredUserList.length === 0 && (<p className="No_Result_Found"> No Result for {searchedTerm} </p>)}
            { userList.length !== 0 && !searchableUser &&  selectedUserId === 0 && (<p className="Empty_State"> Select any user from list </p>)}
            { searchableUser &&  selectedUserId === 0 && filteredUserList.length !== 0 && (<div className="Empty_State"> Select user from list </div>)}
            { selectedUserId !== 0 && ( <SelectedUser user={selectedUserDetails} /> )}
          </div>

        </UserProfile>
      </Wrapper>
    );
  }
}

App.defaultProps = {
  userList: [],
  selectedUserDetails: {},
};

App.propTypes = {
  actions: PropTypes.object.isRequired,
  userList: PropTypes.array.isRequired,
  selectedUserDetails: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  userList: state.userList,
  selectedUserDetails: state.selectedUserDetails,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    homeActions: bindActionCreators(HomePageActions, dispatch),
  },
});



export default connect(mapStateToProps, mapDispatchToProps)(App);
