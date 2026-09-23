(function () {
  "use strict";

  const translations = {
    en: {
      title_home: "Singer Shamrock Enterprises — Ideas that empower",
      title_legal: "Legal notice — Singer Shamrock Enterprises",
      title_privacy: "Privacy — Singer Shamrock Enterprises",
      title_notfound: "Page not found — Singer Shamrock Enterprises",
      skip: "Skip to content",
      nav_label: "Primary navigation",
      language_label: "Choose language",
      legal_nav_label: "Legal information",
      nav_purpose: "Purpose",
      nav_realizations: "Realizations",
      nav_status: "Status",
      hero_eyebrow: "IDEAS · EMPOWERMENT · HARMONY",
      hero_title: "We give thinking new possibilities.",
      hero_lead: "Singer Shamrock develops original ideas that help people think more clearly, act more consciously and improve their lives independently — for the good of people, flora and fauna.",
      hero_principle: "We do not take thinking away. We create ideas that enable it.",
      status_aria: "Current brand status",
      status_label: "Brand of Pierre Christian Ulrich Singer EI",
      status_date: "SIRET en cours d’attribution",
      purpose_kicker: "OUR PRINCIPLE",
      purpose_title: "The idea chooses its form.",
      purpose_text: "A method, a digital tool, a book or a new kind of experience: Singer Shamrock begins with the idea and develops the form that serves it best.",
      projects_kicker: "REALIZATIONS",
      projects_title: "SSE ideas at work.",
      projects_intro: "Four independent projects. One shared principle: ideas should expand what people can do.",
      project_label: "REALIZATION OF AN SSE IDEA",
      bday_text: "A Singer Shamrock idea built around dates, patterns and personal discovery.",
      brats_text: "Mental-arithmetic training that rewards shortcuts, decomposition and flexible thinking instead of rigid calculation.",
      sinnbild_text: "A visual reflection method with 49 images and ten positions — not fortune-telling, but a change of perspective.",
      visit_bday: "bdaymethod.com — not yet linked",
      visit_brats: "Visit brats11.com",
      visit_sinnbild: "Visit sinnbild49.com",
      texthim_text: "A guided decision tool that helps women separate facts from anxiety and choose a respectful next step.",
      visit_texthim: "Visit texthimornot.com",
      status_kicker: "CURRENT STATUS",
      status_title: "A brand with a clearly identified operator.",
      status_text: "Singer Shamrock Enterprises is a brand of Pierre Christian Ulrich Singer, Entrepreneur individuel (EI). It is not a separate company or legal entity.",
      responsible_today: "Operator",
      legal_link: "Legal notice",
      privacy_link: "Privacy",
      back_home: "Back to home",
      legal_kicker: "TRANSPARENCY",
      legal_title: "Legal notice",
      legal_intro: "Legal information for Singer Shamrock Enterprises and its operator.",
      publisher_title: "Publisher, operator and person responsible",
      brand_identity_text: "Singer Shamrock Enterprises — a brand of Pierre Christian Ulrich Singer, Entrepreneur individuel (EI).",
      project_status_title: "Brand status",
      project_status_text: "Singer Shamrock Enterprises is a brand. It is not a separate company or legal entity.",
      content_responsibility_title: "Responsibility for content",
      content_responsibility_text: "Pierre Christian Ulrich Singer, Entrepreneur individuel (EI), is responsible for this website and its contents.",
      hosting_provider_title: "Hosting provider",
      hosting_provider_text: "GitHub, Inc., 88 Colin P. Kelly Jr. St., San Francisco, CA 94107, United States.",
      external_links_title: "External links",
      external_links_text: "This website links to independent websites. Their respective operators are responsible for their content and data processing.",
      copyright_title: "Copyright",
      copyright_text: "The names, visual identity and original contents published here may not be reproduced or used without permission, except where permitted by law.",
      privacy_kicker: "PRIVACY",
      privacy_title: "Privacy information",
      privacy_intro: "A concise explanation of what this website does — and does not — collect.",
      controller_title: "Person responsible",
      collection_title: "No tracking",
      collection_text: "This static website has no accounts, contact forms, advertising trackers or analytics. Its own code does not set cookies.",
      language_storage_title: "Language preference",
      language_storage_text: "Your selected language is stored only in your browser so the website can remember it. It is not transmitted to Singer Shamrock.",
      hosting_title: "Technical hosting data",
      hosting_text: "When a page is requested, the hosting provider may process technical access data such as IP address, time, requested file and browser information to deliver and protect the website.",
      hosting_policy_link: "GitHub privacy statement ↗",
      email_title: "Email contact",
      email_text: "If you contact us by email, the information you send is used to read and answer your message. The website itself does not store the message.",
      linked_sites_title: "Linked websites",
      linked_sites_text: "Other privacy rules may apply after you follow a link to BRATS 11, SINNBILD49, Text Him or Not, or another external website.",
      notfound_title: "This page does not exist.",
      notfound_text: "The idea may have moved. The home page is still here."
    },
    fr: {
      title_home: "Singer Shamrock Enterprises — Des idées qui donnent le pouvoir d’agir",
      title_legal: "Mentions légales — Singer Shamrock Enterprises",
      title_privacy: "Confidentialité — Singer Shamrock Enterprises",
      title_notfound: "Page introuvable — Singer Shamrock Enterprises",
      skip: "Aller au contenu",
      nav_label: "Navigation principale",
      language_label: "Choisir la langue",
      legal_nav_label: "Renseignements juridiques",
      nav_purpose: "Raison d’être",
      nav_realizations: "Réalisations",
      nav_status: "Statut",
      hero_eyebrow: "IDÉES · POUVOIR D’AGIR · HARMONIE",
      hero_title: "Nous ouvrons de nouvelles possibilités à la pensée.",
      hero_lead: "Singer Shamrock développe des idées originales qui aident les gens à penser plus clairement, à agir plus consciemment et à améliorer leur vie de façon autonome — au bénéfice des êtres humains, de la flore et de la faune.",
      hero_principle: "Nous ne pensons pas à la place des gens. Nous créons des idées qui leur donnent le pouvoir d’agir.",
      status_aria: "Statut actuel de la marque",
      status_label: "Marque de Pierre Christian Ulrich Singer EI",
      status_date: "SIRET en cours d’attribution",
      purpose_kicker: "NOTRE PRINCIPE",
      purpose_title: "L’idée choisit sa forme.",
      purpose_text: "Une méthode, un outil numérique, un livre ou une expérience nouvelle : Singer Shamrock part de l’idée et développe la forme qui la sert le mieux.",
      projects_kicker: "RÉALISATIONS",
      projects_title: "Des idées SSE en action.",
      projects_intro: "Quatre projets indépendants. Un principe commun : les idées devraient élargir ce que les gens peuvent accomplir.",
      project_label: "RÉALISATION D’UNE IDÉE SSE",
      bday_text: "Une idée Singer Shamrock construite autour des dates, des motifs et de la découverte personnelle.",
      brats_text: "Un entraînement au calcul mental qui valorise les raccourcis, la décomposition et la souplesse de la pensée plutôt que le calcul rigide.",
      sinnbild_text: "Une méthode de réflexion visuelle avec 49 images et dix positions — pas de la divination, mais un changement de perspective.",
      visit_bday: "bdaymethod.com — pas encore lié",
      visit_brats: "Visiter brats11.com",
      visit_sinnbild: "Visiter sinnbild49.com",
      texthim_text: "Un outil de décision guidé qui aide les femmes à distinguer les faits de l’anxiété et à choisir une prochaine étape respectueuse.",
      visit_texthim: "Visiter texthimornot.com",
      status_kicker: "STATUT ACTUEL",
      status_title: "Une marque avec un exploitant clairement identifié.",
      status_text: "Singer Shamrock Enterprises est une marque de Pierre Christian Ulrich Singer, Entrepreneur individuel (EI). Il ne s’agit pas d’une société ni d’une personne morale distincte.",
      responsible_today: "Exploitant",
      legal_link: "Mentions légales",
      privacy_link: "Confidentialité",
      back_home: "Retour à l’accueil",
      legal_kicker: "TRANSPARENCE",
      legal_title: "Mentions légales",
      legal_intro: "Renseignements juridiques concernant Singer Shamrock Enterprises et son exploitant.",
      publisher_title: "Éditeur, exploitant et responsable du contenu",
      brand_identity_text: "Singer Shamrock Enterprises — une marque de Pierre Christian Ulrich Singer, Entrepreneur individuel (EI).",
      project_status_title: "Statut de la marque",
      project_status_text: "Singer Shamrock Enterprises est une marque. Il ne s’agit pas d’une société ni d’une personne morale distincte.",
      content_responsibility_title: "Responsabilité du contenu",
      content_responsibility_text: "Pierre Christian Ulrich Singer, Entrepreneur individuel (EI), assume la responsabilité de ce site et de son contenu.",
      hosting_provider_title: "Hébergeur",
      hosting_provider_text: "GitHub, Inc., 88 Colin P. Kelly Jr. St., San Francisco, CA 94107, États-Unis.",
      external_links_title: "Liens externes",
      external_links_text: "Ce site contient des liens vers des sites indépendants. Leurs exploitants respectifs sont responsables de leur contenu et du traitement des données.",
      copyright_title: "Droits d’auteur",
      copyright_text: "Les noms, l’identité visuelle et les contenus originaux publiés ici ne peuvent pas être reproduits ou utilisés sans autorisation, sauf dans les cas permis par la loi.",
      privacy_kicker: "CONFIDENTIALITÉ",
      privacy_title: "Renseignements sur la confidentialité",
      privacy_intro: "Une explication concise de ce que ce site recueille — et ne recueille pas.",
      controller_title: "Personne responsable",
      collection_title: "Aucun suivi",
      collection_text: "Ce site statique n’a ni compte, ni formulaire de contact, ni traceur publicitaire, ni outil d’analyse. Son propre code ne crée aucun témoin de connexion.",
      language_storage_title: "Préférence linguistique",
      language_storage_text: "La langue choisie est conservée uniquement dans votre navigateur afin que le site puisse s’en souvenir. Elle n’est pas transmise à Singer Shamrock.",
      hosting_title: "Données techniques d’hébergement",
      hosting_text: "Lorsqu’une page est demandée, l’hébergeur peut traiter des données techniques d’accès, comme l’adresse IP, l’heure, le fichier demandé et des renseignements sur le navigateur, afin de fournir et de protéger le site.",
      hosting_policy_link: "Déclaration de confidentialité de GitHub ↗",
      email_title: "Contact par courriel",
      email_text: "Si vous communiquez avec nous par courriel, les renseignements envoyés servent à lire votre message et à y répondre. Le site lui-même ne conserve pas le message.",
      linked_sites_title: "Sites liés",
      linked_sites_text: "D’autres règles de confidentialité peuvent s’appliquer après l’ouverture d’un lien vers BRATS 11, SINNBILD49, Text Him or Not ou un autre site externe.",
      notfound_title: "Cette page n’existe pas.",
      notfound_text: "L’idée a peut-être déménagé. La page d’accueil est toujours ici."
    },
    de: {
      title_home: "Singer Shamrock Enterprises — Ideen, die befähigen",
      title_legal: "Impressum — Singer Shamrock Enterprises",
      title_privacy: "Datenschutz — Singer Shamrock Enterprises",
      title_notfound: "Seite nicht gefunden — Singer Shamrock Enterprises",
      skip: "Zum Inhalt springen",
      nav_label: "Hauptnavigation",
      language_label: "Sprache wählen",
      legal_nav_label: "Rechtliche Informationen",
      nav_purpose: "Leitidee",
      nav_realizations: "Realisierungen",
      nav_status: "Status",
      hero_eyebrow: "IDEEN · BEFÄHIGUNG · EINKLANG",
      hero_title: "Wir geben dem Denken neue Möglichkeiten.",
      hero_lead: "Singer Shamrock entwickelt eigenständige Ideen, die Menschen helfen, klarer zu denken, bewusster zu handeln und ihr Leben selbstbestimmt zu verbessern — zum Wohl von Mensch, Flora und Fauna.",
      hero_principle: "Wir nehmen Menschen das Denken nicht ab. Wir entwickeln Ideen, die sie befähigen.",
      status_aria: "Aktueller Markenstatus",
      status_label: "Marke von Pierre Christian Ulrich Singer EI",
      status_date: "SIRET en cours d’attribution",
      purpose_kicker: "UNSER PRINZIP",
      purpose_title: "Die Idee wählt ihre Form.",
      purpose_text: "Eine Methode, ein digitales Werkzeug, ein Buch oder eine neuartige Erfahrung: Singer Shamrock beginnt mit der Idee und entwickelt die Form, die ihr am besten dient.",
      projects_kicker: "REALISIERUNGEN",
      projects_title: "SSE-Ideen in der Anwendung.",
      projects_intro: "Vier eigenständige Projekte. Ein gemeinsames Prinzip: Ideen sollen erweitern, was Menschen selbst leisten können.",
      project_label: "REALISIERUNG EINER SSE-IDEE",
      bday_text: "Eine Singer-Shamrock-Idee rund um Daten, Muster und persönliche Entdeckung.",
      brats_text: "Kopfrechentraining, das Abkürzungen, Zerlegung und flexibles Denken belohnt statt stures Rechnen.",
      sinnbild_text: "Eine visuelle Reflexionsmethode mit 49 Bildern und zehn Positionen — keine Wahrsagerei, sondern ein Perspektivwechsel.",
      visit_bday: "bdaymethod.com — noch nicht verlinkt",
      visit_brats: "brats11.com besuchen",
      visit_sinnbild: "sinnbild49.com besuchen",
      texthim_text: "Ein geführtes Entscheidungstool, das Frauen hilft, Fakten von Ängsten zu trennen und einen respektvollen nächsten Schritt zu wählen.",
      visit_texthim: "texthimornot.com besuchen",
      status_kicker: "AKTUELLER STATUS",
      status_title: "Eine Marke mit klar benanntem Betreiber.",
      status_text: "Singer Shamrock Enterprises ist eine Marke von Pierre Christian Ulrich Singer, Entrepreneur individuel (EI). Sie ist weder eine eigenständige Gesellschaft noch eine eigene juristische Person.",
      responsible_today: "Betreiber",
      legal_link: "Impressum",
      privacy_link: "Datenschutz",
      back_home: "Zur Startseite",
      legal_kicker: "TRANSPARENZ",
      legal_title: "Impressum",
      legal_intro: "Rechtliche Angaben zu Singer Shamrock Enterprises und seinem Betreiber.",
      publisher_title: "Anbieter, Betreiber und inhaltlich Verantwortlicher",
      brand_identity_text: "Singer Shamrock Enterprises — eine Marke von Pierre Christian Ulrich Singer, Entrepreneur individuel (EI).",
      project_status_title: "Markenstatus",
      project_status_text: "Singer Shamrock Enterprises ist eine Marke. Sie ist weder eine eigenständige Gesellschaft noch eine eigene juristische Person.",
      content_responsibility_title: "Verantwortung für Inhalte",
      content_responsibility_text: "Pierre Christian Ulrich Singer, Entrepreneur individuel (EI), ist für diese Website und ihre Inhalte verantwortlich.",
      hosting_provider_title: "Hostinganbieter",
      hosting_provider_text: "GitHub, Inc., 88 Colin P. Kelly Jr. St., San Francisco, CA 94107, Vereinigte Staaten.",
      external_links_title: "Externe Links",
      external_links_text: "Diese Website verlinkt auf unabhängige Websites. Für deren Inhalte und Datenverarbeitung sind die jeweiligen Betreiber verantwortlich.",
      copyright_title: "Urheberrecht",
      copyright_text: "Die hier veröffentlichten Namen, die visuelle Identität und die eigenständigen Inhalte dürfen ohne Erlaubnis nicht vervielfältigt oder verwendet werden, soweit es das Gesetz nicht ausdrücklich gestattet.",
      privacy_kicker: "DATENSCHUTZ",
      privacy_title: "Datenschutzhinweise",
      privacy_intro: "Eine kurze Erklärung dazu, was diese Website erhebt — und was nicht.",
      controller_title: "Verantwortliche Person",
      collection_title: "Kein Tracking",
      collection_text: "Diese statische Website besitzt keine Konten, Kontaktformulare, Werbetracker oder Analysedienste. Der eigene Seitencode setzt keine Cookies.",
      language_storage_title: "Sprachauswahl",
      language_storage_text: "Die gewählte Sprache wird ausschließlich in deinem Browser gespeichert, damit die Website sie behalten kann. Sie wird nicht an Singer Shamrock übertragen.",
      hosting_title: "Technische Hosting-Daten",
      hosting_text: "Beim Aufruf einer Seite kann der Hostinganbieter technische Zugriffsdaten wie IP-Adresse, Zeitpunkt, angeforderte Datei und Browserinformationen verarbeiten, um die Website auszuliefern und zu schützen.",
      hosting_policy_link: "Datenschutzerklärung von GitHub ↗",
      email_title: "Kontakt per E-Mail",
      email_text: "Wenn du per E-Mail Kontakt aufnimmst, werden die übersandten Informationen verwendet, um deine Nachricht zu lesen und zu beantworten. Die Website selbst speichert die Nachricht nicht.",
      linked_sites_title: "Verlinkte Websites",
      linked_sites_text: "Nach dem Öffnen eines Links zu BRATS 11, SINNBILD49, Text Him or Not oder einer anderen externen Website können andere Datenschutzregeln gelten.",
      notfound_title: "Diese Seite gibt es nicht.",
      notfound_text: "Vielleicht ist die Idee umgezogen. Die Startseite ist weiterhin da."
    }
  };

  const validLanguages = new Set(Object.keys(translations));
  const page = document.body.dataset.page || "home";
  const languageButtons = Array.from(document.querySelectorAll("[data-language]"));

  function preferredLanguage() {
    const queryLanguage = new URLSearchParams(window.location.search).get("lang");
    if (validLanguages.has(queryLanguage)) return queryLanguage;

    try {
      const storedLanguage = window.localStorage.getItem("sse-language");
      if (validLanguages.has(storedLanguage)) return storedLanguage;
    } catch (_) {
      // The page works normally when browser storage is unavailable.
    }

    return "en";
  }

  function translate(language, updateUrl) {
    const dictionary = translations[language] || translations.en;
    document.documentElement.lang = language;
    document.body.dataset.lang = language;
    document.title = dictionary[`title_${page}`] || dictionary.title_home;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = dictionary[element.dataset.i18n];
      if (typeof value === "string") element.textContent = value;
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      const value = dictionary[element.dataset.i18nAria];
      if (typeof value === "string") element.setAttribute("aria-label", value);
    });

    languageButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === language));
    });

    try {
      window.localStorage.setItem("sse-language", language);
    } catch (_) {
      // Language still changes for the current page.
    }

    if (updateUrl) {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", language);
      window.history.replaceState({}, "", url);
    }

    document.querySelectorAll("a.preserve-lang").forEach((link) => {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:")) return;
      const target = new URL(href, window.location.href);
      target.searchParams.set("lang", language);
      link.setAttribute("href", `${target.pathname.split("/").pop() || "index.html"}?${target.searchParams.toString()}${target.hash}`);
    });
  }

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => translate(button.dataset.language, true));
  });

  const today = new Date();
  const isVonSteubenDay = today.getMonth() === 8 && today.getDate() === 17;
  document.querySelectorAll("[data-von-steuben]").forEach((banner) => {
    banner.hidden = !isVonSteubenDay;
  });
  document.querySelectorAll("[data-holiday-year]").forEach((element) => {
    element.textContent = String(today.getFullYear());
  });
  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = String(today.getFullYear());
  });

  translate(preferredLanguage(), false);
})();
