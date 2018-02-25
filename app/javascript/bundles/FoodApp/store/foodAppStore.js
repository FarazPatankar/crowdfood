import { createStore } from 'redux';
import foodAppReducer from '../reducers/foodAppReducer';

const configureStore = (railsProps) => (
  createStore(foodAppReducer, railsProps)
);

export default configureStore;
