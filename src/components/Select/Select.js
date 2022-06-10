import { COLORS } from '../../constants';
import Icon from '../Icon';
import React from 'react';
import { getDisplayedValue } from './Select.helpers';
import styled from 'styled-components';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationSelect >
        hello world
      </PresentationSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
`;
const PresentationSelect = styled.div`
/* change:
- hover
- focus
** padding right with the arrow for selector does not move
*/
  /*Text styles*/
  font-weight: 400;
  font-size: (16 / 16) rem;
  color: ${COLORS.gray700};
  /* Select Container */
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  border-radius: 8px;

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }

`;

export default Select;
