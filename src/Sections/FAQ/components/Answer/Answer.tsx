import React from 'react';

// styles
import answerStyle from './Answer.module.scss';

// resources
import answer1 from '../../../../resources/Answer1-min.png';

interface Props {
  answer: string
  key?: string | number
}

const Answer: React.FC<Props> = (props) => {
  const { answer, key } = props;
  return (
    <div className={answerStyle.answer_container} key={key}>
      <div className={answerStyle.answer}>{ answer }</div>
      <div className={answerStyle.respondant}>
        <img src={answer1} alt="" />
        <span>Answer</span>
      </div>
    </div>
  );
}

export default Answer;
