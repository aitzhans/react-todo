import React, { useState } from 'react';
import {
  FlexRow, FlexCell, TextInput, Button
} from '@epam/loveship';

export default function TodoAddForm() {
  const [value, onValueChange] = useState('');

  return (
    <FlexRow width="auto" vPadding="24">
      <FlexCell minWidth="300" width="auto">
        <TextInput value={value} onValueChange={onValueChange} placeholder="Please type text" />
      </FlexCell>
      <Button color="grass" caption="Add Todo" onClick={() => console.log('added')} />
    </FlexRow>
  );
}
