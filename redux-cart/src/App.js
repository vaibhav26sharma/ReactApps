import React from 'react';
// components
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
// items
import cartItems from './cart-items';
// redux stuff
import { createStore } from 'redux';
import reducer from './reducer';

//react-redux=> Provider - wraps app
// connect=> used in components
import { Provider } from 'react-redux';

//1st arg=> reducer
//2nd arg=> initial store to initialize ui for first time
//const store = createStore(reducer, initialStore);
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  // cart setup
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
