import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store/store';  // Update the path as needed
import BottomTabNavigator from './app/Navigation/BottomTabNavigator';

const App = () => {
  return (
    <Provider store={store}>
        <BottomTabNavigator />
    </Provider>
  );
};

export default App;
