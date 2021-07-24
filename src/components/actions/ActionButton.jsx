import React from 'react';
import { Button } from '@epam/loveship';

export default function ActionButton({ color = 'grass', label }) {
  return (

    <Button fill="light" color={color} caption={label} onClick={() => console.log(label)} />

  );
}
