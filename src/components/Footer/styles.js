import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #0D253F;
  color: #fff;
  a {
    color: #fff;
    text-decoration: none;
    text-align: center;
    .company-name {
      color: #01B4E4;
    }
    &:hover {
      color: #fff;
      text-decoration: underline;
    }
  }
`;