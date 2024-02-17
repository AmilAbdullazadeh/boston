import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../../actions';
import Display from '../../components/Display/Display';

export default function Counter() {
    const dispatch = useDispatch()

    const handleIncrement = () => {
      dispatch(increment());
    };

    const handleDecrement = () => {
      dispatch(decrement());
    };

  return (
    <>
      <Display />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}
