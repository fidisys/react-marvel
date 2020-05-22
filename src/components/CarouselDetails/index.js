import React from 'react';
import { Carousel  } from 'antd';
import { Container } from './styles';
import PieChartData from '../../components/PieChartData';
import BarChartData from '../../components/BarChartData';
import AreaChartData from '../../components/AreaChartData';

const CarouselDetails = () => {
  return (
    <Container>
      <Carousel autoplay effect="fade">
        <div className="carousel-item">
          <PieChartData />
        </div>
        <div className="carousel-items">
          <BarChartData />
        </div>
        <div className="carousel-items">
          <AreaChartData />
        </div>
      </Carousel>
    </Container>
  )
}

export default CarouselDetails;
