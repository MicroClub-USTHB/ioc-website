import React from 'react';
import Display from './sections/Display/Display';

// styles
import loginStyle from './Signin.module.scss';

const Signin = () => {
  const dec_array = Array(9).fill(<div>IMPACT OF CODE IMPACT OF CODE IMPACT OF CODE</div>);
  return (
    <main className={loginStyle.container}>
      <div className={loginStyle.background_dec}>
        { dec_array }
      </div>
      <Display />
    </main>
  );
}

export default Signin;
