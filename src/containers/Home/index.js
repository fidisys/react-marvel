import React, { Component } from 'react';
import { Collapse } from 'antd';
import { SummaryCards } from './styles';
import CarouselDetails from '../../components/CarouselDetails';
import CategoryTitle from '../../components/CategoryTitle';
import CategorySummary from '../../components/CategorySummary';

import { getAllCharactersAPI } from '../../utils/services/charactersAPI';
import { getAllComicsAPI } from '../../utils/services/comicsAPI';
import { getAllSeriesAPI } from '../../utils/services/seriesAPI';

const { Panel } = Collapse;

class Home extends Component {

  state = { loadingCharacters: true, allCharacters: [], loadingComics: true, allComics: [], loadingSeries: true, allSeries: [], offset: 0 };

  componentDidMount() {
    getAllCharactersAPI(
      this.state.offset,
      success => {
        if (success && success.data && success.data.results) {
          this.setState({ loadingCharacters: false, allCharacters: success.data.results });
        }
      }
    );
    getAllComicsAPI(
      this.state.offset,
      success => {
        if (success && success.data && success.data.results) {
          this.setState({ loadingComics: false, allComics: success.data.results });
        }
      }
    );
    getAllSeriesAPI(
      this.state.offset,
      success => {
        if (success && success.data && success.data.results) {
          this.setState({ loadingSeries: false, allSeries: success.data.results });
        }
      }
    );
  }

  render() {
    const { loadingCharacters, allCharacters, loadingComics, allComics, loadingSeries, allSeries } = this.state;
    return (
      <React.Fragment>
        <CarouselDetails />
        <SummaryCards>
          <Collapse
            bordered={false}
            defaultActiveKey={['1', '2', '3']}
            expandIconPosition="left"
          >
            <Panel header={<CategoryTitle categoryName="Characters" location="characters" isSpacing={"true"} />} key="3" >
              <CategorySummary {...this.props} categoryType="characters" loadedCards={allCharacters} loadingCards={loadingCharacters} />
            </Panel>
            <Panel header={<CategoryTitle categoryName="Comics" location="comics" isSpacing={"true"} />} key="1" >
              <CategorySummary {...this.props} categoryType="comics" loadedCards={allComics} loadingCards={loadingComics} />
            </Panel>
            <Panel header={<CategoryTitle categoryName="Series" location="series" isSpacing={"true"} />} key="2" >
              <CategorySummary {...this.props} categoryType="series" loadedCards={allSeries} loadingCards={loadingSeries} />
            </Panel>
          </Collapse>
        </SummaryCards>
      </React.Fragment>
    );
  }
}

export default Home;
