import { COLORS } from '../../constants';
import Icon from '../Icon';
import React from 'react';
import { getDisplayedValue } from './Select.helpers';
import styled from 'styled-components';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <WrapperSelect value={value} onChange={onChange}>
      {children}
    </WrapperSelect>
  );
};

const WrapperSelect = styled.select`
/* change:
- hover
- focus
** padding right with the arrow for selector does not move
*/
  /*Text styles*/
  font-weight: 400;
  font-size: 16px;
  color: ${COLORS.gray700};
  /* Select Container */
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  border: none;
  border-radius: 8px;

  &:hover {
    color: ${COLORS.black};
  }

`;

export default Select;
