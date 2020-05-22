import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const Container = styled.div`
  width: 100%;
  padding: 20px 20px 0px;
  color: ${palette.WHITE_COLOR};
  background-color: ${palette.APP_MENU_BACKGROUND_COLOR};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AppIcon = styled.div`
  min-width: 95px;
  min-height: 50px;
  margin-bottom: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export const MenuList = styled.ul`
  width: 100%;
  min-height: 38px;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
  margin: 0px;
`;

export const MenuListItem = styled.li`
  font-size: 16px;
  text-transform: uppercase;
  padding: 5px 20px;
  border-bottom: 4px solid;
  border-radius: 2px;
  border-bottom-color: ${props => props.active ?  `${palette.MENU_BORDER_COLOR}` : "transparent"};
  &:hover {
    cursor: pointer;
    color: ${palette.MENU_BORDER_COLOR};
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 5px 10px;
  }
`;