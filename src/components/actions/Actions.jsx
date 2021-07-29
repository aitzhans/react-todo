import React from 'react';
import { FlexRow } from '@epam/loveship';

import ActionButton from './ActionButton';
import { ACTIONS_TYPES } from '../consts/consts';

export default function Actions({ id, dispatch }) {
  return (
    <FlexRow vPadding="12" spacing="12">
      <ActionButton
        label="edit"
        color="sky"
        handleClick={() => dispatch({ type: ACTIONS_TYPES.EDIT_BUTTON_CLICKED, payload: id })}
      />
      <ActionButton
        label="delete"
        color="fire"
        handleClick={() => dispatch({ type: ACTIONS_TYPES.DELETE, payload: id })}
      />
    </FlexRow>
  );
}
