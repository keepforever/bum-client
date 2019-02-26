import * as actionTypes from '../actions/actionTypes';


const initialState = {
    isAuth: false
};

const setAuthTrue = (state, action) => {
  console.log('hello setAuthTRUE reducer = ', '\n' )
  return {
    ...state,
    isAuth: true
  }
}

const setAuthFalse = (state, action) => {
  console.log('hello setAuthFALSE reducer = ', '\n' )
  return {
    ...state,
    isAuth: false
  }
}


// note: we always have a "type" property on any actions passed to reducer
const reducer = (state=initialState, action) => {
    switch (action.type) {
      case actionTypes.AUTH_SET_TRUE : return setAuthTrue(state, action)
      case actionTypes.AUTH_SET_FALSE : return setAuthFalse(state, action)
      default: return state;
    }
}

export default reducer;
