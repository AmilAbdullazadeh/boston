import React from 'react';

export default function List(props) {
    const { test } = props
  return (
    <ul>
      {test.map((item) => (
        <li key={item?.id}>{item?.title}</li>
      ))}
    </ul>
  );
}
