import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { decrement, decrementWitchCheckingAction, increment } from '../../app/features/counter/actions';

const Redux = () => {
  let {count} = useSelector(state => state.counter)
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Menggunakan reducer</h1>
      <button onClick={() => dispatch({type:'DEC', value: 1})}>-</button>
      {' '}
      <span>{count}</span>
      {' '}
      <button onClick={() => dispatch({type:'INC', value: 1})}>+</button>

      <br />
      <br />
      <br />

      <h1>Menggunakan Action Creators</h1>
      <button onClick={() => dispatch(decrement(1))}>-</button>
      {' '}
      <span>{count}</span>
      {' '}
      <button onClick={() => dispatch(increment(1))}>+</button>

      <br />
      <br />
      <br />

      <h1>Menggunakan Action Creators Asyncronous redux-thunk</h1>
      <button onClick={() => dispatch(decrementWitchCheckingAction(1))}>-</button>
      {' '}
      <span>{count}</span>
      {' '}
      <button onClick={() => dispatch(increment(1))}>+</button>
    </div>
  );
}

export default Redux;