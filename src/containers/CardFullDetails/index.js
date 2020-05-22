import React, { Component } from 'react';
import { matchPath } from 'react-router'
import { Row, Col } from 'antd';
import {
  Container,
  CardThumbnail,
  DetailsGrid,
  CardInfo,
} from './styles';
import ImgPlaceholder from '../../images/img-placeholder.svg';

import { getCharacterDetailsAPI } from '../../utils/services/charactersAPI';
import { getComicDetailsAPI } from '../../utils/services/comicsAPI';
import { getSeriesDetailsAPI } from '../../utils/services/seriesAPI';

import Loader from '../../components/Loader';

class CardFullDetails extends Component {

  state = { loading: true, cardData: {} };

  componentDidMount() {
    if (this.props && this.props.history && this.props.history.location.pathname && this.props.history.location.pathname) {
      const pathName = this.props.history.location.pathname;
      if (pathName.indexOf("characters") > -1) {
        const match = matchPath(this.props.history.location.pathname, {
          path: '/characters/:charactername/:id',
          exact: true,
          strict: false
        })
        getCharacterDetailsAPI(
          match.params.id,
          success => {
            if (success && success.data && success.data.results) {
              this.setState({ loading: false, cardData: success.data.results[0] });
            }
          }
        );
      }
      if (pathName.indexOf("comics") > -1) {
        const match = matchPath(this.props.history.location.pathname, {
          path: '/comics/:comicname/:id',
          exact: true,
          strict: false
        })
        getComicDetailsAPI(
          match.params.id,
          success => {
            if (success && success.data && success.data.results) {
              this.setState({ loading: false, cardData: success.data.results[0] });
            }
          }
        );
      }
      if (pathName.indexOf("series") > -1) {
        const match = matchPath(this.props.history.location.pathname, {
          path: '/series/:seriesname/:id',
          exact: true,
          strict: false
        })
        getSeriesDetailsAPI(
          match.params.id,
          success => {
            if (success && success.data && success.data.results) {
              this.setState({ loading: false, cardData: success.data.results[0] });
            }
          }
        );
      }
    }
  }

  render() {
    const { loading, cardData } = this.state;
    return (
      <Container>
        <CardThumbnail>
          <div className="placeholder-img">
            {loading || (!cardData.thumbnail) ?
              <img className="card-img" alt="img-placeholder" src={ImgPlaceholder} /> :
              <img className="card-img" src={cardData.thumbnail.path ? `${cardData.thumbnail.path}/portrait_uncanny`+'.'+`${cardData.thumbnail.extension}` : ImgPlaceholder } />
            }
          </div>
        </CardThumbnail>
        <DetailsGrid>
          <div className="img-grid-cover">
          </div>
          <div className="image-grid-item">
            {loading || (!cardData.thumbnail) ?
              <img className="card-img" alt="img-placeholder" src={ImgPlaceholder} /> :
              <img className="card-img" src={cardData.thumbnail.path ? `${cardData.thumbnail.path}/landscape_incredible`+'.'+`${cardData.thumbnail.extension}` : ImgPlaceholder } />
            }
          </div>
        </DetailsGrid>        
        {loading ?
          <Loader /> :
          <CardInfo>
            <h2 className="card-title">{cardData.name ? cardData.name : cardData.title}</h2>
            <p className="card-description">{cardData.description ? cardData.description : 'Description not available.'}</p>
            <div className="availability-stats">
              <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                {(cardData.comics && cardData.comics.available && cardData.comics.available > 0) ?
                  <Col className="gutter-row" xs={{span: 12}} sm={{span: 8}} md={{span: 6}} lg={{span: 6}} >
                    <div className="rating-details">
                      <div className="rating-progress">
                        {cardData.comics.available}
                      </div>
                      <h6 className="rating-title">Comics Available</h6>
                    </div>
                  </Col> : ''
                }
                {(cardData.series && cardData.series.available && cardData.series.available > 0) ?
                  <Col className="gutter-row" xs={{span: 12}} sm={{span: 8}} md={{span: 6}} lg={{span: 6}} >
                    <div className="rating-details">
                      <div className="rating-progress">
                        {cardData.series.available}
                      </div>
                      <h6 className="rating-title">Series Available</h6>
                    </div>
                  </Col> : ''
                }
                {(cardData.stories && cardData.stories.available && cardData.stories.available > 0) ?
                  <Col className="gutter-row" xs={{span: 12}} sm={{span: 8}} md={{span: 6}} lg={{span: 6}} >
                    <div className="rating-details">
                      <div className="rating-progress">
                        {cardData.stories.available}
                      </div>
                      <h6 className="rating-title">Stories Available</h6>
                    </div>
                  </Col> : ''
                }
                {(cardData.events && cardData.events.available && cardData.events.available > 0) ?
                  <Col className="gutter-row" xs={{span: 12}} sm={{span: 8}} md={{span: 6}} lg={{span: 6}} >
                    <div className="rating-details">
                      <div className="rating-progress">
                        {cardData.events.available}
                      </div>
                      <h6 className="rating-title">Events Available</h6>
                    </div>
                  </Col> : ''
                }
              </Row>
            </div>
          </CardInfo>
        }
      </Container>
    );
  }
}

export default CardFullDetails;
