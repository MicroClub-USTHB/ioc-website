import { LangType } from "./french";

const English: LangType = {
    nav: {
        event: "The Event",
        video: "Participation Tutorial",
        faq: "FAQ",
        form: {
            title: "Sign In",
            button: "Sign In",
        },
    },
    hero: { left: "Get Started", middle: "Learn More", right: "Micro Club" },
    event: {
        title: "The Event",
        description: [
            "Impact of code is a one week long dev event that consists of daily coding challenges wrapped up in a compelling story scenario under the theme of a post-apocalyptic world in which we follow the steps of a character as he solves his way to escape the end. Each day participants will discover a new primary challenge and a bonus challenge with a chance to win points after each good answer.",
            "Each day participants will discover a new primary challenge and a bonus challenge with a chance to win points after each good answer.",
        ],
        about: [
            {
                title: "Seven Days. Seven Challenges. One Hero, You!",
                description:
                    "Impact of Code features 7 challenges of different domains and difficulties, you don’t have to be a computer science student nor have any coding skills to solve them, a good brain inside your thick skull is all that is required. A new challenge is announced with the coming of each new day, solving the challenges advances the story.",
            },
            {
                title: "Beat the Enemies in the Story. Beat Your Friends on the Leadboard.",
                description:
                    "Impact of Code features 7 challenges of different domains and difficulties, you don’t have to be a computer science student nor have any coding skills to solve them, a good brain inside your thick skull is all that is required. A new challenge is announced with the coming of each new day, solving the challenges advances the story.",
            },
        ],
    },
    numbers: { title: `Our Numbers`, card: [[`100.000DZD`, `Gifts to the top winners`], `14 Challenges`, `7 Days`] },
    video: {
        titles: [
            { main: "Wondering how you can participate?", highlight: "Watch this 👇" },
            { parts: ["Or", "below"], highlight: "learn more" },
        ],
    },
    faq: {
        title: "Frequently Asked Questions",
        qa: [
            { type: "q", text: "What does IOC stand for ?" },
            { type: "a", text: "Impact of Code" },
            { type: "q", text: "Is IOC online or on site ?" },
            {
                type: "a",
                text: "Impact of code is a one week long event that consists of algorithmic challenges wrapped in a compelling story , each day the challenges get harder and harder, and your task is to solve them !",
            },
            { type: "q", text: "Is IOC online or on site ?" },
            { type: "a", text: "IOC is an online event hosted on its website check ioc.com for more info ." },
            { type: "q", text: "Who can join the IOC ?" },
            { type: "a", text: "Everyone ! Regardless of who you are ." },
            { type: "q", text: "How to win in the IOC ?" },
            {
                type: "a",
                text: "Easy! All you have to do is solve the maximum of challenges correctly to get the points and crash the leaderboard .",
            },
            { type: "q", text: "Are there any requirements for IOC ?" },
            { type: "a", text: "There is none , but it would benefit you to have previous coding Knowledge !" },
            { type: "q", text: "Can I work with a team in the IOC ?" },
            { type: "a", text: "NO ,this is a solo competition ,so you’ll have to work alone to solve the problems ." },
            { type: "q", text: "What language will IOC be in?" },
            {
                type: "a",
                text: "The challenges will be mainly in English or in French ,it is up to you to choose what language suits you ,you have the option to change it  .",
            },
        ],
    },
    footer: { titles: [["A", "Event"], "Start Playing"] },
    auth: {
        signin: { title: "Sign In", button: "Sign In" },
        signup: { title: "Sign Up", button: "Sign Up" },
        email: "E-mail",
        password: "Password",
        userName: "userName",
        firstName: "first Name",
        lastName: "last Name",
        password_confirm: "Confirm Password",
    },
    challenges: {
        leaderboard: "Score & Leaderboard",
        landing: "Landing Page",
        main: "Main",
        side: "Side",
        task: "Task",
        submit: "Submit an Answer",
    },
};

export default English;
