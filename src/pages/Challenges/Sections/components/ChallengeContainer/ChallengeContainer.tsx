import { UilClipboardNotes } from '@iconscout/react-unicons'


// styles
import challengeStyle from './ChallengeContainer.module.scss';

const ChallengeContainer = (props: { challenge: string, example: string }) => {
  return (
    <div className={challengeStyle.challenge_container_outer}>
      <div className={challengeStyle.challenge_container_inner}>
        <h1 className={challengeStyle.title_container}>
          <span className={`${challengeStyle.title_number} ${challengeStyle.title_icon}`}><UilClipboardNotes /></span>
          <span className={challengeStyle.title}>Task</span>
        </h1>
        <div className={challengeStyle.task} dangerouslySetInnerHTML={{ __html: props.challenge + (props.example && `<br /><br />${props.example}`) + '<br /><br /><br /><br />' }}></div>
      </div>
    </div>
  )
}

export default ChallengeContainer;