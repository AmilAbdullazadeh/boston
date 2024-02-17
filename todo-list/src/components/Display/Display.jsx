import React from 'react';
import { useSelector } from 'react-redux';

export default function Display() {
  const count = useSelector((state) => state.counter.count);

  return (
      <div>{ count }</div>
  )
}
