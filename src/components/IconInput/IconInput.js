import { COLORS } from '../../constants';
import Icon from '../Icon';
import React from 'react';
import VisuallyHidden from '../VisuallyHidden';
import styled from 'styled-components';

const SIZES = {
  large: {
    iconSize: 24
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
  <Wrapper>
    <IconWrapper>
      <Icon id={icon} size={currSize.iconSize}></Icon>      
    </IconWrapper>
    <NativeInput placeholder={placeholder}></NativeInput>
  </Wrapper>);
};

const NativeInput = styled.input`
  border: none;
  padding-left: 40px;
  width: 100%;
  border: none;

  &:focus {
    border: none;
    outline: none;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
`;

const Wrapper = styled.div`
  border-bottom: 2px solid ${COLORS.black};
  padding-bottom: 8px;
  color: ${COLORS.gray700};
  
 
`;

export default IconInput;
