import React from 'react';
import Display from './components/Display/Display';

// styles
import signupStyle from './Signup.module.scss';

const Signup = () => {
  return (
    <main className={signupStyle.container}>
      <Display />
    </main>
  );
}

export default Signup;
