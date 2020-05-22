import React from 'react';
import { useDrag } from 'react-dnd'
import { Container } from './styles';
import ImgPlaceholder from '../../images/img-placeholder.svg';

const CardDetails = () => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'card' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0.4 : 1
  return (
    <Container ref={drag} style={{ opacity }}>
      <div className="img-container">
        <img alt="img-placeholder" src={ImgPlaceholder} />
      </div>
      <div className="meta-container">
        <h5 className="card-title">Card Title</h5>
        <p className="card-description">Card description with details in specific goes here..</p>
        <div className="view-card">View Card</div>
      </div>
    </Container>
  )
}

export default CardDetails;
