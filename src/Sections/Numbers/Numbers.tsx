import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/types";
import { LangType } from "../../common/Lang/french";

// styles
import numbersStyle from "./Numbers.module.scss";

// resources

// icons
import { UilGift, UilBackpack, UilCalendarAlt } from "@iconscout/react-unicons";
import Card from "./Card/Card";

const Numbers = () => {
    const Lang = useSelector<RootState>((state) => state.common.Lang) as LangType;
    const language = (useSelector<RootState>((state) => state.common.language) as "english") || "french";
    return (
        <section id="Card" className={numbersStyle.section_container}>
            <h1 className={numbersStyle.section_title + (language === "english" ? "" : " " + numbersStyle.FR)}>
                {Lang.numbers.title}
            </h1>
            <div className={numbersStyle.cards_holder}>
                <Card Icon={UilGift} heading={Lang.numbers.card[0][0]} subHeading={Lang.numbers.card[0][1]} />
                <div className={numbersStyle.card_pair}>
                    <Card Icon={UilBackpack} heading={Lang.numbers.card[1] as string} />
                    <Card Icon={UilCalendarAlt} heading={Lang.numbers.card[2] as string} />
                </div>
            </div>
        </section>
    );
};

export default Numbers;
