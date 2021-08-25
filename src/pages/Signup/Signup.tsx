import React from 'react';
import Display from './components/Display/Display';

// styles
import signupStyle from './Signup.module.scss';

const Signup = () => {
  const dec_array = Array(9).fill(<div>IMPACT OF CODE IMPACT OF CODE IMPACT OF CODE</div>);
  return (
    <main className={signupStyle.container}>
      <div className={signupStyle.background_dec}>
        { dec_array }
      </div>
      <Display />
    </main>
  );
}

export default Signup;
