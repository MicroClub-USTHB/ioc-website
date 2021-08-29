import { useSelector } from 'react-redux';
import React from 'react';

// styles
import displayStyle from './Display.module.scss';

// resources
import signin_bg from '../../../../resources/Signin1-min.png';
import SigninForm from './components/Form/SigninForm';
import { RootState } from '../../../../redux/types';
import { LangType } from '../../../../common/Lang/french';


const Display = () => {
  const Lang = useSelector<RootState>(state => state.common.Lang) as LangType;
  return (
    <section className={displayStyle.display_container}>
      <img className={displayStyle.image_bg} src={signin_bg} alt="" />
      <div className={displayStyle.content_container}>
        <h1 className={displayStyle.title}>{Lang.signin_form_title}</h1>
        <SigninForm />
      </div>
    </section>
  );
}

export default Display;
