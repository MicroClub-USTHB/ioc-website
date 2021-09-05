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
                title: "Sept jours. Sept défis. Un seul héros, vous !",
                description:
                    "Impact of Code propose 7 défis de différents domaines et difficultés, vous n'avez pas besoin d'être un étudiant en informatique ni d'avoir des compétences en codage pour les résoudre, un bon cerveau dans votre crâne épais est tout ce qui est nécessaire. Un nouveau défi est annoncé à l'aube de chaque nouvelle journée, la résolution des défis fait avancer l'histoire.",
            },
            {
                title: "Battez les ennemis dans l'histoire. Battez vos amis sur le tableau de bord.",
                description:
                    "Impact of Code propose 7 défis de différents domaines et difficultés, vous n'avez pas besoin d'être un étudiant en informatique ni d'avoir des compétences en codage pour les résoudre, un bon cerveau dans votre crâne épais est tout ce qui est nécessaire. Un nouveau défi est annoncé à l'aube de chaque nouvelle journée, la résolution des défis fait avancer l'histoire.",
            },
        ],
    },
    numbers: { title: `Nos chiffres`, card: [[`100.000DZD`, `Cadeaux aux grands gagnants`], `14 Défis`, `7 jours`] },
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
            "Le IOC est-il en ligne ou sur place ?",
            "Impact of code est un événement d'une semaine qui consiste en des défis algorithmiques enveloppés dans une histoire fascinante. Chaque jour, les défis deviennent de plus en plus difficiles, et votre tâche est de les résoudre !",
            "Le IOC est-il en ligne ou sur place ?",
            "IOC est un événement en ligne hébergé sur son site web, consultez ioc.com pour plus d'informations.",
            "Qui peut devenir membre du CIO ?",
            "Tout le monde ! Peu importe qui vous êtes.",
            "Comment gagner au IOC ?",
            "Facile ! Tout ce que vous devez faire, c'est résoudre correctement le maximum de défis pour obtenir des points et vous hisser au sommet du classement.",
            "Existe-t-il des exigences pour le IOC ?",
            "Il n'y en a pas, mais il serait avantageux pour vous d'avoir des connaissances préalables en codage !",
            "Puis-je travailler avec une équipe au sein du IOC ?",
            "NON, il s'agit d'un concours solo, vous devrez donc travailler seul pour résoudre les problèmes.",
            "Dans quelle langue le CIO sera-t-il rédigé ?",
            "Les défis seront principalement en anglais ou en français ,c'est à vous de choisir la langue qui vous convient ,vous avez la possibilité de la changer .",
        ],
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
