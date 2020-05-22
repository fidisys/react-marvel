import styled from 'styled-components';

export const Container = styled.div`
  width: 150px;
  height: 150px;
  font-size: 34px;
  position: fixed;
  bottom: 0px;
  right: 50px;
  z-index: 100;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, .1);
  transform: translateY(-20%);
  animation: ${props => props.addingToFav ?  'MoveUpDown 1.5s linear infinite' : ''};
  @keyframes MoveUpDown {
    0%, 100% {
      bottom: 0px;
    }
    50% {
      bottom: 20px;
    }
  }
  .fav-container {
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .fav-details {
    position: relative;
    width: 55px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, .2);
    margin-bottom: 5px;
    &:hover {
      cursor: pointer;
    }
  }
  .fav-placeholder {
    font-size: 12px;
    line-height: 1.2;
    text-align: center;
    color: #bbb;
    padding: 5px 15px;
  }
  .anticon {
    margin-top: 12px;
  }
  .ant-badge {
    position: absolute;
    top: 0px;
    right: 12px;
    .ant-scroll-number-only {
      p {
        line-height: 20px;
      }
    }
  }
  .anticon-heart {
    svg path {
      fill: rgb(236, 29, 36);
    }
  }
  &:hover {
    cursor: copy;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;