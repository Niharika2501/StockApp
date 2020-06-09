import { REQUEST, SUCCESS, FAILURE, createReducer } from '../utils/reduxUtil';
import { combineReducers } from 'redux';
import * as types from '../actionType';
export const initialState = {
  stock: [],
  isFetching: false
};

const stockReducer= createReducer(initialState, {
    [types.getStocklist[REQUEST]](state) {
        return {
         // ...state,
          stock:state.stock,
          isFetching: true
        };
      },
      [types.getStocklist[SUCCESS]]( state,action) {
        return {
          stock: action.payload.data,
          isFetching: false
        };
      },
      [types.getStocklist[FAILURE]](state) {
        return {  
        };
      }
    });

    const rootReducer = combineReducers({
      stockInfo:stockReducer
    })

    export default rootReducer;