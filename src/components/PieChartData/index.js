import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';
import {
  Container,
  DataVisualization,
  CarouselGrid,
  CarouselInfo,
  DataTitle,
  DataMovies,
  DataTV,
} from './styles';

const data = {
	datasets: [{
		data: [27612, 11146],
		backgroundColor: [
		'#3F8CA9',
		'#79B39C',
		'rgba(255, 206, 86, 0.6)'
		],
		hoverBackgroundColor: [
		'#3F8CA9',
		'#79B39C',
		'rgba(255, 206, 86, 0.6)'
    ],
    borderColor: [
      '#57DCFF',
      '#A2ECC0',
      '#FFCE56'
    ]
  }],
  labels: [
		'Comics',
		'Series',
		'Characters'
	],
};

class PieChartData extends Component { 
  render() {
    return (
      <Container>
        <DataVisualization>
          <Pie data={data} options={{ legend: { display: false}}} />
        </DataVisualization>
        <CarouselGrid>
          <CarouselInfo>
            <DataTitle>Comics</DataTitle>
            <DataMovies>27,612</DataMovies>
          </CarouselInfo>
          <CarouselInfo>
            <DataTitle>Series</DataTitle>
            <DataTV>11,774</DataTV>
          </CarouselInfo>
        </CarouselGrid>
      </Container>
    );
  }
}

export default PieChartData;
