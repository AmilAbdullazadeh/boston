import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from '../../actions';
import List from '../List';

export default function Display() {
  const count = useSelector((state) => state.counter.count);
  const { loading, items, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (loading) return <div>Loading ...</div>
  if (error) return <div>{ error }</div>

  return <List test={items} />;
}
