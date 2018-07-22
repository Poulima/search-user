import {
  FETCH_USER_DATA,
  GET_USER_DETAILS_BY_ID,
  GET_USER_DETAILS_BY_SEARCH
} from './constants';

const initialState = {
  userList : [],
  selectedUserDetails : {}
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_DATA: {
      return {
        ...state,
        userList: action.payload
      };
    }
    case GET_USER_DETAILS_BY_ID: {
      const selectedUserDetails = state.userList.find( user =>  user.id == action.payload);// eslint-disable-line 

        return {
          ...state,
          selectedUserDetails: selectedUserDetails
        };
    }
    case GET_USER_DETAILS_BY_SEARCH: {
      const userList = state.userList.slice();
      let filterdList;
      if(action.payload.length) {
        filterdList = userList.filter( user => user.name.indexOf(action.payload) >= 0);
      }

      return {
        ...state,
        userList: filterdList
      };
    }
    default:
      return state;
  }
}

export default userReducer;
