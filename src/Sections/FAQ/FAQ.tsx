import React from "react";
import { useSelector } from "react-redux";
import { LangType } from "../../common/Lang/french";
import { RootState } from "../../redux/types";
import Answer from "./components/Answer/Answer";
import Question from "./components/Question/Question";

// styles
import faqStyle from "./FAQ.module.scss";

type QAList = Array<{
    type: string;
    text: string;
    id?: number;
}>;
const FAQ = () => {
    const Lang = useSelector<RootState>((state) => state.common.Lang) as LangType;
    const qa_list: QAList = Lang.faq.qa;

    return (
        <section id="FAQ" className={faqStyle.faq_section}>
            <h1 className={faqStyle.section_title}>{Lang.faq.title}</h1>
            <div className={faqStyle.qa_list}>
                {qa_list.map((item, i) =>
                    item.type === "q" ? (
                        <Question question={item.text} key={item.type + i} />
                    ) : (
                        <Answer answer={item.text} key={item.type + i} />
                    )
                )}
            </div>
        </section>
    );
};

export default FAQ;
