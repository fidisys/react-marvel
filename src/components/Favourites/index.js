import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { Icon, Tooltip, Badge, Drawer, Card, Empty, message  } from 'antd';
import { Container } from './styles';
import ImgPlaceholder from '../../images/img-placeholder.svg';

let favCount = 0;
let favouriteCards = [];
function handleOnDrop(item) {
  if (item.type === 'card') {
    let storedCards = favouriteCards;
    storedCards.push(item.card);
    favouriteCards = storedCards.filter((a, b) => favouriteCards.indexOf(a) === b);
    if (favCount === favouriteCards.length) {
      message.warning('Already added to favourites');
    } else {
      message.success('Added to favourites');
    }
    favCount = favouriteCards.length;
  }
}

const { Meta } = Card;

const Favourites = () => {
  const [drawerVisible, setVisible] = useState(false);
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'card',
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    drop: (item) => handleOnDrop(item)
  })
  const isActive = canDrop && isOver
  let addingToFav = false;
  if (isActive) {
    addingToFav = false;
  } else if (canDrop) {
    addingToFav = true;
  }
  console.log(favouriteCards,'favouriteCards');
  return (
    <Container ref={drop} addingToFav={addingToFav}>
      <div className="fav-container">
        <div className="fav-details" onClick={() => setVisible(true)}>
          <Tooltip placement="top" title="Click here to view your favourite cards">
            <Badge count={favCount} style={{ backgroundColor: '#EC1D24' }}>
              <span className="head-example" />
            </Badge>
            <Icon type="heart" theme="twoTone" twoToneColor="#EC1D24" />
          </Tooltip>
        </div>
        <div className="fav-placeholder">Drop your favourites here</div>
      </div>
      <Drawer
          title={<div className="custom-title"><Icon type="heart" />Favourites {favouriteCards.length > 0 && `(${favouriteCards.length})`}</div>}
          placement="right"
          closable={false}
          onClose={() => setVisible(false)}
          visible={drawerVisible}
        >
          {favouriteCards.map((card, index) =>
            <Card
              hoverable={false}
              style={{ width: 210 }}
              cover={<img alt={card.name || card.title} src={card.thumbnail.path ? `${card.thumbnail.path}`+'.'+`${card.thumbnail.extension}` : ImgPlaceholder } />}
            >
              <Meta title={card.name || card.title} description={card.description ? card.description : 'Card description not available for this card..'} />
            </Card>
          )}
          {favouriteCards.length < 1 &&
            <div style={{ textAlign: 'center' }}>
              <Empty description="No Favourites" />
            </div>
          }
        </Drawer>
    </Container>
  )
}

export default Favourites;
