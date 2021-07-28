import React from 'react';
import { FlexRow } from '@epam/loveship';

import ActionButton from './ActionButton';

export default function Actions({ id, dispatch }) {
  return (
    <FlexRow vPadding="12" spacing="12">
      <ActionButton
        label="edit"
        color="sky"
        handleClick={() => dispatch({ type: 'edit_button_clicked', payload: id })}
      />
      <ActionButton label="delete" color="fire" handleClick={() => dispatch({ type: 'delete', payload: id })} />
    </FlexRow>
  );
}
