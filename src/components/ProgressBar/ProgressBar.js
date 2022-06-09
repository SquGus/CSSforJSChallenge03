import { COLORS } from '../../constants';
/* eslint-disable no-unused-vars */
import React from 'react';
import VisuallyHidden from '../VisuallyHidden';
import styled from 'styled-components';

const SIZES = {
  small:{
    height: 8
  },
  medium:{
    height: 12
  },
  large:{
    height: 16    
  }
}

const ProgressBar = ({ value, size }) => {
  const currentSize = SIZES[size];
  
  return (
    <WrapperBar currentSize = {currentSize} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
      <Progress value={value}></Progress>
    </WrapperBar>

  );
};

const WrapperBar = styled.div`
  width: 100%;
  height: ${p => p.currentSize.height}px;
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  border-radius: 4px;
`;

const Progress = styled.div`
  width: ${p => p.value}%;
  height: 100%;
  background: ${COLORS.primary};
  border-top-left-radius: 4px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 4px;
`;

export default ProgressBar;
