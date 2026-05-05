export type Lang = "es" | "en";

export const ui: Record<
  string,
  { en: string; es: string }
> = {
  // Welcome
  churchName: {
    en: "New Life Bronx",
    es: "New Life Bronx",
  },
  tagline: {
    en: "Growth Track",
    es: "Pasos de Crecimiento",
  },
  welcomeDesc: {
    en: "Discover how God has uniquely wired you — your personality, spiritual gifts, and where you can serve on the Dream Team.",
    es: "Descubre cómo Dios te ha diseñado de manera única — tu personalidad, dones espirituales, y dónde puedes servir en el Dream Team.",
  },
  begin: {
    en: "Begin",
    es: "Comenzar",
  },
  questionCount: {
    en: "92 Questions • ~15 min",
    es: "92 Preguntas • ~15 min",
  },

  // Quiz
  quizTitle: {
    en: "Growth Track Quiz",
    es: "Evaluación de Crecimiento",
  },
  questionOf: {
    en: "of",
    es: "de",
  },
  next: {
    en: "Next",
    es: "Siguiente",
  },
  previous: {
    en: "Previous",
    es: "Anterior",
  },
  submit: {
    en: "See My Results",
    es: "Ver Mis Resultados",
  },
  pleaseAnswer: {
    en: "Please answer this question before continuing.",
    es: "Por favor responde esta pregunta antes de continuar.",
  },

  // Scale labels
  never: { en: "Never", es: "Nunca" },
  rarely: { en: "Rarely", es: "Casi nunca" },
  sometimes: { en: "Sometimes", es: "A veces" },
  often: { en: "Often", es: "Seguido" },
  always: { en: "Always", es: "Siempre" },

  // Results
  resultsTitle: {
    en: "Your Results",
    es: "Tus Resultados",
  },
  personalityType: {
    en: "Personality Type",
    es: "Tipo de Personalidad",
  },
  topGifts: {
    en: "Your Top 3 Spiritual Gifts",
    es: "Tus 3 Principales Dones Espirituales",
  },
  dreamTeam: {
    en: "Recommended Dream Team",
    es: "Dream Team Recomendado",
  },
  dreamTeamDesc: {
    en: "Based on your gifts and personality, we recommend:",
    es: "Basado en tus dones y personalidad, te recomendamos:",
  },
  retake: {
    en: "Retake Quiz",
    es: "Repetir Evaluación",
  },
  share: {
    en: "Share Results",
    es: "Compartir Resultados",
  },
  scoreLabel: {
    en: "Score",
    es: "Puntuación",
  },
};

// DISC type descriptions
export const discDescriptions: Record<
  string,
  { en: { name: string; desc: string }; es: { name: string; desc: string } }
> = {
  D: {
    en: {
      name: "Dominant",
      desc: "You are assertive, results-oriented, and driven by challenge. You thrive when leading and making things happen.",
    },
    es: {
      name: "Dominante",
      desc: "Eres asertivo/a, orientado/a a resultados, y motivado/a por los desafíos. Te desarrollas liderando y haciendo que las cosas sucedan.",
    },
  },
  I: {
    en: {
      name: "Influential",
      desc: "You are enthusiastic, optimistic, and thrive in social settings. You inspire and influence those around you.",
    },
    es: {
      name: "Influyente",
      desc: "Eres entusiasta, optimista, y te desarrollas en ambientes sociales. Inspiras e influencias a los que te rodean.",
    },
  },
  S: {
    en: {
      name: "Steady",
      desc: "You are patient, reliable, and a great team player. You value stability and create harmony in your environment.",
    },
    es: {
      name: "Estable",
      desc: "Eres paciente, confiable, y un excelente miembro de equipo. Valoras la estabilidad y creas armonía en tu entorno.",
    },
  },
  C: {
    en: {
      name: "Conscientious",
      desc: "You are detail-oriented, analytical, and value quality. You set high standards and ensure accuracy in everything you do.",
    },
    es: {
      name: "Concienzudo",
      desc: "Eres orientado/a al detalle, analítico/a, y valoras la calidad. Estableces altos estándares y aseguras la precisión en todo lo que haces.",
    },
  },
};

// Gift names in both languages
export const giftNames: Record<string, { en: string; es: string }> = {
  A: { en: "Administration", es: "Administración" },
  B: { en: "Apostleship", es: "Apostolado" },
  C: { en: "Craftsmanship", es: "Artesanía" },
  D: { en: "Discernment", es: "Discernimiento" },
  E: { en: "Evangelism", es: "Evangelismo" },
  F: { en: "Exhortation", es: "Exhortación" },
  G: { en: "Faith", es: "Fe" },
  H: { en: "Giving", es: "Generosidad" },
  I: { en: "Healing", es: "Sanidad" },
  J: { en: "Helps", es: "Ayuda" },
  K: { en: "Hospitality", es: "Hospitalidad" },
  L: { en: "Intercession", es: "Intercesión" },
  M: { en: "Knowledge", es: "Conocimiento" },
  N: { en: "Leadership", es: "Liderazgo" },
  O: { en: "Mercy", es: "Misericordia" },
  P: { en: "Miracles", es: "Milagros" },
  Q: { en: "Missionary", es: "Misionero" },
  R: { en: "Music/Worship", es: "Música/Adoración" },
  S: { en: "Pastor/Shepherd", es: "Pastor" },
  T: { en: "Prophecy", es: "Profecía" },
  U: { en: "Service", es: "Servicio" },
  V: { en: "Teaching", es: "Enseñanza" },
  W: { en: "Tongues", es: "Lenguas" },
  X: { en: "Wisdom", es: "Sabiduría" },
};

// Gift descriptions
export const giftDescriptions: Record<string, { en: string; es: string }> = {
  A: {
    en: "The ability to organize and manage people and resources effectively for God's purposes.",
    es: "La capacidad de organizar y gestionar personas y recursos de manera efectiva para los propósitos de Dios.",
  },
  B: {
    en: "The calling to start new works and pioneer new ministry frontiers for the Kingdom.",
    es: "El llamado a iniciar nuevas obras y ser pionero en nuevas fronteras ministeriales para el Reino.",
  },
  C: {
    en: "The skill to use your hands to build, create, and serve the church in practical ways.",
    es: "La habilidad de usar tus manos para construir, crear y servir a la iglesia de maneras prácticas.",
  },
  D: {
    en: "The ability to perceive spiritual truth and distinguish between right and wrong motives.",
    es: "La capacidad de percibir la verdad espiritual y distinguir entre motivos correctos e incorrectos.",
  },
  E: {
    en: "A passion for sharing the Good News and leading others to faith in Christ.",
    es: "Una pasión por compartir las Buenas Nuevas y guiar a otros a la fe en Cristo.",
  },
  F: {
    en: "The ability to encourage, comfort, and motivate others toward spiritual growth.",
    es: "La capacidad de animar, consolar y motivar a otros hacia el crecimiento espiritual.",
  },
  G: {
    en: "An extraordinary confidence in God's promises and power to accomplish His will.",
    es: "Una confianza extraordinaria en las promesas y el poder de Dios para cumplir Su voluntad.",
  },
  H: {
    en: "A joyful willingness to contribute finances and resources beyond the tithe for Kingdom work.",
    es: "Una disposición gozosa de contribuir finanzas y recursos más allá del diezmo para la obra del Reino.",
  },
  I: {
    en: "The faith and power to be used by God as an instrument of healing for others.",
    es: "La fe y el poder para ser usado por Dios como instrumento de sanidad para otros.",
  },
  J: {
    en: "A heart for supporting and assisting others in ministry, often behind the scenes.",
    es: "Un corazón para apoyar y asistir a otros en el ministerio, a menudo tras bastidores.",
  },
  K: {
    en: "The ability to make people feel welcomed, at home, and cared for in any setting.",
    es: "La capacidad de hacer que las personas se sientan bienvenidas, como en casa y cuidadas.",
  },
  L: {
    en: "A deep commitment to prayer and standing in the gap for others before God.",
    es: "Un profundo compromiso con la oración e interceder por otros ante Dios.",
  },
  M: {
    en: "The desire and ability to study, understand, and share deep truths from Scripture.",
    es: "El deseo y la capacidad de estudiar, comprender y compartir verdades profundas de las Escrituras.",
  },
  N: {
    en: "The ability to cast vision, motivate, and guide others toward a common goal.",
    es: "La capacidad de proyectar visión, motivar y guiar a otros hacia una meta común.",
  },
  O: {
    en: "A deep compassion that moves you to action to help those who are suffering.",
    es: "Una profunda compasión que te mueve a la acción para ayudar a quienes sufren.",
  },
  P: {
    en: "The faith to expect and witness God's supernatural interventions in daily life.",
    es: "La fe para esperar y presenciar las intervenciones sobrenaturales de Dios en la vida diaria.",
  },
  Q: {
    en: "A calling to share the gospel cross-culturally and reach people of different nations.",
    es: "Un llamado a compartir el evangelio a través de culturas y alcanzar personas de diferentes naciones.",
  },
  R: {
    en: "A devotion to glorifying God through musical skill and leading others in worship.",
    es: "Una devoción a glorificar a Dios a través de la habilidad musical y guiar a otros en la adoración.",
  },
  S: {
    en: "The calling to nurture, guide, and care for a group of believers in their spiritual walk.",
    es: "El llamado a nutrir, guiar y cuidar a un grupo de creyentes en su camino espiritual.",
  },
  T: {
    en: "The boldness to speak God's truth and call His people to righteousness.",
    es: "La valentía de hablar la verdad de Dios y llamar a Su pueblo a la rectitud.",
  },
  U: {
    en: "A readiness to use your time and energy to meet practical needs and serve joyfully.",
    es: "Una disposición de usar tu tiempo y energía para suplir necesidades prácticas y servir con gozo.",
  },
  V: {
    en: "The ability to explain and apply Scripture in ways that help others learn and grow.",
    es: "La capacidad de explicar y aplicar las Escrituras de maneras que ayudan a otros a aprender y crecer.",
  },
  W: {
    en: "The gift of speaking and praying in a heavenly language as empowered by the Spirit.",
    es: "El don de hablar y orar en un lenguaje celestial como lo faculta el Espíritu.",
  },
  X: {
    en: "The ability to apply spiritual truth and godly insight to life's decisions and situations.",
    es: "La capacidad de aplicar la verdad espiritual y la perspectiva divina a las decisiones y situaciones de la vida.",
  },
};
