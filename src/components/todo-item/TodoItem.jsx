import React from 'react';
import { Checkbox, FlexRow } from '@epam/loveship';

export default function TodoItem({ label, isDone }) {
  return (
    <FlexRow vPadding="12" spacing="12">
      <Checkbox size="18" label={label} value={isDone} onValueChange={() => console.log('checkbox')} />
    </FlexRow>
  );
}
