import React from 'react';

// styles
import answerStyle from './Answer.module.scss';

// resources
import answer1 from '../../../../resources/Answer1-min.png';

interface Props {
  answer: string
}

const Answer: React.FC<Props> = (props) => {
  const { answer } = props;
  return (
    <div className={answerStyle.answer_container}>
      <div className={answerStyle.answer}>{ answer }</div>
      <div className={answerStyle.respondant}>
        <img src={answer1} alt="" />
        <span>Answer</span>
      </div>
    </div>
  );
}

export default Answer;
