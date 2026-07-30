import React from 'react';
import { useParams, Link } from 'react-router-dom';

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

function ItemDetail() {
  const { id } = useParams();
  const item = items.find(item => item.id === parseInt(id));

  if (!item) {
    return (
      <div className="item-detail-container">
        <h1>Item Not Found</h1>
        <Link to="/" className="back-link">← Back to List</Link>
      </div>
    );
  }

  return (
    <div className="item-detail-container">
      <h1>{item.name}</h1>
      <p className="item-description">{item.description}</p>
      <Link to="/" className="back-link">← Back to List</Link>
    </div>
  );
}

export default ItemDetail;
