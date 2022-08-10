import { configureStore } from '@reduxjs/toolkit'
import slicereducer from './Slice'
import { combineReducers } from 'redux';

// export default const store = configureStore({
//   reducer: {
//     testSlice: slicereducer
//   },
// })

const rootReducer = combineReducers({
    testSlice: slicereducer
  });

  export default rootReducer;