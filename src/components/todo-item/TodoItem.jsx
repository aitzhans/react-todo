import React from 'react';

export default function TodoItem(props) {
  const { name } = props;
  return (
    <li>
      {name}
    </li>
  );
}
