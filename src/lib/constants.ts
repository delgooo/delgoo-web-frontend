/**
 * Constants and configuration for the Delgoo website
 */

export const SITE_CONFIG = {
  name: "Delgoo",
  tagline: "Delivery Made Simple",
  description: "Shorten the distance in your city. Ship smart with someone who's already on the move.",
  colors: {
    blue: "#1F489F",
    gold: "#FFAB0C",
  },
} as const;

export const NAVIGATION = {
  sections: [
    { id: "home", label: "Home" },
    { id: "how-it-works", label: "How It Works" },
    { id: "benefits", label: "Benefits" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ],
} as const;

export const HOW_IT_WORKS = {
  title: "How It Works?",
  description: "Our app connects senders with local people already on the move for fast, easy, and secure deliveries within your city. Just create a shipment, find someone heading your way, and track your package until it reaches its destination — all from your phone.",
  steps: [
    {
      id: 1,
      title: "Create Shipment",
      description: "Enter pickup & delivery details, package info, and available times.",
    },
    {
      id: 2,
      title: "Someone on the Move Accepts",
      description: "A local person traveling your route accepts the delivery request.",
    },
    {
      id: 3,
      title: "Prepare Package",
      description: "Seal your package with the official QR code label and take a photo.",
    },
    {
      id: 4,
      title: "Pickup",
      description: "The person collects the package at the scheduled time and place.",
    },
    {
      id: 5,
      title: "Delivery in Progress",
      description: "Track their location and receive real-time updates.",
    },
    {
      id: 6,
      title: "Package Delivered",
      description: "Recipient confirms receipt with a secure code and final photo.",
    },
  ],
} as const;

export const BENEFITS = [
  {
    id: "time",
    title: "TIME",
    description: "No more waiting days — send and receive packages across your city in just a few hours.",
    icon: "⏱️",
  },
  {
    id: "pollution",
    title: "POLLUTION",
    description: "Deliveries happen during existing trips, reducing traffic and cutting CO₂ emissions.",
    icon: "🌱",
  },
  {
    id: "comfortable",
    title: "COMFORTABLE",
    description: "Send and receive packages without stepping outside — the app brings the city to your door.",
    icon: "🏠",
  },
  {
    id: "tracking",
    title: "TRACKING",
    description: "Follow every step of your package in real time, with photos and secure QR code scans.",
    icon: "📱",
  },
] as const;

export const FAQ_ITEMS = [
  {
    id: 1,
    question: "Who can use the app?",
    answer: "Anyone registered can send packages as a sender, accept deliveries if they're already on the move, or receive packages as a recipient. No special vehicles or licenses are required.",
  },
  {
    id: 2,
    question: "Do I need to leave home to send or receive?",
    answer: "Not necessarily. Shipments and pickups are scheduled for convenient times and places, with all coordination done easily through the app — no paperwork or unnecessary trips.",
  },
  {
    id: 3,
    question: "Can I track my package?",
    answer: "Yes! Both sender and recipient can track the delivery in real time if the delivery person's location is active. Photo updates and confirmations are also provided throughout the process.",
  },
  {
    id: 4,
    question: "When do I pay?",
    answer: "Payment is made only after the sender accepts the delivery proposal. The app holds the payment until the delivery is confirmed complete.",
  },
  {
    id: 5,
    question: "How is package security and integrity ensured?",
    answer: "Packages must be sealed with an official QR code label. Photos are taken during preparation, pickup, and delivery. If the seal is broken, responsibility may fall on whoever tampered with the package.",
  },
  {
    id: 6,
    question: "What if I'm not at the pickup location on time?",
    answer: "If you're not available at the scheduled pickup time, the delivery person will attempt to contact you. If no response is received within a reasonable time, the delivery may be cancelled and the package returned to the sender.",
  },
  {
    id: 7,
    question: "What happens if the recipient isn't available to receive the package?",
    answer: "The delivery person will try to contact them using the provided info. If an alternative drop-off is agreed (e.g., doorman, neighbor), responsibility passes to the recipient. Otherwise, the package is returned to the sender.",
  },
  {
    id: 8,
    question: "What if my package is damaged or lost?",
    answer: "All photos and evidence taken during the delivery process will be reviewed. Customer support evaluates the case to decide on refunds or penalties.",
  },
] as const; 