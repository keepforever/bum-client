import { combineReducers }  from 'redux';
import auth from './auth';

export default combineReducers({
  auth,
})

// because we are NOT naming our export, we are free to
// rename this export 'rootReducer' at import in the App.js file.
