import React from 'react';
import { Text } from '@epam/loveship';
import { FlexRow } from '@epam/uui-components';

export default function TodoHeader() {
  return (
    <div>
      <FlexRow
        size="24"
      >
        <Text
          font="sans-semibold"
          fontSize="16"
          lineHeight="24"
          size="48"
        >
          Text Header
        </Text>
      </FlexRow>
    </div>
  );
}
