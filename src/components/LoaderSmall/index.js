import React from 'react';
import { Icon } from 'antd';
import { Container } from './styles';

const LoaderSmall = () => {
  return (
    <Container>
      <Icon type="loading" /> Loading more...
    </Container>
  )
}

export default LoaderSmall;
