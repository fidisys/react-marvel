import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import Menu from '../../containers/Menu';
import Home from '../../containers/Home';
import Characters from '../../containers/Characters';
import Comics from '../../containers/Comics';
import Series from '../../containers/Series';
import Favourites from "../../components/Favourites";
import CardFullDetails from "../../containers/CardFullDetails";
import Footer from "../../components/Footer";

class Layout extends Component {  
  render() {
    return (
      <React.Fragment>
        <DndProvider backend={Backend}>
          <Menu {...this.props} />
          <Switch>
            <Route exact path="/home" render={props => <Home {...this.props} />} />} />
            <Route exact path="/comics" render={props => <Comics {...this.props} />} />
            <Route exact path="/comics/:comicname/:id" render={props => <CardFullDetails {...this.props} />} />
            <Route exact path="/series" render={props => <Series {...this.props} />} />
            <Route exact path="/series/:seriesname/:id" render={props => <CardFullDetails {...this.props} />} />
            <Route exact path="/characters" render={props => <Characters {...this.props} />} />
            <Route exact path="/characters/:charactername/:id" render={props => <CardFullDetails {...this.props} />} />
            <Redirect from="/" to="/home" />
          </Switch>
          <Favourites />
          <Footer />
				</DndProvider>
      </React.Fragment>
    );
  }
}

export default Layout;
