import { FlexRow } from '@epam/loveship';
import React from 'react';

import ActionButton from './ActionButton';

// const onAction = (action) => {
//   console.log(action);
// };

export default function Actions() {
  return (
    <FlexRow vPadding="12" spacing="12">
      <ActionButton label="edit" color="sky" />
      <ActionButton label="delete" color="fire" />
    </FlexRow>

  );
}
