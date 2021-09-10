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
    organizers: {
        title: "The Organizers",
        org_list: {
            mc: {
                title: "Event Organizer",
                description:
                    "Micro Club is the first founded scientific club in Algeria, back in March 5th, 1985.\nWe focus on Computer Science and IT field as we work to popularize among the student community.",
            },
            ea: {
                title: "Event Partner",
                description:
                    "Etudz Academy is a digital professions training institution that uses advanced coaching approaches based in Algeria.",
            },
        },
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
            "What does IOC stand for ?",
            "Impact of Code",
            "What is IOC about ?",
            "Impact of code is a one week long event created by Micro club in collaboration with Etudz Academy that consists of algorithmic challenges wrapped in a compelling story , each day the challenges get harder and harder, and your task is to solve them !",
            "What’s Etudz Academy ?",
            "Etudz Academy is a digital professions training institution that uses advanced coaching approaches.",
            "Who can join the IOC ?",
            "Everyone ! Regardless of who you are .",
            "Is IOC online or in site  ?",
            "IOC is an online event hosted here on the website ! Just register and wait for the challenges to start.",
            "Are there any requirements for IOC ?",
            "There is none , but it would benefit you to have previous coding Knowledge !",
            "Can I work with a team in the IOC ?",
            "NO ,this is a solo competition ,so you’ll have to work alone to solve the problems .",
            "What language will IOC be in?",
            "The challenges will be mainly in English or in French ,it is up to you to choose what language suits you ,you have the option to change it  .",
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
        loading: "Loading The day's story",
        wrongPage: "The challenge you are looking for doesn't exist",
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
    errors: {
        timeout: {
            title: "Its been long time no see",
            description: "No token",
        },
        loggedIn: {
            title: "Login Failed",
            description: "Credentials do not match any of our records.",
            email: "email doesn't exist",
            password: "password is wrong",
        },
        signedUp: {
            title: "Sign Up Failed",
            userName: "UserName does exist before",
            email: "Email already in use",
            description: "Something went wrong.",
        },
        challenge: { title: "Can't be Generated", description: "You need to finish the main challenge first." },
        wrongAnswer: {
            title: "Wrong Answer",
            Lower: "Answer is Lower than what we expected.",
            Higher: "Answer is higher than what we expected.",
            description: "Not Correct Try Again",
        },
        AlreadyAnswered: {
            title: "Already Answered",
            description: "You have already submited the answer for this challenge.",
        },
        FinishMain: {
            title: "You can't answer this",
            description: "You can't answer this until you finish the main challenge.",
        },
        NotInitialized: {
            title: "You can't answer this",
            description: "This challenge hasn't been initialized.",
        },
        EmptyAnswer: { title: "Empty Answer", description: "You can't submit an empty answer" },
        spammingAnswer: {
            title: "Spamming Answer",
            description: "It appears that you are spamming answers you can't answer for : ",
        },
    },

    notifications: {
        loggedIn: {
            title: "Login Succeeded",
            description: "Welcome to Impact of Code",
        },
        signedUp: {
            title: "Sign Up Succeeded",
            description: "Welcome to Impact of Code",
        },
        loggedOut: {
            title: "Logged out",
            description: "Bye Bye see you later",
        },
        challenge: { title: "Challenge Generated", description: "challenge has been generated you can download it." },
        correctAnswer: { title: "Correct Answer", description: "Good job man you can go the next challenge." },
    },
};

export default English;
