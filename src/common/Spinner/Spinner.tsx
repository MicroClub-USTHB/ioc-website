import React from 'react';

// styles
import spinnerStyle from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={spinnerStyle.loader}></div>
  );
}

export default Spinner;
