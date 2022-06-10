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
        {displayedValue}
        <IconWrapper>
          <Icon id='chevron-down'></Icon>
        </IconWrapper>
      </PresentationSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  height: 24px;
  margin: auto;
`;

const NativeSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
const PresentationSelect = styled.div`
  /*Text styles*/
  font-weight: 400;
  font-size: (16 / 16) rem;
  color: ${COLORS.gray700};
  /* Select Container */
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }

  ${NativeSelect}:focus + & {
    outline: 2px solid ${COLORS.black};
  }
`;

export default Select;
