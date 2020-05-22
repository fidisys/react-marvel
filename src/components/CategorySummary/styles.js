import styled from 'styled-components';

export const SlickContainer = styled.div`
  width: 100%;
  position: relative;
  .slick-prev, .slick-next {
    width: 26px;
    height: 26px;
    z-index: 25;
    &:before {
      color: #ccc;
      font-size: 26px;
    }
  }
  .slick-prev.slick-disabled:before, .slick-next.slick-disabled:before {
    display: none;
  }
  .slick-list {
    overflow: visible;
  }
  .slick-slider {
    &:before {
      content: "";
      width: 75px;
      background-color: rgba(238,238,238,0);
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  &:before {
    background-image: linear-gradient(to right,rgba(238,238,238,0) 2px,#f5f8fa 30px);
    content: "";
    display: block;
    height: 100%;
    bottom: 0;
    top: 0;
    right: 30px;
    position: absolute;
    z-index: 1;
    -webkit-transform: translateX(100%);
    -ms-transform: translateX(100%);
    -o-transform: translateX(100%);
    transform: translateX(100%);
    // width: calc((100vw - 1170px + 60px)/2);
    width: 100px;
  }
`;