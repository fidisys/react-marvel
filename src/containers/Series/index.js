import React, { Component } from 'react';
import { Row, Col, message, Pagination } from 'antd';
import {
  Container,
  MetaContainer,
} from './styles';
import {
  CategoryHeader,
  CategoryName,
} from '../../styles/globalStyledComponents';

import LoadingCardDetails from "../../components/LoadingCardDetails";
import SeriesCard from "../../components/SeriesCard";
import LoaderSmall from "../../components/LoaderSmall";

import { CardsList } from "../../utils/sampleJson";

import { getAllSeriesAPI } from '../../utils/services/seriesAPI';

class Series extends Component {
  state = {
    cardsData: [],
    firstPageLoad: true,
    loading: false,
    hasMore: true,
    total: 0,
    offset: 0,
    loadedCount: 0,
    currentPage: 1,
  };

  componentDidMount() {
    getAllSeriesAPI(
      this.state.offset,
      success => {
        if (success && success.data && success.data.results) {
          let { loadedCount, offset } = this.state;
          loadedCount = loadedCount + success.data.count;
          offset = loadedCount + 1;
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
    if (offset === this.state.total) {
      message.success('All series loaded');
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
    getAllSeriesAPI(
      this.state.offset,
      success => {
        if (success && success.data && success.data.results) {
          cardsData = cardsData.concat(success.data.results);
          loadedCount = loadedCount + success.data.count;
          offset = loadedCount + 1;
          this.setState({ cardsData, loading: false, loadedCount, offset });
        }
      }
    );
  }

  onChange = (page, pageSize) => {
    const offsetCalc = (page - 1) * pageSize;
    this.setState({
      loading: true,
      currentPage: page
    });
    getAllSeriesAPI(
      offsetCalc,
      success => {
        if (success && success.data && success.data.results) {
          this.setState({ cardsData: success.data.results, loading: false });
        }
      }
    );
  };

  handleCardRoute (route) {
    this.props.history.push(route);
  }

  render() {
    const { cardsData, loading, hasMore, total, firstPageLoad } = this.state;
    return (
      <Container>
        <CategoryHeader>
          <CategoryName>ALl Series {total > 0 && `(${total})`}</CategoryName>
        </CategoryHeader>
          <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16 }]}>
            {(firstPageLoad || loading) ?
              CardsList.map((card, index) =>
                <Col className="gutter-row" xs={{span: 12}} sm={{span: 8}} md={{span: 6}} lg={{span: 4}} key={index} >
                  <LoadingCardDetails />
                </Col>
              ) :
              cardsData.map((card, index) =>
                <Col className="gutter-row" xs={{span: 12}} sm={{span: 8}} md={{span: 6}} lg={{span: 4}} key={index} onClick={e => this.handleCardRoute(`/series/${card.name ? card.name.replace(/\W+(?!$)/g, "-") : card.title.replace(/\W+(?!$)/g, "-")}/${card.id}`)}>
                  <SeriesCard card={card} />
                </Col>
              )
            }
          </Row>
            <MetaContainer>
              <Pagination disabled={loading || firstPageLoad} defaultCurrent={1} current={this.state.currentPage} total={total} showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`} pageSize={40} onChange={this.onChange} />
            </MetaContainer>
      </Container>
    );
  }
}

export default Series;
