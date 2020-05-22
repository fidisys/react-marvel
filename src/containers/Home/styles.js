import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const SummaryCards = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 50px 20px;
  .ant-collapse {
    background-color: transparent !important;
  }
  .ant-collapse-item {
    border-bottom-color: transparent !important;
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0px;
    }
    .ant-collapse-header {
      padding: 0px !important;
      .anticon {
        font-size: 16px !important;
        opacity: 0.6;
      }
    }
    .ant-collapse-content-box {
      padding: 16px 25px !important;
    }
  }
`;