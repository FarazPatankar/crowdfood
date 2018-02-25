/* eslint-disable import/prefer-default-export */

import { FOOD_APP_NAME_UPDATE } from '../constants/foodAppConstants';

export const updateName = (text) => ({
  type: FOOD_APP_NAME_UPDATE,
  text,
});
