import { useSelector } from "react-redux";
import { LangType } from "../../common/Lang/french";
import { RootState } from "../../redux/types";

import { UilInfoCircle, UilUserCircle } from "@iconscout/react-unicons";
// styles
import faqStyle from "./FAQ.module.scss";

const FAQ = () => {
    const Lang = useSelector<RootState>((state) => state.common.Lang) as LangType;
    const qa_list: string[] = Lang.faq.qa;

    return (
        <section id="FAQ" className={faqStyle.faq_section}>
            <h1 className={faqStyle.section_title} title={Lang.faq.title}>
                {Lang.faq.title}
            </h1>
            <div className={faqStyle.qa_list}>
                {qa_list.map((item, i) => {
                    const question = i % 2 === 0;
                    return (
                        <div
                            key={"FAQ" + i}
                            className={`${faqStyle.message_container} ${question ? "" : faqStyle.Answer}`}
                        >
                            <div className={faqStyle.person}>
                                {question ? (
                                    <UilInfoCircle className={faqStyle.person_icon} />
                                ) : (
                                    <UilUserCircle className={faqStyle.person_icon} />
                                )}
                                <span>{question ? Lang.faq.question : Lang.faq.answer}</span>
                            </div>
                            <div className={faqStyle.message}>
                                <p>{item}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default FAQ;
