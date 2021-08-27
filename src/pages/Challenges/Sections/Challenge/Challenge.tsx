import { RouteComponentProps } from 'react-router-dom';
import { useGetDaysQuery } from '../../../../redux/api/backend';

// components
import StoryContainer from '../components/StoryContainer/StoryContainer';
import SubmitContainer from '../components/SubmitContainer/SubmitContainer';
import ChallengeContainer from '../components/ChallengeContainer/ChallengeContainer';

// styles
import challengeStyle from './Challenge.module.scss';
import { DayLinkPassedState } from '../../../../types/Day';

const Challenge = (props: RouteComponentProps) => {
  const { number: dayNumber, day } = (props.location.state as DayLinkPassedState);
  const { data } = useGetDaysQuery(null);

  let story = '',
    content = '',
    example = '',
    title = '';

  if (data !== undefined) {
    content = data![Number(dayNumber) - 1].content.english[day].content;
    story = data![Number(dayNumber) - 1].content.english[day].story;
    example = data![Number(dayNumber) - 1].content.english[day].example ?? '';
    title = data![Number(dayNumber) - 1].title ?? '';
  }

  return (
    <section className={challengeStyle.container}>
      <div className={challengeStyle.left_container}>
        <StoryContainer story={story} title={title} dayNumber={String(dayNumber)} />
        <SubmitContainer dayNumber={String(dayNumber)} />
      </div>
      <ChallengeContainer challenge={content} example={example} />
    </section>
  );
}

export default Challenge;
