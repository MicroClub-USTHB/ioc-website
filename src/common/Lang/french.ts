const French = {
    nav: {
        event: "L'événement",
        video: "Tutoriel de participation",
        faq: "FAQ",
        form: {
            title: "Se connecter",
            button: "Se connecter",
        },
    },
    hero: { left: "Commencez", middle: "En savoir plus", right: "Micro Club" },
    event: {
        title: "L'événement",
        description: [
            "Impact of code est un événement de développement d'une semaine qui consiste en des défis quotidiens de codage enveloppés dans un scénario captivant sur le thème d'un monde post-apocalyptique dans lequel nous suivons les étapes d'un personnage alors qu'il résout son chemin pour échapper à la fin. Chaque jour, les participants découvriront un nouveau défi principal et un défi bonus avec une chance de gagner des points après chaque bonne réponse.",
            "Chaque jour, les participants découvriront un nouveau défi principal et un défi bonus avec une chance de gagner des points après chaque bonne réponse.",
        ],
        about: [
            {
                title: "7 Jours , 14 défis. Un seul héro , vous !",
                description:
                    "Impact of Code propose 14 défis de différentes techniques et difficultés, vous n'avez pas besoin d'être un étudiant en informatique pour les résoudre vous n'avez besoin que d'avoir des connaissances de base en algorithmes et structures de données.",
            },
            {
                title: "Battez les ennemis dans l'histoire. Battez vos amis sur le tableau de bord.",
                description:
                    "Impact of Code propose 7 défis de différents domaines et difficultés, vous n'avez pas besoin d'être un étudiant en informatique ni d'avoir des compétences en codage pour les résoudre, un bon cerveau dans votre crâne épais est tout ce qui est nécessaire. Un nouveau défi est annoncé à l'aube de chaque nouvelle journée, la résolution des défis fait avancer l'histoire.",
            },
        ],
    },
    organizers: {
        title: "Les organisateurs",
        org_list: {
            mc: {
                title: `Organisateur d'evenement`,
                description: `Le Micro Club est le premier club scientifique fondé en Algérie, le 5 mars 1985.\nNous nous concentrons sur l'informatique et les technologies de l'information et nous nous efforçons de les populariser auprès de la communauté étudiante.`,
            },
            ea: {
                title: `Partenaire de l'evenement`,
                description: `Etudz Academy est une institution de formation aux métiers du numérique qui utilise des approches de coaching avancées, basée en Algérie.`,
            }
        }
    },
    numbers: {
        title: `Nos chiffres`,
        card: [
            [`TOP 5`, `swags`],
            `14 Défis`,
            `7 jours`,
            ["TOP 3", "Des Formations premium gratuitement"],
            "notre partner",
        ],
    },
    video: {
        titles: [
            { main: "Vous voulez savoir comment vous pouvez participer ?", highlight: "Regardez ça 👇" },
            { parts: ["Ou", "apprenez-en plus"], highlight: "ci-dessous" },
        ],
    },
    faq: {
        title: "Questions fréquemment posées",
        qa: [
            "Que signifie IOC ?",
            "Impact of Code",
            "Qu'est-ce que IoC ?",
            "Impact of code est un événement conçu par Micro club en collaboration avec Etudz Academy qui se fera en une semaine qui consiste en des défis algorithmiques enveloppés dans une histoire fascinante. Chaque jour, les défis deviennent de plus en plus difficiles, et votre tâche est de les résoudre !",
            "Qui sont Etudz Academy ?",
            "Etudz Academy est une école de formation innovante pour un apprentissage facile et efficace pour acquérir les compétences les plus recherchées par les entreprises.",
            "Le IOC est-il en ligne ou sur place ?",
            "IOC est un événement en ligne hébergé ici sur le site web! Il suffit de s’inscrire et attendre le début des défis.",
            "Qui peut rejoindre IOC ?",
            "Tout le monde ! Peu importe qui vous êtes.",
            "Comment gagner à l' IOC ?",
            "Facile ! Tout ce que vous devez faire, c'est résoudre correctement le maximum de défis pour obtenir des points et vous hisser au sommet du classement.",
            "Y’a t'il  des exigences pour le IOC ?",
            "Il n'y en a pas, mais il serait avantageux pour vous d'avoir des connaissances préalables en algorithmique !",
            "Puis-je travailler avec une équipe?",
            "Non, il s'agit d'une compétition individuelle, vous devrez donc travailler seul pour résoudre les problèmes.",
            "Dans quelle langue sont les défis?",
            "Les défis seront principalement en anglais ou en français ,c'est à vous de choisir la langue qui vous convient ,vous avez la possibilité de la changer .",
        ],
        question: "Question",
        answer: "Réponse",
    },
    footer: { titles: [["Un événement du", ""], "Commencer à jouer"] },
    auth: {
        signin: { title: "Se connecter", button: "Connexion" },
        signup: { title: "S'inscrire", button: "S'inscrire" },
        email: "E-mail",
        password: "Mot de Passe",
        userName: "Nom d'utilisateur",
        firstName: "Prénom",
        lastName: "Nom",
        password_confirm: "Confirmez le Mot de Passe",
        validation: {
            email: ["Doit être un email valide.", "Vous devez écrire votre adresse e-mail"],
            userName: "Vous devez écrire un nom d'utilisateur que les gens verront dans le classement.",
            firstName: "Vous devez écrire votre prénom.",
            lastName: "Vous devez écrire votre nom de famille.",
            password: ["Vous devez écrire un mot de passe.", "Le mot de passe doit comporter au moins 8 caractères"],
            password_confirm: ["Vous devez réécrire le mot de passe.", "Doit être le même que le mot de passe."],
        },
    },
    challenges: {
        leaderboard: "Score & Classement",
        landing: "Page d'accueil",
        main: "Principale",
        side: "Secondaire",
        task: "tâche",
        submit: "Soumettre une Réponse",
        no: "There is no Challenge yet! be patient !",
        select: "Select a challenge in the left",
    },
};

export type LangType = typeof French;

export default French;
