import React from 'react';
import Display from './sections/Display/Display';

// styles
import loginStyle from './Signin.module.scss';

const Signin = () => {
  return (
    <main className={loginStyle.container}>
      <Display />
    </main>
  );
}

export default Signin;
