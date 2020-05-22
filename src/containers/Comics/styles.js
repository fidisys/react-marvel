import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1275px;
  margin: auto;
  padding: 50px 20px;
`;

export const MetaContainer = styled.div`
  margin: 40px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadMoreBtn = styled.div`
  font-size: 14px;
  padding: 10px 60px;
  background: #0D253F;
  color: #fff;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }
`;