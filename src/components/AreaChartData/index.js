import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import {
  Container,
} from './styles';

import {
  DataVisualization,
  CarouselGrid,
  CarouselInfo,
  DataTitle,
  DataTV,
} from '../../styles/globalStyledComponents';

const data = {
  labels: ['2016', '2017', '2018', '2019', '2020'],
  datasets: [
    {
      label: 'Series Released',
      fill: true,
      lineTension: 0.1,
      backgroundColor: '#79B39C',
      borderColor: '#A2ECC0',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#A2ECC0',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#79B39C',
      pointHoverBorderColor: '#A2ECC0',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 76]
    }
  ]
};

 const options = {
   legend: { display: false},
   scales: {
    xAxes: [
      {
        gridLines: {zeroLineColor: '#ccc'},
        ticks: { fontColor: "#CCC", },
      }
    ],
    yAxes: [
      {
        gridLines: {zeroLineColor: '#ccc'},
        ticks: { fontColor: "#CCC", },
      }
    ],
   }};

class AreaChartData extends Component { 
  render() {
    return (
      <Container>
        <DataVisualization>
          <Line data={data} options={options} />
        </DataVisualization>
        <CarouselGrid>
        <CarouselInfo>
          <DataTitle>Series Released</DataTitle>
          <DataTV>11,774</DataTV>
        </CarouselInfo>
        </CarouselGrid>
      </Container>
    );
  }
}

export default AreaChartData;
