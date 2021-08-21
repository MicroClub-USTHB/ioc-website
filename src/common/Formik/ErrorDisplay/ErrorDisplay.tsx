import React from 'react';
import { ErrorProps } from '../FormTypes';

const ErrorDisplay: React.FC<ErrorProps> = (props) => {
  const { errorMessage, className } = props;
  return <div className={className}>{ errorMessage }</div>;
}

export default ErrorDisplay;
