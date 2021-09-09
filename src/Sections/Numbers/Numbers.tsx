import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/types";
import { LangType } from "../../common/Lang/french";

// styles
import numbersStyle from "./Numbers.module.scss";
//animation
import { useSpring, animated } from "react-spring";
// icons
import { UilGift, UilBackpack, UilCalendarAlt, UilAward } from "@iconscout/react-unicons";
import Card from "./Card/Card";

const Numbers = () => {
    const Lang = useSelector<RootState>((state) => state.common.Lang) as LangType;
    const [active, setActive] = useState(0);
    const { x } = useSpring({ config: { duration: 800 }, x: active });

    useEffect(() => {
        const id = setTimeout(() => {
            setActive((active + 1) % 6);
        }, 800);
        return () => clearTimeout(id);
    }, [active]);
    return (
        <section id="Card" className={numbersStyle.section_container}>
            <h1 title={Lang.numbers.title} className={numbersStyle.section_title}>
                {Lang.numbers.title}
            </h1>
            <div className={numbersStyle.cards_holder}>
                <svg id="visual" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <animated.path
                        d={x.to({
                            range: [0, 5, 2, 1],
                            output: [
                                "M82.5 -99.4C112.2 -92.1 145 -74.9 151.1 -50.4C157.2 -26 136.6 5.9 115.9 27.8C95.2 49.7 74.3 61.6 55 69.4C35.7 77.2 17.8 80.8 -10.2 94.8C-38.2 108.8 -76.4 133.3 -101.8 127.5C-127.1 121.7 -139.7 85.5 -156.2 47.7C-172.8 9.8 -193.4 -29.9 -179.8 -54.3C-166.2 -78.7 -118.4 -87.9 -82.7 -93.3C-47 -98.7 -23.5 -100.4 1.5 -102.4C26.5 -104.4 52.9 -106.8 82.5 -99.4",
                                "M94.1 -115.1C129.7 -103.5 171.9 -86.5 188 -56.5C204.2 -26.4 194.3 16.8 178.4 55.5C162.4 94.2 140.3 128.4 109.5 145.1C78.8 161.7 39.4 160.9 3.4 156.2C-32.5 151.4 -65 142.9 -95.8 126.2C-126.5 109.5 -155.5 84.7 -170.2 52.3C-184.8 19.9 -185.1 -20.2 -165.4 -45.4C-145.7 -70.5 -105.9 -80.8 -75 -93.9C-44.1 -107 -22 -123 3.6 -127.9C29.2 -132.8 58.4 -126.7 94.1 -115.1",
                                "M114 -152.2C146.5 -133.3 170.7 -98.3 172.6 -63C174.6 -27.7 154.2 7.9 137.9 40.8C121.7 73.7 109.6 104 87.3 133.4C65 162.9 32.5 191.4 -5.8 199.4C-44.1 207.3 -88.2 194.7 -111.3 165.5C-134.5 136.4 -136.7 90.8 -142.7 51.3C-148.7 11.8 -158.5 -21.4 -153 -53.2C-147.5 -85 -126.6 -115.3 -98.6 -135.7C-70.5 -156.1 -35.3 -166.5 2.7 -170.3C40.8 -174.1 81.5 -171.2 114 -152.2",
                                "M112.3 -159.3C142.8 -132.5 162.7 -95.9 174.7 -57.2C186.7 -18.4 190.8 22.5 182.5 62.7C174.1 102.9 153.2 142.5 120.7 163.9C88.2 185.4 44.1 188.7 5.5 181.1C-33.1 173.5 -66.1 155 -97 133.1C-127.9 111.1 -156.7 85.7 -175.2 51.5C-193.7 17.4 -201.9 -25.4 -188 -58.8C-174 -92.2 -137.9 -116.1 -102.8 -141.4C-67.8 -166.6 -33.9 -193.3 3.5 -198.2C40.9 -203 81.9 -186.1 112.3 -159.3",
                                "M114 -152.2C146.5 -133.3 170.7 -98.3 172.6 -63C174.6 -27.7 154.2 7.9 137.9 40.8C121.7 73.7 109.6 104 87.3 133.4C65 162.9 32.5 191.4 -5.8 199.4C-44.1 207.3 -88.2 194.7 -111.3 165.5C-134.5 136.4 -136.7 90.8 -142.7 51.3C-148.7 11.8 -158.5 -21.4 -153 -53.2C-147.5 -85 -126.6 -115.3 -98.6 -135.7C-70.5 -156.1 -35.3 -166.5 2.7 -170.3C40.8 -174.1 81.5 -171.2 114 -152.2",
                                "M94.1 -115.1C129.7 -103.5 171.9 -86.5 188 -56.5C204.2 -26.4 194.3 16.8 178.4 55.5C162.4 94.2 140.3 128.4 109.5 145.1C78.8 161.7 39.4 160.9 3.4 156.2C-32.5 151.4 -65 142.9 -95.8 126.2C-126.5 109.5 -155.5 84.7 -170.2 52.3C-184.8 19.9 -185.1 -20.2 -165.4 -45.4C-145.7 -70.5 -105.9 -80.8 -75 -93.9C-44.1 -107 -22 -123 3.6 -127.9C29.2 -132.8 58.4 -126.7 94.1 -115.1",
                            ],
                        })}
                    />
                </svg>
                <div className={numbersStyle.transparent}></div>
                <Card Icon={UilAward} heading={Lang.numbers.card[3][0]} subHeading={Lang.numbers.card[3][1]} />
                <div className={numbersStyle.transparent}></div>
                <Card Icon={UilGift} heading={Lang.numbers.card[0][0]} subHeading={Lang.numbers.card[0][1]} />
                <Card Icon={UilCalendarAlt} heading={Lang.numbers.card[2] as string} />
                <div className={numbersStyle.transparent}></div>
                <Card Icon={UilBackpack} heading={Lang.numbers.card[1] as string} />
            </div>
        </section>
    );
};

export default Numbers;
