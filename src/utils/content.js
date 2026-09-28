import { FaRocket, FaUsers, FaCode, FaHeart } from "react-icons/fa";

const features = [
  {
    icon: "✦",
    title: "Modern Design",
    description:
      "Clean, beautiful interfaces designed to make your product feel premium and memorable.",
  },
  {
    icon: "⚡",
    title: "Fast Performance",
    description:
      "Lightning-fast experiences optimized for performance, accessibility, and scalability.",
  },
  {
    icon: "◈",
    title: "Fully Responsive",
    description:
      "Every experience looks great across phones, tablets, laptops, and large screens.",
  },
  {
    icon: "◎",
    title: "Built to Scale",
    description:
      "Flexible solutions built with a strong foundation so your product can grow with you.",
  },
];

const plans = [
  {
    name: "Starter",
    description: "Perfect for individuals and small projects.",
    monthly: 19,
    yearly: 15,
    features: [
      "1 Project",
      "Basic analytics",
      "Email support",
      "5 GB storage",
      "Basic integrations",
    ],
    popular: false,
  },
  {
    name: "Pro",
    description: "Everything you need to grow your business.",
    monthly: 49,
    yearly: 39,
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "50 GB storage",
      "Advanced integrations",
      "Custom domains",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Powerful solutions for larger teams.",
    monthly: 99,
    yearly: 79,
    features: [
      "Unlimited everything",
      "Advanced security",
      "Dedicated support",
      "500 GB storage",
      "Custom integrations",
      "Team management",
    ],
    popular: false,
  },
];

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "High-performance websites and web applications built with modern technologies.",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "Intuitive interfaces and thoughtful user experiences that turn visitors into customers.",
  },
  {
    number: "03",
    title: "Brand Identity",
    description:
      "Distinctive visual identities that communicate your story and make your brand recognizable.",
  },
];

const stats = [
  { value: "50+", label: "Projects delivered" },
  { value: "98%", label: "Client satisfaction" },
  { value: "5+", label: "Years experience" },
  { value: "24/7", label: "Support available" },
];

const testimonials = [
  {
    quote:
      "They completely transformed how we present our brand online. The result feels premium, fast, and incredibly easy to use.",
    name: "Alex Morgan",
    role: "Founder, Vertex",
  },
  {
    quote:
      "The attention to detail was incredible. We launched faster than expected and immediately started seeing better engagement.",
    name: "Sarah Chen",
    role: "Product Lead, Orbit",
  },
  {
    quote:
      "Exactly the kind of creative and technical partner we needed. The final product exceeded our expectations.",
    name: "Daniel Ross",
    role: "CEO, Northstar",
  },
];

// about page
const aboutValues = [
  {
    icon: FaRocket,
    title: "Innovation",
    description:
      "We constantly explore new ideas and technologies to create better digital experiences.",
  },
  {
    icon: FaUsers,
    title: "Collaboration",
    description:
      "Great products are built together. We believe in teamwork, communication, and shared ideas.",
  },
  {
    icon: FaCode,
    title: "Quality",
    description:
      "From design to development, we care about every detail and aim for exceptional quality.",
  },
  {
    icon: FaHeart,
    title: "People First",
    description:
      "Our work is ultimately about people. We build experiences that are useful, accessible, and enjoyable.",
  },
];

const aboutStats = [
  { value: "50+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5+", label: "Years Experience" },
  { value: "24/7", label: "Support" },
];

export {
  features,
  plans,
  services,
  stats,
  testimonials,
  aboutValues,
  aboutStats,
};
