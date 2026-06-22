'use client';

import { Component, ReactNode, ErrorInfo } from 'react';
import { default as ErrorView } from '../Error/Error';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: string | null;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const message = errorInfo.componentStack?.split('\n')[1].trim();
    this.setState({
      hasError: true,
      error: error.toString() + ' ' + message,
    });
  }
  render() {
    if (this.state.hasError) {
      return (
        <ErrorView
          error={'Something went wrong. Please try again later.'}
          comment={'Error in ErrorBoundary component'}
        />
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
