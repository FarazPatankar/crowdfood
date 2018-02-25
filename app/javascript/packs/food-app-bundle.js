import ReactOnRails from 'react-on-rails';

import FoodApp from '../bundles/FoodApp/startup/FoodApp';
// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  FoodApp
});
