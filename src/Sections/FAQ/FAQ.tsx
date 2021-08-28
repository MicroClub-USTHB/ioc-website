import React from 'react';
import { useSelector } from 'react-redux';
import { LangType } from '../../common/Lang/french';
import { RootState } from '../../redux/types';
import Answer from './components/Answer/Answer';
import Question from './components/Question/Question';

// styles
import faqStyle from './FAQ.module.scss';

type QAList = Array<{
  type: string
  text: string
  id?: number
}>
const FAQ = () => {
  const Lang = useSelector<RootState>(state => state.common.Lang) as LangType;
  const qa_list: QAList = Lang.faq_section_qa;
  
  // adding indexes as ids now to use as react keys for the map function
  qa_list.map((item, index) => ({...item, id: index}));
  
  return (
    <section className={faqStyle.faq_section}>
      <h1 className={faqStyle.section_title}>{Lang.faq_section_title}</h1>
      <div className={faqStyle.qa_list}>
        { qa_list.map(item => item.type === 'q' ? <Question question={item.text} key={item.id} /> : <Answer answer={item.text} key={item.id} />) }
      </div>
    </section>
  );
}

export default FAQ;
