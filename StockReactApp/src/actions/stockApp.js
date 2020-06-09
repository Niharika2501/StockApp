/*import uuod from 'uuid';
export const addStock=(
    { 
        stockSymbol='',
    bidPrice='',
    askPrice='',
    eventTime=''
    }={}
)=>(
    {
        type:'SET_STOCK_INFO',
        stock:{
            id:uuid(),
            stockSymbol,
            bidPrice,
            askPrice,
            eventTime,
        }
    }
);*/

import * as actions from '../actionType';
import { REQUEST, SUCCESS, FAILURE, createAction } from '../utils/reduxUtil';

export const getStocklist = {
  request: () => createAction(actions.getStocklist[REQUEST]),
  success: data => createAction(actions.getStocklist[SUCCESS], { data }),
  failure: status => createAction(actions.getStocklist[FAILURE], { status })
};
