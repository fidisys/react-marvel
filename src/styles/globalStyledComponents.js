import styled from 'styled-components';
import * as palette from '../styles/variables';

export const CategoryHeader = styled.div`
  width: 100%;
  padding-left: ${props => props.spacing ?  '50px' : '0px'};
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CategoryName = styled.h2`
  font-size: 24px;
  font-weight: bold;
  word-spacing: 4px;
  margin-bottom: 0px;
  color: ${palette.HEADER_TXT_COLOR}
  text-transform: uppercase;
  position: relative;
  background-color: ${palette.APP_BACKGROUND_COLOR};
  &:before {
    content: '';
    position: absolute;
    color: #ccc;
    font-size: 26px;
    height: 90px;
    width: 3px;
    background-color: ${palette.MENU_BORDER_COLOR};
    transform: rotate(45deg);
    top: -30px;
    left: 25px;
    z-index: -1;
  }
`;

export const DataVisualization = styled.div`
  width: 450px;
`;

export const CarouselGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 40px;
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