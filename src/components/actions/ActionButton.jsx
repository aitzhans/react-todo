import React from 'react';
import { Button } from '@epam/loveship';

export default function ActionButton({
  color = 'grass', label, handleClick
}) {
  return (

    <Button fill="light" color={color} caption={label} onClick={handleClick} />

  );
}
