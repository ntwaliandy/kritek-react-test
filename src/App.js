import React from 'react';
import { Provider } from 'react-redux';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <UserList />
        <UserForm />
      </div>
    </Provider>
  );
};

export default App;
