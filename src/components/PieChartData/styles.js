import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const DataVisualization = styled.div`
  width: 450px;
`;

export const CarouselGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  @media (max-width: 500px) {
    display: none;
  }
`;

export const CarouselInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const DataTitle = styled.div`
  font-size: 24px;
  line-height: 36px;
  color: #F5F8FA;
`;

export const DataMovies = styled.div`
  font-weight: bold;
  font-size: 40px;
  line-height: 60px;
  color: #57DCFF;
`;

export const DataTV = styled.div`
  font-weight: bold;
  font-size: 40px;
  line-height: 60px;
  color: #A2ECC0;
`;