import React from 'react';
import { useDrag } from 'react-dnd'
import { Container } from './styles';
import ImgPlaceholder from '../../images/img-placeholder.svg';

const CharacterCard = (props) => {
  const [{ isDragging }, drag] = useDrag({
    item: { card: props.card, type: 'card' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0.4 : 1;
  const { card } = props;
  return (
    <Container ref={drag} style={{ opacity }}>
      <div className="img-container">
        <img className="card-img" src={card.thumbnail.path ? `${card.thumbnail.path}`+'.'+`${card.thumbnail.extension}` : ImgPlaceholder } />
      </div>
      <div className="meta-container">
        <h5 className="card-title">{card.name}</h5>
        <p className="card-description">{card.description ? card.description : 'Card description not available for this card..'}</p>
        <div className="view-card">View Details</div>
      </div>
    </Container>
  )
}

export default CharacterCard;
