import React from 'react';

// styles
import numbersStyle from './Numbers.module.scss';

// resources
import numbers1 from '../../resources/Numbers1-min.png';

// icons
import {
  UilGift,
  UilBackpack,
  UilCalendarAlt
} from '@iconscout/react-unicons';
import Card from './Card/Card';

const Numbers = () => {
  return (
    <section className={numbersStyle.section_container}>
      <h1 className={numbersStyle.section_title}>Our Numbers</h1>
      <div className={numbersStyle.holder_container}>
        <div className={numbersStyle.cards_holder}>
          <Card
            Icon={UilGift}
            heading="100.000DZD"
            subHeading="Gifts to the top winners"
          />
          <div className={numbersStyle.card_pair}>
            <Card
              Icon={UilBackpack}
              heading="14 Challenges"
            />
            <Card
              Icon={UilCalendarAlt}
              heading="7 Days"
            />
          </div>
        </div>
        <img className={numbersStyle.bg_image} src={numbers1} alt="" />
      </div>
    </section>
  );
}

export default Numbers;
