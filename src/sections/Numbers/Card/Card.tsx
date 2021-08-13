import React from 'react';

// styles
import cardStyle from './Card.module.scss';

interface Props {
  Icon: any
  heading: string
  subHeading?: string
}

const Card: React.FC<Props> = (props) => {
  const { Icon, heading, subHeading } = props;
  return (
    <div className={cardStyle.card_container}>
      <Icon />
      <h1>{ heading }</h1>
      <h2>{ subHeading ?? null }</h2>
    </div>
  );
}

export default Card;
