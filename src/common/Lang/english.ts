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
                    "Impact of Code features 14 challenges of different techniques and difficulties, you don’t have to be a computer science student to solve them but you need to have a base knowledge in algorithms and data structures.",
            },
            {
                title: "Rules & conditions",
                description:
                    `⮞ When registering, fill the form with your real information, so we can contact you easily once you win.<br/>
                    ⮞ Read the challenges carefully, they might be tricky!<br/>
                    ⮞ In order to solve the challenges, you need to write a solution in any coding language that will use the data given so you can find the solution you’ll insert back into the website to gain points.<br/>
                    ⮞ The earlier you submit the challenges the more points you get.<br/>
                    ⮞ For a fair competition, do not share the solutions with your friends.<br/>
                    ⮞ the data you will get for solving the challenges are unique and the challenge will not be solved unless you use yours correctly.<br/>
                    ⮞ Do not touch the platform or conduct any sort of attack on it.<br/>
                    ⮞ To take part in the contest, you must have an IOC account, make sure you register for the event and respect all of the previously stated regulations.<br/>`,
            },
        ],
    },
    organizers: {
        title: "The Organizers",
        org_list: {
            mc: {
                title: 'Event Organizer',
                description: 'Micro Club is the first founded scientific club in Algeria, back in March 5th, 1985.\nWe focus on Computer Science and IT field as we work to popularize among the student community.',
            },
            ea: {
                title: 'Event Partner',
                description: 'Etudz Academy is a digital professions training institution that uses advanced coaching approaches based in Algeria.',
            }
        }
    },
    numbers: {
        title: `Our Numbers`,
        card: [
            [`TOP 5`, `T-shirts & stickers`],
            `14 Challenges`,
            `7 Days`,
            ["TOP 3", "Premium training for free"],
            "OUR Partner",
        ],
    },
    video: {
        titles: [
            { main: "Wondering how you can participate?", highlight: "Watch this 👇" },
            { parts: ["Or", "below"], highlight: "learn more" },
        ],
    },
    faq: {
        title: "Frequently Asked Questions",
        qa: [
            "What does IOC stand for?, and what is it about?",
            "IOC stands for Impact of Code. Impact of code is a one week long event created by Micro club in collaboration with Etudz Academy that consists of algorithmic challenges wrapped in a compelling story , each day the challenges get harder and harder, by solving them you gain a score which will elavate your rankings among the participants and gain you chances to win valuable prizes! 🎁",
            "Etudz Academy is the event partner, but what are they?",
            "Etudz Academy is a digital professions training institution that uses advanced coaching approaches to teach the skills that are most in demand by the job market.",
            "Who can attend the event? And what if I can't travel to Algiers to attend?",
            "Everyone, regardless of who they are, can participate in the event, be they university students, pupils, or professionals.\n\n The event will be held on this website so you can participate from the comfort of your own home, just register on the platform and check in every day to solve a new challenge and advance the story. 💻",
            "Are there any requirements or rules for participating?",
            "There are no requirements to particpate, we meant it when we said everyone can particpate.\n\n You must, however, follow the rules when participating, you can scroll up to find them.",
            "Can I solve the challenges with a team?",
            "NO, this is a solo competition, so you’ll have to work alone to solve the problems. Participating with a team will disqualify you from winning a prize.",
            "What language will the challenges be in?",
            "The challenges are in English and French, you can switch languages in the top right of the page. You can also change the page theme from light to dark there.",
        ],
        question: "Question",
        answer: "Answer",
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
        validation: {
            email: ["Must be a valid email.", "You need to write your e-mail address."],
            userName: "You need to write a username that people will see in the leaderboard.",
            firstName: "You need to write your first Name.",
            lastName: "You need to write your last Name.",
            password: ["You need to write a password.", "Password must be at least 8 characters long."],
            password_confirm: ["You need to write the password again.", "Must be same as password."],
        },
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

    menu: {
        user: "Start the Challenges",
        home: ["Home", "Go Back the the landing page"],
        signup: ["Signup", "Register in this challenge"],
        about: ["The event", "Learn more about the event"],
        FAQ: ["FAQ", "Questions and answers"],
        video: ["Participation tutorial", "Watch a video tutorial"],
        logout: ["Logout", ""],
    },
};

export default English;
