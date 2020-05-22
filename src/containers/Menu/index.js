import React, { Component } from 'react';
import {
  Container,
  AppIcon,
  MenuList,
  MenuListItem,
} from './styles';
import Logo from "../../images/logo.svg";

class Menu extends Component {
  handleRoute (route) {
    this.props.history.push(route);
  }
  render() {
    const { location } = this.props;
    return (
      <Container>
        <AppIcon onClick={e => this.handleRoute('/home')}>
          <img alt="app-logo" src={Logo} />
        </AppIcon>
        <MenuList>
          <MenuListItem active={location.pathname === '/home' ? true : false} onClick={e => this.handleRoute('/home')}>Home</MenuListItem>
          <MenuListItem active={location.pathname === '/characters' ? true : false} onClick={e => this.handleRoute('/characters')}>Characters</MenuListItem>
          <MenuListItem active={location.pathname === '/comics' ? true : false} onClick={e => this.handleRoute('/comics')}>Comics</MenuListItem>
          <MenuListItem active={location.pathname === '/series' ? true : false} onClick={e => this.handleRoute('/series')}>Series</MenuListItem>
        </MenuList>
      </Container>
    );
  }
}

export default Menu;
