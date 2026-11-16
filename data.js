/* ============================================================
   data.js – TOUS les contenus du site (faciles à modifier).
   Format : objets JavaScript simples. Ajoutez/éditez les entrées.
   ============================================================ */
const DATA = {

  /* Cartes d'accueil */
  modules: [
    {href:"#fondamentaux", cls:"mod-fond", t:"Fondamentaux", d:"Comprendre l'IA, sa frise historique et son vocabulaire."},
    {href:"#ethique", cls:"mod-eth", t:"Éthique & Intégrité", d:"Les enjeux clés et la démarche d'utilisation intègre."},
    {href:"#outils", cls:"mod-out", t:"Boîte à outils", d:"Comparer les outils et construire un bon prompt."},
    {href:"#entrainement", cls:"mod-ent", t:"Entraînement", d:"Flashcards, quiz et mises en situation."}
  ],

  /* Analogie complétion automatique */
  autocomplete: {
    start: "Le tuteur explique la leçon à son …",
    options: [["tutoré",62],["camarade",18],["groupe",12],["chat",1]],
    note: "L'IA choisit le mot le plus probable, pas le mot le plus vrai. Les pourcentages sont illustratifs."
  },

  /* Frise chronologique */
  timeline: [
    {y:"1956", t:"Naissance du terme « intelligence artificielle »", d:"Le terme est proposé lors de la conférence de Dartmouth (États-Unis)."},
    {y:"1966", t:"ELIZA", d:"Premier agent conversationnel, créé au MIT. Il reformule les phrases de l'utilisateur, sans rien comprendre. Pourtant, beaucoup de gens s'y attachent."},
    {y:"1969", t:"Comparaison : l'homme sur la Lune", d:"Une prouesse technique devenue symbole. À comparer avec la rapidité d'adoption de l'IA générative."},
    {y:"1991–93", t:"Comparaison : Internet grand public", d:"Le Web s'ouvre au public. Il a fallu des années pour atteindre des centaines de millions d'utilisateurs."},
    {y:"2007", t:"Comparaison : l'iPhone", d:"Le smartphone transforme les usages quotidiens, en quelques années."},
    {y:"2022", t:"ChatGPT", d:"Lancé fin novembre 2022. Il atteint 100 millions d'utilisateurs en environ deux mois : une adoption record pour un service grand public."}
  ],

  /* Glossaire : cat = Technique | Éthique | Outils */
  glossary: [
    {t:"IA (intelligence artificielle)", c:"Technique", d:"Ensemble de techniques qui permettent à une machine de réaliser des tâches associées à l'intelligence humaine (reconnaître, prédire, générer)."},
    {t:"Machine Learning", c:"Technique", d:"Apprentissage automatique : le système apprend à partir d'exemples au lieu de suivre des règles écrites à la main."},
    {t:"Deep Learning", c:"Technique", d:"Apprentissage profond : sous-famille du machine learning utilisant de grands réseaux de neurones à plusieurs couches."},
    {t:"LLM", c:"Technique", d:"Large Language Model : modèle de langage entraîné sur d'énormes quantités de textes pour prédire la suite d'un texte. C'est le moteur de ChatGPT ou Gemini."},
    {t:"IA générative (IAG)", c:"Technique", d:"IA capable de produire du contenu nouveau : texte, image, son, code."},
    {t:"Prompt", c:"Technique", d:"Consigne donnée à l'IA. Sa qualité influence beaucoup la qualité de la réponse."},
    {t:"Hallucination", c:"Éthique", d:"Réponse plausible, sûre d'elle, mais fausse ou inventée (fausses sources, faux chiffres). Toujours vérifier."},
    {t:"Biais de confirmation", c:"Éthique", d:"Tendance à retenir ce qui confirme ce qu'on pense déjà. Une IA qui dit « oui » à tout peut l'amplifier."},
    {t:"Data workers", c:"Éthique", d:"Travailleurs, souvent peu payés, qui annotent des données et modèrent les contenus pour entraîner et filtrer les IA : le travail invisible."},
    {t:"Paresse intellectuelle", c:"Éthique", d:"Déléguer à l'IA la réflexion elle-même. Le risque : ne plus apprendre ni exercer son esprit critique."},
    {t:"Données personnelles", c:"Éthique", d:"Toute information qui identifie quelqu'un (nom, mail, notes, santé…). À ne pas saisir dans un outil grand public."},
    {t:"NotebookLM", c:"Outils", d:"Outil de Google qui répond à partir de tes propres documents sources. Il peut aussi produire fiches, flashcards ou résumés audio."},
    {t:"Perplexity", c:"Outils", d:"Moteur de réponse qui cherche sur le web et cite ses sources."},
    {t:"Agent personnalisé", c:"Outils", d:"Assistant configuré avec des consignes durables (par exemple un « agent tuteur ») au-dessus d'un LLM."}
  ],

  /* Enjeux éthiques */
  enjeux: [
    {t:"Hallucinations et désinformation", d:"Un LLM génère du texte vraisemblable, sans vérifier qu'il est vrai. Il peut inventer des références, des citations, des chiffres.", k:"Toute information importante se recoupe avec une source fiable."},
    {t:"Filtres et modération : le travail invisible", d:"Pour qu'une IA évite les contenus violents ou haineux, des data workers lisent et classent ces contenus, parfois dans des conditions difficiles et pour de faibles salaires.", k:"Derrière l'IA, il y a du travail humain."},
    {t:"Impact écologique", d:"Ordres de grandeur (estimations de chercheurs, très variables selon les modèles) : entraîner un grand modèle consomme des centaines à des milliers de MWh et des centaines de milliers de litres d'eau pour le refroidissement. Une requête isolée est faible (de l'ordre de quelques dixièmes de Wh, et quelques dizaines de ml d'eau), mais l'effet cumulé de milliards de requêtes est important.", k:"Pas d'IA pour tout : réserve-la aux usages utiles."},
    {t:"Protection des données", d:"Ce qu'on saisit peut être stocké et réutilisé. À ne jamais saisir : données personnelles (noms, mails, notes d'étudiants), travaux confidentiels, mots de passe, informations sensibles ou non publiques.", k:"Dans le doute, anonymise ou ne saisis pas."},
    {t:"Paresse intellectuelle et biais de confirmation", d:"Si l'IA fait le raisonnement à ma place, je n'apprends plus. Et si je lui demande de me donner raison, elle le fait volontiers.", k:"Demande à l'IA des contre-arguments, pas seulement de la validation."}
  ],

  /* Démarche d'utilisation intègre (7 étapes) */
  steps: [
    {t:"L'IAG est-elle autorisée ? Est-elle nécessaire ?", q:"Quelles sont les consignes de l'enseignant ou de l'établissement ? Puis-je faire sans ?"},
    {t:"Définir ma part de contribution", q:"Qu'est-ce que je fais moi-même et qu'est-ce que je délègue à l'outil ?"},
    {t:"Choisir l'outil adapté", q:"Ai-je besoin de sources web (Perplexity), de travailler sur mes documents (NotebookLM) ou de rédiger (ChatGPT, Gemini) ?"},
    {t:"Rédiger le prompt", q:"Rôle, contexte, tâche, format. Sans donnée personnelle."},
    {t:"Analyser la réponse", q:"Est-ce exact ? Les sources existent-elles ? Que manque-t-il ?"},
    {t:"Ajuster ou refaire soi-même", q:"Dois-je reformuler le prompt, corriger la réponse ou la refaire moi-même ?"},
    {t:"Garantir la transparence", q:"Ai-je indiqué où et comment j'ai utilisé l'IA ?"}
  ],

  /* Panorama des outils */
  tools: [
    {n:"ChatGPT", u:"Rédiger, reformuler, expliquer, brainstormer, créer des quiz.", f:["Très polyvalent","Dialogue fluide","Agents personnalisables"], l:["Hallucinations","Sources peu fiables sans recherche web","Données à protéger"]},
    {n:"Gemini", u:"Assistant généraliste de Google, intégré à l'écosystème Google.", f:["Polyvalent","Intégration Google","Multimodal"], l:["Hallucinations","Qualité variable selon les versions","Données à protéger"]},
    {n:"Perplexity", u:"Recherche d'informations avec réponses sourcées.", f:["Cite ses sources","Bon point de départ pour une recherche"], l:["Vérifier chaque source","Moins adapté à la création"]},
    {n:"NotebookLM", u:"Travailler à partir de mes documents : fiches de révision, flashcards, résumés, cartes mentales.", f:["Répond depuis tes sources","Idéal pour réviser"], l:["Limité aux documents fournis","Peut mal interpréter un document"]}
  ],

  /* Prompt Lab : champs et exemples (méthode Rôle + Contexte + Tâche + Format + Itération) */
  promptFields: [
    {k:"role", l:"Rôle", p:"Tu es un tuteur bienveillant en …"},
    {k:"ctx", l:"Contexte", p:"Mon tutoré est en 1re année de …"},
    {k:"task", l:"Tâche", p:"Reformule / simplifie / crée …"},
    {k:"fmt", l:"Format", p:"Tableau, liste de 5 points, 150 mots…"},
    {k:"iter", l:"Itération", p:"Propose-moi ensuite de l'ajuster."}
  ],
  promptExamples: [
    {n:"Reformuler une consigne", role:"Tu es un tuteur pédagogue qui explique simplement.", ctx:"Un étudiant de première année ne comprend pas la consigne d'exercice suivante : [coller la consigne, sans données personnelles].", task:"Reformule la consigne avec des mots simples, sans changer l'objectif ni donner la réponse.", fmt:"3 à 4 phrases, puis une liste des étapes à suivre.", iter:"Termine en me demandant quelles parties restent floues."},
    {n:"Simplifier un cours", role:"Tu es un professeur qui sait vulgariser.", ctx:"Je prépare une séance de tutorat sur [notion] pour des étudiants de L1.", task:"Explique cette notion avec une analogie du quotidien et un exemple.", fmt:"Maximum 200 mots, avec 3 mots-clés en gras.", iter:"Propose une version encore plus courte si je te le demande."},
    {n:"Créer un quiz de révision", role:"Tu es un concepteur de quiz pédagogiques.", ctx:"Voici l'extrait de cours à réviser : [coller le cours].", task:"Crée 5 questions à choix multiples basées uniquement sur ce texte.", fmt:"Pour chaque question : 4 options, la bonne réponse et une explication d'une ligne.", iter:"Demande-moi si je veux des questions plus difficiles."}
  ],

  /* Flashcards */
  flashcards: [
    {q:"IA", a:"Techniques permettant à une machine de réaliser des tâches associées à l'intelligence humaine."},
    {q:"Machine Learning", a:"La machine apprend à partir d'exemples plutôt que de suivre des règles écrites à la main."},
    {q:"Deep Learning", a:"Machine learning avec de grands réseaux de neurones à plusieurs couches."},
    {q:"LLM", a:"Modèle de langage entraîné sur d'énormes textes pour prédire la suite d'un texte."},
    {q:"Hallucination", a:"Réponse plausible mais fausse ou inventée par l'IA. Toujours vérifier."},
    {q:"Biais de confirmation", a:"Retenir ce qui confirme ce qu'on pense déjà. L'IA peut l'amplifier si on lui demande de nous donner raison."},
    {q:"Data workers", a:"Travailleurs qui annotent et modèrent les contenus pour entraîner et filtrer les IA : un travail invisible."},
    {q:"Méthode de prompt", a:"Rôle + Contexte + Tâche + Format + Itération."},
    {q:"Première question de la démarche intègre", a:"L'IA générative est-elle autorisée, et est-elle nécessaire ?"},
    {q:"Données à ne pas saisir", a:"Données personnelles, notes ou copies d'étudiants, travaux confidentiels, mots de passe."}
  ],

  /* Quiz : type = QCM | V/F ; a = index de la bonne réponse */
  quiz: [
    {type:"V/F", q:"Une IA générative comprend le sens de ses réponses comme un humain.", o:["Vrai","Faux"], a:1, e:"Faux : un LLM prédit les mots les plus probables à partir de ses données d'entraînement. Il peut donc être convaincant et se tromper."},
    {type:"QCM", q:"Qu'est-ce qu'une hallucination ?", o:["Une réponse plausible mais fausse ou inventée","Un bug d'affichage","Un refus de répondre","Un virus informatique"], a:0, e:"Une hallucination est une information inventée présentée avec assurance (fausses sources, faux chiffres). On la détecte en vérifiant."},
    {type:"V/F", q:"Je peux coller le mail d'un étudiant, avec son nom, dans un outil d'IA grand public pour le reformuler.", o:["Vrai","Faux"], a:1, e:"Faux : ce sont des données personnelles. Il faut les anonymiser, ou ne pas les saisir."},
    {type:"QCM", q:"Quelle affirmation sur l'impact écologique est la plus juste ?", o:["Une requête n'a aucun impact","Une requête pèse peu, mais l'effet cumulé et l'entraînement des modèles sont importants","Seul l'usage consomme de l'énergie, pas l'entraînement","L'IA fonctionne sans centres de données"], a:1, e:"Les ordres de grandeur sont variables, mais l'entraînement et les milliards de requêtes demandent beaucoup d'énergie et d'eau."},
    {type:"QCM", q:"Quel outil répond surtout à partir de TES documents sources ?", o:["NotebookLM","Perplexity","Un moteur de recherche classique","Aucun"], a:0, e:"NotebookLM travaille sur les documents que tu lui fournis. Perplexity cherche sur le web et cite ses sources."},
    {type:"V/F", q:"Les filtres de modération des IA fonctionnent sans aucune intervention humaine.", o:["Vrai","Faux"], a:1, e:"Faux : des data workers annotent et trient des contenus parfois très durs pour entraîner ces filtres."}
  ],

  /* Mises en situation : arbre de décision.
     Un nœud avec end:true est une fin avec débriefing + solution attendue. */
  scenarios: [
    {id:"devoir", title:"Un devoir 100 % IA", start:"a", nodes:{
      a:{t:"Ton tutoré te rend un devoir entièrement généré par IA, sans esprit critique. Que fais-tu ?", c:[["Je corrige les erreurs à sa place","b"],["Je le signale directement à l'enseignant, sans lui parler","c"],["Je lui demande comment il a utilisé l'outil","d"]]},
      b:{t:"Le devoir est meilleur, mais ton tutoré n'a rien appris et ne sait pas défendre ses réponses. Que fais-tu maintenant ?", c:[["Je change d'approche et je lui demande de m'expliquer sa démarche","d"]]},
      c:{end:true, title:"À éviter", t:"Tu romps la confiance, sans comprendre la situation. Ton tutoré ne saura pas ce qui pose problème.", sol:"Le tuteur accompagne : il ouvre d'abord la discussion avant toute escalade."},
      d:{t:"Il explique qu'il a tout copié par manque de temps. Que proposes-tu ?", c:[["Relire la réponse ensemble : vérifier les faits, repérer ce qui manque","e"],["Lui interdire d'utiliser l'IA","f"]]},
      e:{end:true, title:"Bonne démarche", t:"Il apprend à analyser la réponse et à garder sa part de travail.", sol:"Dialoguer sans juger, rappeler les règles d'utilisation, travailler l'esprit critique ensemble, définir la part de l'outil et la part de l'étudiant, puis garantir la transparence."},
      f:{end:true, title:"Peu efficace", t:"Une interdiction brute n'enseigne pas un usage responsable, et il risque de l'utiliser en cachette.", sol:"Mieux vaut cadrer l'usage : autorisé ou non, pour quoi faire, avec quelle transparence."}
    }},
    {id:"donnees", title:"Données confidentielles", start:"a", nodes:{
      a:{t:"Une tutorée veut coller dans ChatGPT la copie d'une camarade (avec son nom) pour obtenir des conseils. Que fais-tu ?", c:[["Je la laisse faire : c'est juste pour aider","b"],["Je lui explique le risque et propose d'anonymiser","c"],["Je lui dis d'arrêter d'utiliser l'IA","d"]]},
      b:{end:true, title:"À éviter", t:"Des données personnelles et un travail non public partent vers un service externe, sans accord de la personne concernée.", sol:"Ne jamais saisir de données personnelles ni de travaux d'autrui sans accord."},
      c:{end:true, title:"Bonne démarche", t:"Elle garde le bénéfice de l'outil tout en protégeant la camarade.", sol:"Retirer nom et éléments identifiants, ou ne saisir qu'un extrait impersonnel. Demander l'accord de la personne et vérifier les règles de l'établissement."},
      d:{end:true, title:"Trop radical", t:"Le problème, c'est la donnée saisie, pas l'outil en soi.", sol:"Expliquer pourquoi, plutôt qu'interdire : les règles de confidentialité sont la clé."}
    }}
  ]
};
