import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  background: #DCDCDC;

  .search-icon {
    position: relative;
    top: 2px;
    left: 31px;
    color: grey;
  }

  .close-icon {
    position: relative;
    right: 23px;
    color: grey;
    cursor: pointer;
  }
  input {
    padding: 6px 40px;
    width: 25%;
    height: 34px;
    font-size: 14px;
    border: 1px solid lightgray;
    border-radius: 4px;
    margin: 20px 0px;
  }

  input:focus {
    outline-offset: -4px;
  }

  .header {
    margin: 14px 16px;
    color: #666;
    font-size: 25px;
    font-weight: normal;
  }
`
export const UserProfile = styled.div`

  display: flex;

  .list-unstyled {
    padding-left: 0;
    list-style: none;
    margin: 0px;
  }


  .rightSection {
    width: 100%;
    margin: 16px;
    height: inherit;
    display: flex;
  }

  .displayUser {
    margin-left: 50px;
    color: #777;
  }

  .title {
    color: #444;
    font-size: 22px;
  }

  .address_section {
    display: inline-block;
    margin-top: 0px;
  }

  .No_Result_Found {
    font-size: 24px;
    color: #A9A9A9;
    margin: auto;
  }

  .Empty_State {
    font-size: 24px;
    color: #A9A9A9;
    margin: auto;
  }

  .selectUser {
    margin: 0px 16px;
    width: 35vh;
    cursor: pointer;
    font-size: 20px;
    color: #00B5D5;
    padding: 14px;
  }

  .selectUser:hover {
    background: lightblue;
  }

  .active {
    background: lightblue;
  }
`;
