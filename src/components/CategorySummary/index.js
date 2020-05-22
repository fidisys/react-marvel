import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  SlickContainer,
} from './styles';

import CardDetails from "../../components/CardDetails";
import LoadingCardDetails from "../../components/LoadingCardDetails";
import CharacterCard from "../../components/CharacterCard";
import ComicsCard from "../../components/ComicsCard";
import SeriesCard from "../../components/SeriesCard";

import { CardsList } from "../../utils/sampleJson";

class CategorySummary extends Component {
  constructor() {
    super();
    this.state = { slidesView: 5 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
  }
  updateWindowDimensions() {
    if (window.innerWidth > 1225) {
      this.setState({ slidesView: 5 });
    } else if (window.innerWidth > 950) {
      this.setState({ slidesView: 4 });
    } else if (window.innerWidth > 700) {
      this.setState({ slidesView: 3 });
    } else if (window.innerWidth > 500) {
      this.setState({ slidesView: 2 });
    } else {
      this.setState({ slidesView: 1 });
    }
  }
  handleCardRoute (route) {
    this.props.history.push(route);
  }
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: this.state.slidesView,
      slidesToScroll: this.state.slidesView
    };
    const { loadingCards, loadedCards, categoryType } = this.props;
    return (
      <SlickContainer>
        <Slider {...settings}>
          {loadingCards ?
            CardsList.map((card, index) =>
              <div key={index}>
                <LoadingCardDetails />
              </div>
            ) :
            loadedCards.map((card, index) =>
              <div key={index} onClick={e => this.handleCardRoute(`/${this.props.categoryType}/${card.name ? card.name.replace(/\W+(?!$)/g, "-") : card.title.replace(/\W+(?!$)/g, "-")}/${card.id}`)}>
                {categoryType === 'characters' && <CharacterCard card={card} />}
                {categoryType === 'comics' && <ComicsCard card={card} />}
                {categoryType === 'series' && <SeriesCard card={card} />}
              </div>
            )
          }
        </Slider>
      </SlickContainer>
    );
  }
}

export default CategorySummary;
