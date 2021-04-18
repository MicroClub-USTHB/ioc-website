import React from 'react';
import InfoDisplay from '../../components/InfoDisplay/InfoDisplay';

// Style
import infoStyle from './Info.Module.scss';

// Images
import flowerImg from '../../media/infoPhoto1-min.png';
import apeImg from '../../media/infoPhoto2-min.png';
import vineDec from '../../media/infoDecoration1-min.png';
import treeDec from '../../media/infoDecoration2-min.png';

const Info = () => {
    return (
        <section className={infoStyle.section}>
            <img className={infoStyle.topLeftDec} src={treeDec} alt="" />
            <div className={infoStyle.shortDescription}>
                <h1 className={infoStyle.title}>What is IOC?</h1>
                <p className={infoStyle.description}>Eventing (also known as three day eventing or horse trials) is an equestrian event where a single horse and rider combine and compete against other competitors across the three disciplines of dressage, cross-country, and show jumping.</p>
            </div>
            <InfoDisplay
                left={false}
                title="Learn as you travel through the journey"
                description="Produced by Frederator Studios and Cartoon Network Studios, the series follows the adventures of a boy named Finn (voiced by Jeremy Shada) and his best friend and adoptive brother Jake (John DiMaggio)—a dog with the magical power to change size and shape at will."
                img={flowerImg}
                altText="picture of computer"
            />
            <InfoDisplay
                left={true}
                title="Code your way through an adventure"
                description="Adventure Time is an American fantasy animated television series created by Pendleton Ward for Cartoon Network."
                img={apeImg}
                altText="picture of computer"
            />
            <img className={infoStyle.bottomRightDec} src={vineDec} alt="" />
        </section>
    );
}

export default Info;
