import {configureStore} from '@reduxjs/toolkit';
import {useReducer} from 'react';
//import userRedux from '../features/userSlice';

export default configureStore ({
  reducer: {
    user: useReducer,
  },
});
