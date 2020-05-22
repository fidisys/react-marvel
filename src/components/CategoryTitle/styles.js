import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const SeeMore = styled.div`
  a {
    font-size: 18px;
    font-weight: 500;
    color: ${palette.TEXT_LINK_COLOR};
    &:hover {
      color: ${palette.TEXT_LINK_COLOR};
      text-decoration: underline;
    }
  }
`;