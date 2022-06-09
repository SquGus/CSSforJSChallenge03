import { COLORS } from '../../constants';
/* eslint-disable no-unused-vars */
import React from 'react';
import VisuallyHidden from '../VisuallyHidden';
import styled from 'styled-components';

const ProgressBar = ({ value, size }) => {
  return (
    <WrapperBar role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
      <Progress value={value}></Progress>
    </WrapperBar>

  );
};

const WrapperBar = styled.div`
  width:100%;
  height:8px;
  background:${COLORS.transparentGray15};
`;

const Progress = styled.div`
  width:${p => p.value}%;
  height:8px;
  background:${COLORS.primary};
`;

export default ProgressBar;
