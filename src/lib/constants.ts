export type Lang = 'en' | 'it';
export type Bilingual = { en: string; it: string };

export const BASE_PATH = process.env.NODE_ENV === 'production' ? '/delgoo-web-frontend' : '';

export const SITE_CONFIG = {
  name: "Delgoo",
  colors: {
    blue: "#1F489F",
    gold: "#FFAB0C",
  },
} as const;

export const NAVIGATION = {
  sections: [
    { id: "home", label: { en: "Home", it: "Home" } },
    { id: "how-it-works", label: { en: "How It Works", it: "Come Funziona" } },
    { id: "benefits", label: { en: "Benefits", it: "Vantaggi" } },
    { id: "faq", label: { en: "FAQ", it: "FAQ" } },
    { id: "contact", label: { en: "Contact", it: "Contatti" } },
  ],
} as const;

export const HERO = {
  tagline: {
    en: "Send anything.\nThrough anyone.",
    it: "Spedisci qualsiasi cosa.\nAttraverso chiunque.",
  },
  description: {
    en: "Peer-to-peer city delivery. Someone's already going your way.",
    it: "Consegne urbane peer-to-peer. Qualcuno sta già andando nella tua direzione.",
  },
  launch: {
    en: "Launching Milan — Spring 2026",
    it: "Lancio Milano — Primavera 2026",
  },
} as const;

export const HOW_IT_WORKS = {
  title: { en: "How It Works", it: "Come Funziona" },
  description: {
    en: "Our app connects senders with local people already on the move for fast, easy, and secure deliveries within your city.",
    it: "La nostra app connette i mittenti con persone del posto già in movimento per consegne veloci, facili e sicure nella tua città.",
  },
  steps: [
    {
      id: 1,
      title: { en: "Create Shipment", it: "Crea Spedizione" },
      description: {
        en: "Enter pickup & delivery details, package info, and available times.",
        it: "Inserisci i dettagli di ritiro e consegna, info sul pacco e gli orari disponibili.",
      },
    },
    {
      id: 2,
      title: { en: "Someone Accepts", it: "Qualcuno Accetta" },
      description: {
        en: "A local person traveling your route accepts the delivery request.",
        it: "Una persona in zona che percorre la tua stessa strada accetta la richiesta.",
      },
    },
    {
      id: 3,
      title: { en: "Prepare Package", it: "Prepara il Pacco" },
      description: {
        en: "Seal your package with the official QR code label and take a photo.",
        it: "Sigilla il pacco con l'etichetta QR ufficiale e scatta una foto.",
      },
    },
    {
      id: 4,
      title: { en: "Pickup", it: "Ritiro" },
      description: {
        en: "The person collects the package at the scheduled time and place.",
        it: "La persona ritira il pacco all'orario e nel luogo concordati.",
      },
    },
    {
      id: 5,
      title: { en: "In Transit", it: "In Transito" },
      description: {
        en: "Track their location and receive real-time updates.",
        it: "Segui la posizione e ricevi aggiornamenti in tempo reale.",
      },
    },
    {
      id: 6,
      title: { en: "Delivered", it: "Consegnato" },
      description: {
        en: "Recipient confirms receipt with a secure code and final photo.",
        it: "Il destinatario conferma la ricezione con codice sicuro e foto finale.",
      },
    },
  ],
} as const;

export const STATS = [
  {
    id: "sameday",
    value: { en: "Same-day", it: "In giornata" },
    label: { en: "delivery", it: "consegna" },
    description: {
      en: "Packages ride with people already going your way",
      it: "I pacchi viaggiano con persone che stanno già andando nella tua direzione",
    },
  },
  {
    id: "zero",
    value: { en: "Zero extra", it: "Zero veicoli" },
    label: { en: "vehicles", it: "in più" },
    description: {
      en: "No new cars on the road",
      it: "Nessuna nuova auto in strada",
    },
  },
  {
    id: "tracked",
    value: { en: "100%", it: "100%" },
    label: { en: "tracked", it: "tracciato" },
    description: {
      en: "Every step verified with photos and QR codes",
      it: "Ogni passaggio verificato con foto e codici QR",
    },
  },
] as const;

export const BENEFITS = [
  {
    id: "fast",
    icon: "zap",
    metric: { en: "30", it: "30" },
    metricLabel: { en: "min", it: "min" },
    title: { en: "Fast", it: "Veloce" },
    description: {
      en: "No more waiting days. Send and receive packages across your city in just a few hours.",
      it: "Basta aspettare giorni. Spedisci e ricevi pacchi in città in poche ore.",
    },
    highlight: { en: "a few hours", it: "poche ore" },
  },
  {
    id: "eco",
    icon: "leaf",
    metric: { en: "0", it: "0" },
    metricLabel: { en: "extra vehicles", it: "veicoli extra" },
    title: { en: "Eco-Friendly", it: "Ecologico" },
    description: {
      en: "Deliveries happen during existing trips, reducing traffic and cutting CO\u2082 emissions.",
      it: "Le consegne avvengono durante viaggi già previsti, riducendo traffico ed emissioni di CO\u2082.",
    },
    highlight: { en: "existing trips", it: "viaggi già previsti" },
  },
  {
    id: "convenient",
    icon: "package",
    metric: { en: "24/7", it: "24/7" },
    metricLabel: { en: "anytime", it: "sempre" },
    title: { en: "Convenient", it: "Comodo" },
    description: {
      en: "Send and receive packages without stepping outside. The app brings the city to your door.",
      it: "Spedisci e ricevi pacchi senza uscire di casa. L'app porta la città a casa tua.",
    },
    highlight: { en: "without stepping outside", it: "senza uscire di casa" },
  },
  {
    id: "tracked",
    icon: "mapPin",
    metric: { en: "100", it: "100" },
    metricLabel: { en: "%", it: "%" },
    title: { en: "Tracked", it: "Tracciato" },
    description: {
      en: "Follow every step of your package in real time, with photos and secure QR code scans.",
      it: "Segui ogni passaggio del tuo pacco in tempo reale, con foto e scansioni QR sicure.",
    },
    highlight: { en: "real time", it: "tempo reale" },
  },
] as const;

export const FAQ_ITEMS = [
  {
    id: 1,
    question: { en: "Who can use the app?", it: "Chi può usare l'app?" },
    answer: {
      en: "Anyone registered can send packages as a sender, accept deliveries if they're already on the move, or receive packages as a recipient. No special vehicles or licenses are required.",
      it: "Chiunque sia registrato può inviare pacchi come mittente, accettare consegne se è già in movimento, o ricevere pacchi come destinatario. Non servono veicoli o licenze speciali.",
    },
  },
  {
    id: 2,
    question: { en: "Do I need to leave home to send or receive?", it: "Devo uscire di casa per spedire o ricevere?" },
    answer: {
      en: "Not necessarily. Shipments and pickups are scheduled for convenient times and places, with all coordination done easily through the app.",
      it: "Non necessariamente. Le spedizioni e i ritiri sono programmati in orari e luoghi comodi, con tutto il coordinamento gestito facilmente tramite l'app.",
    },
  },
  {
    id: 3,
    question: { en: "Can I track my package?", it: "Posso tracciare il mio pacco?" },
    answer: {
      en: "Yes! Both sender and recipient can track the delivery in real time. Photo updates and confirmations are provided throughout the process.",
      it: "Sì! Sia il mittente che il destinatario possono tracciare la consegna in tempo reale. Aggiornamenti fotografici e conferme vengono forniti durante tutto il processo.",
    },
  },
  {
    id: 4,
    question: { en: "When do I pay?", it: "Quando pago?" },
    answer: {
      en: "Payment is made only after the sender accepts the delivery proposal. The app holds the payment until the delivery is confirmed complete.",
      it: "Il pagamento avviene solo dopo che il mittente accetta la proposta di consegna. L'app trattiene il pagamento fino a conferma della consegna.",
    },
  },
  {
    id: 5,
    question: { en: "How is package security ensured?", it: "Come viene garantita la sicurezza del pacco?" },
    answer: {
      en: "Packages must be sealed with an official QR code label. Photos are taken during preparation, pickup, and delivery. If the seal is broken, responsibility may fall on whoever tampered with the package.",
      it: "I pacchi devono essere sigillati con un'etichetta QR ufficiale. Le foto vengono scattate durante la preparazione, il ritiro e la consegna. Se il sigillo viene rotto, la responsabilità ricade su chi ha manomesso il pacco.",
    },
  },
  {
    id: 6,
    question: { en: "What if I'm not at the pickup location on time?", it: "Cosa succede se non sono al punto di ritiro in orario?" },
    answer: {
      en: "The delivery person will attempt to contact you. If no response is received within a reasonable time, the delivery may be cancelled and the package returned to the sender.",
      it: "Il corriere cercherà di contattarti. Se non riceve risposta entro un tempo ragionevole, la consegna potrebbe essere annullata e il pacco restituito al mittente.",
    },
  },
  {
    id: 7,
    question: { en: "What if the recipient isn't available?", it: "Cosa succede se il destinatario non è disponibile?" },
    answer: {
      en: "The delivery person will try to contact them. If an alternative drop-off is agreed (e.g., doorman, neighbor), responsibility passes to the recipient. Otherwise, the package is returned to the sender.",
      it: "Il corriere cercherà di contattarlo. Se si concorda un punto di consegna alternativo (es. portiere, vicino), la responsabilità passa al destinatario. Altrimenti il pacco viene restituito al mittente.",
    },
  },
  {
    id: 8,
    question: { en: "What if my package is damaged or lost?", it: "Cosa succede se il mio pacco viene danneggiato o perso?" },
    answer: {
      en: "All photos and evidence taken during the delivery process will be reviewed. Customer support evaluates the case to decide on refunds or penalties.",
      it: "Tutte le foto e le prove raccolte durante il processo di consegna verranno esaminate. Il supporto clienti valuta il caso per decidere su rimborsi o penalità.",
    },
  },
] as const;

export const CONTACT = {
  title: { en: "Contact Us", it: "Contattaci" },
  subtitle: {
    en: "Get in touch with our team for support, partnerships, or any questions",
    it: "Contatta il nostro team per supporto, partnership o qualsiasi domanda",
  },
  form: {
    name: { en: "Name", it: "Nome" },
    email: { en: "Email", it: "Email" },
    subject: { en: "Subject", it: "Oggetto" },
    message: { en: "Message", it: "Messaggio" },
    send: { en: "Send Message", it: "Invia Messaggio" },
    namePlaceholder: { en: "Your name", it: "Il tuo nome" },
    emailPlaceholder: { en: "your@email.com", it: "tua@email.com" },
    messagePlaceholder: { en: "Your message...", it: "Il tuo messaggio..." },
    subjectOptions: {
      default: { en: "Select a subject", it: "Seleziona un oggetto" },
      general: { en: "General Inquiry", it: "Richiesta Generale" },
      support: { en: "Technical Support", it: "Supporto Tecnico" },
      partnership: { en: "Partnership", it: "Partnership" },
      feedback: { en: "Feedback", it: "Feedback" },
    },
  },
  info: {
    email: "support@delgoo.com",
    getInTouch: { en: "Get in Touch", it: "Contattaci" },
    getInTouchDesc: {
      en: "We're here to help and answer any questions you might have.",
      it: "Siamo qui per aiutarti e rispondere a qualsiasi domanda.",
    },
    followUs: { en: "Follow Us", it: "Seguici" },
    sendMessage: { en: "Send us a Message", it: "Inviaci un Messaggio" },
  },
} as const;

export const FOOTER = {
  tagline: {
    en: "Delivery, simplified.",
    it: "Consegne, semplificate.",
  },
  links: {
    privacy: { en: "Privacy Policy", it: "Privacy Policy" },
    terms: { en: "Terms of Service", it: "Termini di Servizio" },
    cookies: { en: "Cookie Policy", it: "Cookie Policy" },
  },
} as const;
