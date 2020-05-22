import React, { Component } from 'react';
import {
  Container,
} from './styles';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log('error')
    this.setState({
      hasError: true
    })
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Container>Sorry we are not supporting for your device.</Container>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
