import React from 'react';
import { Provider } from 'react-redux';
import Counter from './pembahasan/counter'
import store from '../../src/app/features/store'

function Redux(props) {

  return (
    <div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default Redux;