/* eslint-disable no-unused-vars */

import { COLORS } from '../../constants';
import React from 'react';
import VisuallyHidden from '../VisuallyHidden';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 24px;
  border-radius: 6px;
  overflow: hidden;
  padding: 3px;
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
`;

const Progress = styled.div`
  width: ${p => p.value}%;
  height: 100%;
  background: ${COLORS.primary};
  transition: width .3s;
  border-radius: ${p => p.value < 100 ? "4px 0 0 4px" : "4px"}
`;

const ProgressBar = ({ value, size }) => {

  return (
    <Wrapper value={value}>
      <Progress value={value}></Progress>
    </Wrapper>
  );
};

export default ProgressBar;
