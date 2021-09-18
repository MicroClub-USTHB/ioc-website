import { RouteComponentProps } from "react-router-dom";

import { useGetDayQuery, useSubmitAnswerMutation, useGetInputsMutation } from "../../../../redux/api/backend";

import { Challenge as ChallengeI } from "../../../../types/Day";
import Spinner from "../../../../common/Spinner/Spinner";
// styles
import challengeStyle from "./Challenge.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/types";
import { useState, FC } from "react";
import { CorrectAnswer } from "../../../../types/Day";
import PlaceHolder from "../../components/PlaceHolder/PlaceHolder";
import { LangType } from "../../../../common/Lang/french";
import { Notify } from "../../../../redux/slices/notifications";
import { setUser } from "../../../../redux/slices/user";
import { User } from "../../../../types/User";
import AfterStory from "./components/AfterStory/AfterStory";
// components

const StoryIcon = () => (
    <svg viewBox="0 0 30 26" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28.3463 0.664307H16.875L16.145 0.97716L14.7893 2.312L13.4336 0.97716L12.7036 0.664307H1.2323L0.189453 1.70715V22.5641L1.2323 23.6069H12.2656L14.0593 25.3797H15.5193L17.313 23.6069H28.3463L29.3891 22.5641V1.70715L28.3463 0.664307ZM13.7464 22.1886L13.371 21.8341L12.7036 21.5212H2.27514V2.75H12.2656L13.809 4.29341L13.7464 22.1886ZM27.3034 21.5212H16.875L16.145 21.8341L15.853 22.1052V4.20998L17.313 2.75H27.3034V21.5212ZM10.6179 6.92138H4.36083V9.00707H10.6179V6.92138ZM10.6179 15.2641H4.36083V17.3498H10.6179V15.2641ZM4.36083 11.0928H10.6179V13.1784H4.36083V11.0928ZM25.2177 6.92138H18.9607V9.00707H25.2177V6.92138ZM18.9607 11.0928H25.2177V13.1784H18.9607V11.0928ZM18.9607 15.2641H25.2177V17.3498H18.9607V15.2641Z"
        />
    </svg>
);
const downloadIcon = () => (
    <svg viewBox="0 0 25 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.78125 12.375C0.98845 12.375 1.18716 12.4408 1.33368 12.5581C1.48019 12.6753 1.5625 12.8342 1.5625 13V16.125C1.5625 16.4565 1.72712 16.7745 2.02015 17.0089C2.31317 17.2433 2.7106 17.375 3.125 17.375H21.875C22.2894 17.375 22.6868 17.2433 22.9799 17.0089C23.2729 16.7745 23.4375 16.4565 23.4375 16.125V13C23.4375 12.8342 23.5198 12.6753 23.6663 12.5581C23.8128 12.4408 24.0115 12.375 24.2188 12.375C24.426 12.375 24.6247 12.4408 24.7712 12.5581C24.9177 12.6753 25 12.8342 25 13V16.125C25 16.788 24.6708 17.4239 24.0847 17.8928C23.4987 18.3616 22.7038 18.625 21.875 18.625H3.125C2.2962 18.625 1.50134 18.3616 0.915291 17.8928C0.32924 17.4239 0 16.788 0 16.125V13C0 12.8342 0.08231 12.6753 0.228823 12.5581C0.375336 12.4408 0.57405 12.375 0.78125 12.375V12.375Z" />
        <path d="M11.9469 14.8175C12.0195 14.8757 12.1057 14.9219 12.2006 14.9534C12.2955 14.9849 12.3972 15.0011 12.5 15.0011C12.6028 15.0011 12.7045 14.9849 12.7994 14.9534C12.8944 14.9219 12.9806 14.8757 13.0531 14.8175L17.7406 11.0675C17.8873 10.9501 17.9697 10.791 17.9697 10.625C17.9697 10.459 17.8873 10.2999 17.7406 10.1825C17.5939 10.0651 17.395 9.99921 17.1875 9.99921C16.98 9.99921 16.7811 10.0651 16.6344 10.1825L13.2813 12.8663V1.875C13.2813 1.70924 13.199 1.55027 13.0524 1.43306C12.9059 1.31585 12.7072 1.25 12.5 1.25C12.2928 1.25 12.0941 1.31585 11.9476 1.43306C11.8011 1.55027 11.7188 1.70924 11.7188 1.875V12.8663L8.36564 10.1825C8.21894 10.0651 8.01997 9.99921 7.81251 9.99921C7.60505 9.99921 7.40608 10.0651 7.25939 10.1825C7.11269 10.2999 7.03027 10.459 7.03027 10.625C7.03027 10.791 7.11269 10.9501 7.25939 11.0675L11.9469 14.8175V14.8175Z" />
    </svg>
);
const submitIcon = () => (
    <svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.4771 10.2038C24.4776 10.019 24.4415 9.83588 24.3708 9.66513C24.3 9.49438 24.1961 9.33934 24.0651 9.209L16.0112 1.15524C15.7474 0.891392 15.3895 0.743164 15.0163 0.743164C14.6432 0.743164 14.2853 0.891392 14.0214 1.15524L11.0044 4.17216L4.10218 6.76053C3.87124 6.8476 3.66717 6.99372 3.51033 7.1843C3.35349 7.37488 3.24937 7.60326 3.20836 7.84664L0.483402 24.1971C0.479691 24.2203 0.477731 24.2437 0.477539 24.2671C0.477539 24.2727 0.477774 24.2783 0.477891 24.2838C0.478202 24.31 0.480712 24.3362 0.485395 24.3621L0.485981 24.3653C0.491303 24.3908 0.498755 24.4159 0.508259 24.4402C0.51037 24.446 0.51248 24.4517 0.514825 24.4574C0.525007 24.4814 0.537165 24.5045 0.551174 24.5265C0.554105 24.5309 0.557388 24.5353 0.560554 24.5398C0.59378 24.5896 0.636735 24.6322 0.686836 24.665C0.703536 24.6753 0.720887 24.6845 0.738779 24.6926C0.748628 24.6976 0.757657 24.7039 0.767858 24.7079C0.78848 24.7158 0.809639 24.7222 0.831174 24.7271C0.839265 24.7291 0.847004 24.7326 0.855211 24.7341C0.885098 24.7401 0.915493 24.7431 0.945965 24.7432C0.971818 24.7432 0.997626 24.741 1.02312 24.7367L17.3735 22.0118C17.6169 21.9708 17.8453 21.8667 18.0359 21.7099C18.2265 21.553 18.3726 21.3489 18.4596 21.1179L21.048 14.2157L24.0649 11.1988C24.196 11.0684 24.2999 10.9134 24.3706 10.7426C24.4414 10.5718 24.4777 10.3886 24.4771 10.2038ZM17.5815 20.7886C17.5525 20.8656 17.5038 20.9336 17.4402 20.9859C17.3767 21.0382 17.3006 21.0729 17.2194 21.0865L2.31243 23.571L9.16552 16.717C9.74148 17.1266 10.4503 17.3049 11.1516 17.2165C11.8528 17.1282 12.4953 16.7796 12.9516 16.2398C13.4079 15.7001 13.6448 15.0086 13.6152 14.3024C13.5857 13.5962 13.2919 12.9269 12.7922 12.4271C12.2924 11.9274 11.6231 11.6336 10.9169 11.6041C10.2107 11.5745 9.51924 11.8114 8.97949 12.2677C8.43973 12.724 8.09112 13.3665 8.00274 14.0677C7.91437 14.769 8.09268 15.4778 8.50234 16.0538L1.64937 22.9074L4.13372 8.00083C4.14741 7.9197 4.18212 7.84358 4.23439 7.78005C4.28667 7.71652 4.35469 7.6678 4.43166 7.63875L11.1464 5.12074L20.0995 14.074L17.5815 20.7886ZM8.91859 14.4245C8.91859 14.0535 9.02862 13.6908 9.23476 13.3823C9.4409 13.0737 9.7339 12.8333 10.0767 12.6913C10.4195 12.5493 10.7967 12.5122 11.1606 12.5845C11.5246 12.6569 11.8588 12.8356 12.1212 13.098C12.3836 13.3603 12.5623 13.6946 12.6346 14.0585C12.707 14.4225 12.6699 14.7997 12.5279 15.1425C12.3859 15.4853 12.1454 15.7783 11.8369 15.9844C11.5284 16.1906 11.1657 16.3006 10.7946 16.3006C10.2972 16.3 9.82039 16.1022 9.46869 15.7505C9.11698 15.3988 8.91915 14.9219 8.91859 14.4245ZM23.4017 10.5355L20.6446 13.2926L11.9277 4.57563L14.6849 1.81843C14.7729 1.73067 14.8921 1.6814 15.0165 1.6814C15.1408 1.6814 15.26 1.73067 15.348 1.81843L23.4018 9.87219C23.4896 9.96022 23.5389 10.0795 23.5389 10.2038C23.5389 10.3282 23.4895 10.4475 23.4017 10.5355Z" />
    </svg>
);
const TasksIcon = () => (
    <svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.72142 19.6097C4.06031 19.6097 4.3916 19.7102 4.67338 19.8985C4.95516 20.0868 5.17479 20.3544 5.30448 20.6675C5.43417 20.9806 5.4681 21.3251 5.40198 21.6575C5.33587 21.9899 5.17268 22.2952 4.93304 22.5348C4.6934 22.7745 4.38809 22.9377 4.0557 23.0038C3.72332 23.0699 3.37879 23.036 3.06569 22.9063C2.75259 22.7766 2.48498 22.557 2.2967 22.2752C2.10842 21.9934 2.00793 21.6621 2.00793 21.3232C2.00793 20.8688 2.18845 20.4329 2.5098 20.1116C2.83114 19.7903 3.26697 19.6097 3.72142 19.6097ZM3.72142 17.8962C3.04362 17.8962 2.38105 18.0972 1.81749 18.4738C1.25392 18.8504 0.814679 19.3856 0.555299 20.0118C0.295918 20.638 0.228053 21.327 0.360284 21.9918C0.492515 22.6566 0.818903 23.2672 1.29817 23.7465C1.77745 24.2257 2.38808 24.5521 3.05285 24.6844C3.71762 24.8166 4.40667 24.7487 5.03287 24.4893C5.65907 24.23 6.19429 23.7907 6.57085 23.2272C6.94741 22.6636 7.1484 22.001 7.1484 21.3232C7.1484 20.4143 6.78734 19.5427 6.14466 18.9C5.50198 18.2573 4.63031 17.8962 3.72142 17.8962Z" />
        <path d="M12.2888 2.47472C12.6277 2.47472 12.959 2.57522 13.2408 2.7635C13.5225 2.95178 13.7422 3.21939 13.8719 3.53249C14.0016 3.84559 14.0355 4.19011 13.9694 4.5225C13.9033 4.85488 13.7401 5.1602 13.5004 5.39983C13.2608 5.63947 12.9555 5.80266 12.6231 5.86878C12.2907 5.9349 11.9462 5.90096 11.6331 5.77127C11.32 5.64158 11.0524 5.42196 10.8641 5.14018C10.6758 4.8584 10.5753 4.52711 10.5753 4.18821C10.5753 3.73377 10.7558 3.29793 11.0772 2.97659C11.3985 2.65525 11.8344 2.47472 12.2888 2.47472ZM12.2888 0.76123C11.611 0.76123 10.9484 0.96222 10.3849 1.33878C9.82131 1.71534 9.38206 2.25056 9.12268 2.87676C8.8633 3.50296 8.79544 4.19201 8.92767 4.85678C9.0599 5.52155 9.38629 6.13218 9.86556 6.61146C10.3448 7.09073 10.9555 7.41712 11.6202 7.54935C12.285 7.68158 12.9741 7.61371 13.6002 7.35433C14.2264 7.09495 14.7617 6.65571 15.1382 6.09214C15.5148 5.52858 15.7158 4.86601 15.7158 4.18821C15.7158 3.27932 15.3547 2.40765 14.712 1.76497C14.0694 1.12229 13.1977 0.76123 12.2888 0.76123Z" />
        <path d="M20.8562 2.47472C21.1951 2.47472 21.5264 2.57522 21.8081 2.7635C22.0899 2.95178 22.3096 3.21939 22.4392 3.53249C22.5689 3.84559 22.6029 4.19011 22.5368 4.5225C22.4706 4.85488 22.3074 5.1602 22.0678 5.39983C21.8282 5.63947 21.5229 5.80266 21.1905 5.86878C20.8581 5.9349 20.5136 5.90096 20.2005 5.77127C19.8874 5.64158 19.6197 5.42196 19.4315 5.14018C19.2432 4.8584 19.1427 4.52711 19.1427 4.18821C19.1427 3.73377 19.3232 3.29793 19.6446 2.97659C19.9659 2.65525 20.4017 2.47472 20.8562 2.47472ZM20.8562 0.76123C20.1784 0.76123 19.5158 0.96222 18.9523 1.33878C18.3887 1.71534 17.9494 2.25056 17.6901 2.87676C17.4307 3.50296 17.3628 4.19201 17.495 4.85678C17.6273 5.52155 17.9537 6.13218 18.4329 6.61146C18.9122 7.09073 19.5228 7.41712 20.1876 7.54935C20.8524 7.68158 21.5414 7.61371 22.1676 7.35433C22.7938 7.09495 23.3291 6.65571 23.7056 6.09214C24.0822 5.52858 24.2832 4.86601 24.2832 4.18821C24.2832 3.27932 23.9221 2.40765 23.2794 1.76497C22.6367 1.12229 21.7651 0.76123 20.8562 0.76123Z" />
        <path d="M14.0023 19.6097V23.0367H10.5753V19.6097H14.0023ZM15.7158 17.8962H8.86182V24.7502H15.7158V17.8962Z" />
        <path d="M21.7131 18.0161V13.6124C21.7131 13.158 21.5325 12.7221 21.2112 12.4008C20.8899 12.0795 20.454 11.8989 19.9996 11.8989H4.57816V7.6152H7.1484V0.76123H0.294434V7.6152H2.86467V11.8989C2.86467 12.3534 3.0452 12.7892 3.36654 13.1105C3.68788 13.4319 4.12372 13.6124 4.57816 13.6124H19.9996V18.0161C19.192 18.2246 18.4881 18.7205 18.02 19.4109C17.5518 20.1012 17.3516 20.9386 17.4567 21.7661C17.5618 22.5935 17.965 23.3542 18.5909 23.9056C19.2168 24.457 20.0222 24.7612 20.8563 24.7612C21.6904 24.7612 22.4959 24.457 23.1218 23.9056C23.7476 23.3542 24.1509 22.5935 24.256 21.7661C24.3611 20.9386 24.1608 20.1012 23.6927 19.4109C23.2245 18.7205 22.5207 18.2246 21.7131 18.0161ZM2.00792 2.47472H5.43491V5.9017H2.00792V2.47472ZM20.8563 23.0366C20.5174 23.0366 20.1861 22.9361 19.9044 22.7478C19.6226 22.5596 19.403 22.292 19.2733 21.9788C19.1436 21.6658 19.1096 21.3212 19.1758 20.9888C19.2419 20.6565 19.4051 20.3511 19.6447 20.1115C19.8843 19.8719 20.1897 19.7087 20.522 19.6426C20.8544 19.5764 21.199 19.6104 21.5121 19.7401C21.8252 19.8698 22.0928 20.0894 22.281 20.3712C22.4693 20.6529 22.5698 20.9842 22.5698 21.3231C22.5698 21.7776 22.3893 22.2134 22.068 22.5347C21.7466 22.8561 21.3108 23.0366 20.8563 23.0366Z" />
    </svg>
);

const Tab: FC<{ Icon: any; title: string; text?: string; className?: string }> = ({
    Icon,
    title,
    text = null,
    children,
    className = "",
}) => (
    <div className={challengeStyle.Tab + " " + className}>
        <div className={challengeStyle.Header}>
            <div>
                <Icon />
            </div>
            <h2>{title}</h2>
        </div>
        <div className={challengeStyle.Body}>
            {text ? <p dangerouslySetInnerHTML={{ __html: text }}></p> : children}
        </div>
    </div>
);
const Challenge: FC<RouteComponentProps> = (props) => {
    const [ShowAfterStory, setShowAfterStory] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>();
    let { day: _id, type } = props.match.params as { day: string; type: string };
    const [submitAnswer, { isLoading }] = useSubmitAnswerMutation();
    const [getInputs, { isLoading: isLoadingGet }] = useGetInputsMutation();
    const Lang = useSelector<RootState>((state) => state.common.Lang) as LangType;
    const language = useSelector<RootState>((state) => (state.common.language === "english" ? "EN" : "FR")) as
        | "EN"
        | "FR";
    const { data: challenge, isLoading: dayLoading }: { data?: ChallengeI; isLoading: boolean } = useGetDayQuery({
        _id,
        type,
    });
    const [challengeId, setChallengeId] = useState<string>("");
    const [blobS, setBlobS] = useState<string>("");
    if (!dayLoading && challenge !== undefined) {
        let story = challenge.content[language]!.story,
            content = challenge.content[language]!.content, // may change into the day titl:"",
            example = challenge.content[language]!.example,
            title = challenge.content[language]!.title ?? "",
            finishingMsg = challenge.content[language]!.finishingMsg ?? "";
        if (challengeId && challengeId !== challenge._id) setChallengeId("");
        return (
            <section className={challengeStyle.container}>
                <div className={challengeStyle.half_container}>
                    <Tab Icon={StoryIcon} title={title} text={story} />
                    <Tab Icon={TasksIcon} title={"Tasks And Instructions"} text={content} />
                </div>
                <div className={challengeStyle.half_container}>
                    {example ? <Tab Icon={TasksIcon} title={"Examples"} text={example} /> : ""}
                    {/* <Tab className={challengeStyle.row} Icon={downloadIcon} title={"Inputs"}>
                        <a
                            href={blobS}
                            download={`${title}-${type}.txt`}
                            className={isLoadingGet ? challengeStyle.disabled : ""}
                            onClick={(e) => {
                                if (isLoadingGet) e.preventDefault();
                                else if (!challengeId) {
                                    getInputs({
                                        day: _id,
                                        type,
                                    })
                                        .then((response) => {
                                            if (response.hasOwnProperty("data")) {
                                                const message = (response as { data: CorrectAnswer }).data.message;
                                                if (blobS) window.URL.revokeObjectURL(blobS);
                                                const blob = window.URL.createObjectURL(new Blob([message]));
                                                setBlobS(blob);
                                                setChallengeId(challenge._id);
                                                Notify(dispatch, {
                                                    title: Lang.notifications.challenge.title,
                                                    description: Lang.notifications.challenge.description,
                                                    type: "success",
                                                });
                                            } else
                                                Notify(dispatch, {
                                                    title: Lang.errors.challenge.title,
                                                    description: Lang.errors.challenge.description,
                                                    type: "error",
                                                });
                                        })
                                        .catch((er) => console.error(er));
                                    e.preventDefault();
                                } else console.log(blobS, challengeId);
                            }}
                        >
                            <div className={challengeStyle.button}>
                                {isLoadingGet ? <Spinner /> : challengeId ? "Download" : "Genrate"}
                            </div>
                        </a>
                    </Tab> */}
                    {/* <Tab Icon={submitIcon} title={"Submit your answer"}>
                        <form
                            onSubmit={(e) => {
                                let input = (e.target as HTMLFormElement)[0] as HTMLInputElement;

                                if (input.value === "")
                                    Notify(dispatch, {
                                        title: Lang.errors.EmptyAnswer.title,
                                        description: Lang.errors.EmptyAnswer.description,
                                        type: "error",
                                    });
                                else if (!isLoading)
                                    submitAnswer({
                                        day: _id,
                                        type,
                                        answer: input.value,
                                    })
                                        .then((data) => {
                                            if (data.hasOwnProperty("data")) {
                                                setShowAfterStory(true);
                                                Notify(dispatch, {
                                                    title: Lang.notifications.correctAnswer.title,
                                                    description: Lang.notifications.correctAnswer.description,
                                                    type: "success",
                                                });
                                                dispatch(setUser((data as { data: User }).data));
                                                input.value = "";
                                            } else {
                                                const status = (data as { error: any }).error.status;
                                                if (status) {
                                                    let description,
                                                        title = "";
                                                    switch (status) {
                                                        case 420:
                                                            title = Lang.errors.spammingAnswer.title;
                                                            description =
                                                                Lang.errors.spammingAnswer.description +
                                                                (data as { error: any }).error.data.time +
                                                                "minutes";
                                                            break;
                                                        case 428:
                                                            description = Lang.errors.wrongAnswer.description;
                                                            break;
                                                        case 423:
                                                            description = Lang.errors.wrongAnswer.Lower;
                                                            break;
                                                        case 424:
                                                            description = Lang.errors.wrongAnswer.Higher;
                                                            break;
                                                        case 425:
                                                            title = Lang.errors.NotInitialized.title;
                                                            description = Lang.errors.NotInitialized.description;
                                                            break;
                                                        case 426:
                                                            title = Lang.errors.FinishMain.title;
                                                            description = Lang.errors.FinishMain.description;
                                                            break;
                                                        case 427:
                                                            title = Lang.errors.AlreadyAnswered.title;
                                                            description = Lang.errors.AlreadyAnswered.description;
                                                            break;
                                                        default:
                                                            description = (data as { error: any }).error.msg;
                                                            break;
                                                    }
                                                    Notify(dispatch, {
                                                        title: title ? title : Lang.errors.wrongAnswer.title,
                                                        description,
                                                        type: "error",
                                                    });
                                                } else throw new Error((data as { error: any }).error.msg);
                                            }
                                        })
                                        .catch((er) => {
                                            console.log(er);
                                            Notify(dispatch, {
                                                title: Lang.errors.spammingAnswer.title,
                                                description: er.message,
                                                type: "error",
                                            });
                                        });

                                e.preventDefault();
                            }}
                        >
                            <input type="text" id="Answer" name="Answer" />
                            <button type="submit" disabled={isLoading}>
                                {isLoading ? (
                                    <Spinner />
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
                                    </svg>
                                )}
                            </button>
                        </form>
                    </Tab> */}
                </div>
                {
                    finishingMsg && <AfterStory show={ShowAfterStory} setShow={setShowAfterStory} content={finishingMsg} title={Lang.challenges.afterStory} button={Lang.challenges.button} />
                }
            </section>
        );
    } else return <PlaceHolder text={dayLoading ? Lang.challenges.loading : Lang.challenges.wrongPage} />;
};

export default Challenge;
