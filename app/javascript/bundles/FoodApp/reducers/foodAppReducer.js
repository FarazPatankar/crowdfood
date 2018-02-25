import { combineReducers } from 'redux';
import { FOOD_APP_NAME_UPDATE } from '../constants/foodAppConstants';

const name = (state = '', action) => {
  switch (action.type) {
    case FOOD_APP_NAME_UPDATE:
      return action.text;
    default:
      return state;
  }
};

const foodAppReducer = combineReducers({ name });

export default foodAppReducer;
