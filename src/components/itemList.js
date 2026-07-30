import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  {
    id: 1,
    name: 'Item 1',
    description: 'Description for Item 1'
  },
  {
    id: 2,
    name: 'Item 2',
    description: 'Description for Item 2'
  },
  {
    id: 3,
    name: 'Item 3',
    description: 'Description for Item 3'
  }
];

function ItemList() {
  return (
    <div className="item-list-container">
      <h1>Item List</h1>
      <ul className="item-list">
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/items/${item.id}`} className="item-link">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
