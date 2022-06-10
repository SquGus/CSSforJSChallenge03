import { COLORS } from '../../constants';
import Icon from '../Icon';
import React from 'react';
import VisuallyHidden from '../VisuallyHidden';
import styled from 'styled-components';

const SIZES = {
  large: {
    iconSize: 24,
    fontSize: 18/16,
    borderSize: 2,
    padding: 36
  },
  small: {
    iconSize: 16,
    fontSize: 14/16,
    borderSize: 1,
    padding: 24
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {

  const currSize = SIZES[size]
  
  return (
  <Wrapper style={{ '--width': width + 'px'}}>
    <NativeInput placeholder={placeholder} size={currSize}></NativeInput>
    <IconWrapper style={{ '--height': currSize.iconSize + 'px'}}>
      <Icon id={icon} size={currSize.iconSize}></Icon>      
    </IconWrapper>
  </Wrapper>);
};

const NativeInput = styled.input`
  border: none;
  width: 100%;
  font-size: ${p=>p.size.fontSize}rem;
  padding-top: 8px;
  padding-bottom: 4px;
  padding-left: ${p=>p.size.padding}px;
  border-bottom: ${p=>p.size.borderSize}px solid ${COLORS.black};
  color: inherit;
  font-weight: 700;

  &:focus {
    outline-offset: 2px;
  }

  &:hover {
    color: ${COLORS.black};
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--height);
  pointer-events: none;

  ${NativeInput}:hover + & {
    color: ${COLORS.black};
  } 
`;

const Wrapper = styled.div`
  color: ${COLORS.gray700};
  position: relative;
  width: var(--width);
`;

export default IconInput;
