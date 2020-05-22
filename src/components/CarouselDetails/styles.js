import styled from 'styled-components';
import BgImg from '../../images/carousel-img.png';

export const Container = styled.div`
  position: relative;
  width: 100%;
  &:before {
    content: '';
    position: absolute;
    background-image: url(${BgImg});
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: -1;
  }
  .ant-carousel {
    background-color: rgba(13, 37, 63, 0.8);
  }
  .ant-carousel .slick-slide {
    text-align: center;
    height: 350px;
    padding-top: 45px;
    line-height: 160px;
    overflow: hidden;
    @media (max-width: 500px) {
      height: 300px;
    }
  }
  
  .ant-carousel .slick-slide h3 {
    color: #fff;
  }
  .ant-carousel {
    .slick-dots-bottom {
      bottom: 25px;
    }
    .slick-dots {
      li {
        width: 24px;
        height: 5px;
        button {
          width: 24px;
          height: 5px;
          border-radius: 2px;
        }
        &.slick-active {
          width: 40px;
          button {
            width: 40px;
          }
        }
      }
    }
    .slick-dots li button:before {
      display: none;
    }
  }
  .carousel-item {
    height: 100%;
  }
`;