import React from 'react';

// styles
import displayStyle from './Display.module.scss';

// resources
import signup_bg from '../../../../resources/Signup1-min.png';
import SignupForm from './components/SignupForm/SignupForm';

const Display = () => {
  return (
    <section className={displayStyle.display_container}>
      <img className={displayStyle.image_bg} src={signup_bg} alt='' />
      <div className={displayStyle.content_container}>
        <h1 className={displayStyle.title}>Sign Up</h1>
        <SignupForm />
      </div>
    </section>
  );
}

export default Display;
