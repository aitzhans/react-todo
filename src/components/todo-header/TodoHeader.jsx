import React from 'react';
import { Text, FlexRow } from '@epam/loveship';

export default function TodoHeader() {
  return (
    <FlexRow>
      <Text
        font="sans-semibold"
        fontSize="18"
      >
        <h1 style={{ margin: 0 }}>Todo List</h1>
      </Text>
    </FlexRow>
  );
}
