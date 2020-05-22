import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import {
  Container,
} from './styles';

import {
  DataVisualization,
  CarouselGrid,
  CarouselInfo,
  DataTitle,
  DataMovies,
} from '../../styles/globalStyledComponents';

const data = {
  labels: ['2016', '2017', '2018', '2019', '2020'],
  datasets: [
    {
      label: 'Comics Publised',
      backgroundColor: '#3F8CA9',
      borderColor: '#57DCFF',
      borderWidth: 1,
      hoverBackgroundColor: '#3F8CA9',
      hoverBorderColor: '#57DCFF',
      data: [[0, 205], 255, 305, 350, 255]
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

class BarChartData extends Component { 
  render() {
    return (
      <Container>
        <DataVisualization>
          <Bar data={data} options={options} />
        </DataVisualization>
        <CarouselGrid>
        <CarouselInfo>
          <DataTitle>Comics Publised</DataTitle>
          <DataMovies>27,612</DataMovies>
        </CarouselInfo>
        </CarouselGrid>
      </Container>
    );
  }
}

export default BarChartData;
