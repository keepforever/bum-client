import * as actionTypes from '../actions/actionTypes';


const initialState = {
    isAuth: false
};

const setAuthTrue = (state, action) => {
  console.log('hello setAuthTrue reducer = ', '\n' )
  return {
    ...state,
    isAuth: true
  }
}

// note: we always have a "type" property on any actions passed to reducer
const reducer = (state=initialState, action) => {
    switch (action.type) {
      case actionTypes.AUTH_SET_TRUE : return setAuthTrue(state, action)
      default: return state;
    }
}

export default reducer;
