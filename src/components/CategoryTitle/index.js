import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
  SeeMore,
} from './styles';
import {
  CategoryHeader,
  CategoryName,
} from '../../styles/globalStyledComponents';

class CategoryTitle extends Component {  
  render() {
    const { categoryName, isSpacing } = this.props;
    return (
      <CategoryHeader spacing={isSpacing}>
        <CategoryName>{categoryName}</CategoryName>
        <SeeMore><Link to={`/${this.props.location}`}>See All</Link></SeeMore>
    </CategoryHeader>
    );
  }
}

export default CategoryTitle;
