import styled from 'styled-components';

export const Container = styled.div`
  width: 190px;
  height: 240px;
  background: linear-gradient(to right,rgba(13,37,63,0.99) 0%,rgba(13,37,63,0.7) 100%);
  border-radius: 4px;
  color: #fff;
  transition: transform .25s cubic-bezier(0.33, 0.04, 0.63, 0.93);
  .img-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .card-img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      object-fit: cover;
      object-position: left;
    }
  }
  .meta-container {
    position: absolute;
    width: 100%;
    bottom: 0px;
    transition: opacity .25s ease-in,bottom .25s cubic-bezier(0.33, 0.04, 0.63, 0.93);
    opacity: 0;
    padding: 30px 10px 15px 10px;
    background-image: linear-gradient(rgba(12, 26, 40, 0), rgba(12, 26, 40, 0.12) 5px, rgba(12, 26, 40, 0.52) 24px, rgba(12, 26, 40, 0.79) 40px, rgb(12, 26, 40) 56px, rgb(12, 26, 40) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .card-title {
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 8px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: normal;
  }
  .card-description {
    font-size: 10px;
    font-weight: 500;
    margin-bottom: 12px;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: normal;
  }
  .view-card {
    font-size: 10px;
    border: 1px solid rgba(255, 255, 255, 0.75);
    padding: 2px 20px;
    border-radius: 2px;
    background-color: rgba(255, 255, 255, 0.1);
    &:hover {
      cursor: pointer;
    }
  }
  &:hover {
    cursor: grab;
    position: relative;
    transform: scale3d(1.1, 1.1, 1) translate3d(0, 0, 0) perspective(500px);
    border-radius: 5px;
    .meta-container {
      opacity: 0.99;
    }
  }
  @media (max-width: 500px) {
    width: 98%;
  }
`;