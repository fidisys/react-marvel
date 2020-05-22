import React, { Component } from 'react';
import { Row, Col, message  } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import {
  Container,
  MetaContainer,
} from './styles';
import {
  CategoryHeader,
  CategoryName,
} from '../../styles/globalStyledComponents';

import LoadingCardDetails from "../../components/LoadingCardDetails";
import CharacterCard from "../../components/CharacterCard";
import LoaderSmall from "../../components/LoaderSmall";

import { CardsList } from "../../utils/sampleJson";

import { getAllCharactersAPI } from '../../utils/services/charactersAPI';

class Characters extends Component {
  state = {
    cardsData: [],
    firstPageLoad: true,
    loading: false,
    hasMore: true,
    total: 0,
    offset: 0,
    loadedCount: 0,
  };

  componentDidMount() {
    getAllCharactersAPI(
      this.state.offset,
      success => {
        if (success && success.data && success.data.results) {
          let { loadedCount, offset } = this.state;
          loadedCount = loadedCount + success.data.count;
          offset = loadedCount;
          this.setState({ firstPageLoad: false, cardsData: success.data.results, total: success.data.total, loadedCount, offset });
        }
      }
    );
  }

  handleInfiniteOnLoad = () => {
    let { cardsData, loadedCount, offset } = this.state;
    this.setState({
      loading: true,
    });
    if (cardsData.length === this.state.total) {
      message.success('All characters loaded');
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
    getAllCharactersAPI(
      this.state.offset,
      success => {
        if (success && success.data && success.data.results) {
          cardsData = cardsData.concat(success.data.results);
          loadedCount = loadedCount + success.data.count;
          offset = loadedCount;
          this.setState({ cardsData, loading: false, loadedCount, offset });
        }
      }
    );
  }

  handleCardRoute (route) {
    this.props.history.push(route);
  }

  render() {
    const { cardsData, loading, hasMore, total, firstPageLoad } = this.state;
    return (
      <Container>
        <CategoryHeader>
          <CategoryName>ALl Characters {total > 0 && `(${total})`}</CategoryName>
        </CategoryHeader>
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={this.handleInfiniteOnLoad}
          hasMore={!firstPageLoad && !loading && hasMore}
          useWindow={true}
        >
          <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16 }]}>
            {firstPageLoad ?
              CardsList.map((card, index) =>
                <Col className="gutter-row" xs={{span: 12}} sm={{span: 8}} md={{span: 6}} lg={{span: 4}} key={index} >
                  <LoadingCardDetails />
                </Col>
              ) :
              cardsData.map((card, index) =>
                <Col className="gutter-row" xs={{span: 12}} sm={{span: 8}} md={{span: 6}} lg={{span: 4}} key={index} onClick={e => this.handleCardRoute(`/characters/${card.name ? card.name.replace(/\W+(?!$)/g, "-") : card.title.replace(/\W+(?!$)/g, "-")}/${card.id}`)}>
                  <CharacterCard card={card} />
                </Col>
              )
            }
          </Row>
          {this.state.loading && this.state.hasMore && (
            <MetaContainer>
              <LoaderSmall />
            </MetaContainer>
          )}
          {!this.state.loading && !this.state.hasMore && (
            <MetaContainer>
              You’ve reached the end of the list
            </MetaContainer>
          )}
        </InfiniteScroll>
      </Container>
    );
  }
}

export default Characters;
