import styled from 'styled-components';
import BgImg from '../../images/carousel-img.png';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const CardThumbnail = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  overflow: hidden;
  &:after {
    content: '';
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background: linear-gradient(to right,rgba(13, 37, 63, 0.99) 0%,rgba(1, 9, 18, 0.9) 100%);
  }
  .placeholder-img {
    height: 100%;
    .card-img {
      width: 100%;
      min-height: 100vh;
      object-fit: cover;
      height: 100%;
    }
  }
`;

export const DetailsGrid = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 261px;
  z-index: 0;
  &:before {
    content: '';
    position: absolute;
    background-image: url(${BgImg});
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: -1;
    background-repeat: no-repeat;
  }
  .img-grid-cover {
    position: absolute;
    background-color: rgba(13, 37, 63, 0.9);
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
  }
  .image-grid-item {
    z-index: 0;
    img {
      min-height: 261px;
    }
  }
`;

export const CardInfo = styled.div`
  max-width: 900px;
  margin: 0px auto;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 0;
  .card-title {
    font-size: 40px;
    font-weight: bold;
    color: #fff;
    margin: 20px 0px;
    text-align: center;
  }
  .card-description {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 30px;
    text-align: center;
  }
  .availability-stats {
    width: 100%;
    margin-bottom: 20px;
    .ant-row {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .ant-col {
      min-width: 150px;
      min-height: 123px;
    }
  }
  .rating-details {
    min-width: 150px;
    height: 123px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
    background: #22374f;
    box-shadow: 0 1px 20px 0 rgba(0,0,0,.1);
    border-radius: 4px;
    padding: 20px;
    color: #fff;
    .rating-progress {
      font-size: 28px;
      font-weight: 500;
    }
    .rating-title {
      text-align: center;
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;