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
            "What does IOC stand for ?",
            "Impact of Code",
            "Is IOC online or on site ?",
            "Impact of code is a one week long event that consists of algorithmic challenges wrapped in a compelling story , each day the challenges get harder and harder, and your task is to solve them !",
            "Is IOC online or on site ?",
            "IOC is an online event hosted on its website check ioc.com for more info .",
            "Who can join the IOC ?",
            "Everyone ! Regardless of who you are .",
            "How to win in the IOC ?",
            "Easy! All you have to do is solve the maximum of challenges correctly to get the points and crash the leaderboard .",
            "Are there any requirements for IOC ?",
            "There is none , but it would benefit you to have previous coding Knowledge !",
            "Can I work with a team in the IOC ?",
            "NO ,this is a solo competition ,so you’ll have to work alone to solve the problems .",
            "What language will IOC be in?",
            "The challenges will be mainly in English or in French ,it is up to you to choose what language suits you ,you have the option to change it  .",
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
        no: "There is no Challenge yet! be patient !",
        select: "Select a challenge in the left",
    },
};

export default English;
