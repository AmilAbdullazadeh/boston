import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import List from '../List';
import {fetchTodos} from "../../slice/todosSlice";

export default function Display() {
  const { loading, items, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (loading) return <div>Loading ...</div>;
  if (error) return <div>{error}</div>;

  return items.length > 0 ? <List test={items} /> : 'No items found!';
}
