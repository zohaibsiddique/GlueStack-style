import { Provider } from 'react-redux';
import store from './store';
import React from 'react';
import Index from './index';

export default function App() {
  return <Provider store={store}>
      <Index/>
  </Provider>
  
}