import React from 'react';
import { Container } from './styles';
import ImgPlaceholder from '../../images/img-placeholder.svg';

const LoadingCardDetails = () => {
  return (
    <Container>
      <div className="img-container">
        <img alt="img-placeholder" src={ImgPlaceholder} />
        <div>Loading...</div>
      </div>
    </Container>
  )
}

export default LoadingCardDetails;
