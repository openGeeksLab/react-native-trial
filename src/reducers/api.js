import { createReducer } from 'redux-act';
/*
a
■ https://www.mocky.io/v2/5b9751e5300000332a0bd52d
○ Data returned should be saved to a new redux store called user
*/
const initialState = {
  url: 'https://www.mocky.io/v2',
  headers: {
    Authorization: '',
  },
};

export default createReducer({

}, initialState);
