import React from 'react';

// styles
import displayStyle from './Display.module.scss';

// resources
import signin_bg from '../../../../resources/Signin1-min.png';
import SigninForm from './components/Form/SigninForm';


const Display = () => {
  return (
    <section className={displayStyle.display_container}>
      <img className={displayStyle.image_bg} src={signin_bg} alt="" />
      <div className={displayStyle.content_container}>
        <h1 className={displayStyle.title}>Sign In</h1>
        <SigninForm />
      </div>
    </section>
  );
}

export default Display;
