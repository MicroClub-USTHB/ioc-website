// styles
import storyStyle from './StoryContainer.module.scss';

interface Props {
  story: string,
  title: string,
  dayNumber: string
}

const StoryContainer = (props: Props) => {
  return (
    <div className={storyStyle.story_container_outer}>
      <div className={storyStyle.story_container_inner}>
        <h1 className={storyStyle.title_container}>
          <span className={storyStyle.title_number}>{props.dayNumber}</span>
          <span className={storyStyle.title}>{props.title}</span>
        </h1>
        <div className={storyStyle.story} dangerouslySetInnerHTML={{ __html: props.story + '<br /><br />' }}></div>
      </div>
    </div>
  )
}

export default StoryContainer;