import React from 'react';
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

  const qa_list: QAList = [
    {type: 'q', text: 'Is there a person on whom you think the majority of blame for the situation you find yourself in falls?'},
    {type: 'a', text: 'This is a stupid question.'},
    {type: 'q', text: 'Why do you say so?'},
    {type: 'q', text: 'Do you enjoy talking to yourself?'},
    {type: 'a', text: 'Not particularly.'},
  ]
  
  // adding indexes as ids now to use as react keys for the map function
  qa_list.map((item, index) => ({...item, id: index}));
  
  return (
    <section className={faqStyle.faq_section}>
      <h1 className={faqStyle.section_title}>Frequently Asked Questions</h1>
      <div className={faqStyle.qa_list}>
        { qa_list.map(item => item.type === 'q' ? <Question question={item.text} key={item.id} /> : <Answer answer={item.text} key={item.id} />) }
      </div>
    </section>
  );
}

export default FAQ;
