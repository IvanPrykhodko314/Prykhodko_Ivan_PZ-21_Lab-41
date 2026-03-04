import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './actions/itemActions';

const ItemList = () => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem('New Redux Item'));
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default ItemList;