import authstack from "../assets/thumbnails/authstack.webp";
import bigFarma from "../assets/thumbnails/bigFarma.webp";
import ecommerceProduct from "../assets/thumbnails/sneaker.webp";
import InstaSpots from "../assets/thumbnails/instaspots.webp";
import interactiveCard from "../assets/thumbnails/interactiveCard.webp";
import spaceTravel from "../assets/thumbnails/spaceTravel.webp";
import Todo from "../assets/thumbnails/todoapp.webp";
import velora from "../assets/thumbnails/velora.webp";
import premiumCoffee from "../assets/thumbnails/premiumCoffee.svg";

interface Project {
  thumbNail: string;
  name: string;
  description: string;
  tools: string[];
  liveLink?: string;
  repoLink?: string;
}

export const projects: Project[] = [
  {
    thumbNail: premiumCoffee,
    name: "Premium Coffee Storefront",
    description: "A polished, responsive coffee e-commerce storefront designed around premium product presentation, intuitive shopping flows, and a refined editorial retail experience.",
    tools: ["Next.js", "React", "TypeScript", "CSS", "Lucide"],
    liveLink: "https://premium-coffee-storefront.vercel.app/",
    repoLink: "https://github.com/iranloyehannah/premium-coffee-storefront",
  },
  {
    thumbNail: authstack,
    name: "AuthStack",
    description: "A full-stack authentication experience exploring production-style sign-in flows, protected routes, persistence, and secure credential handling.",
    tools: ["Next.js", "TypeScript", "NextAuth.js", "Prisma", "Neon", "Bcrypt"],
    repoLink: "https://github.com/Nesix-org/authstack",
  },
  {
    thumbNail: velora,
    name: "Velora",
    description: "A modern e-commerce platform with product discovery, cart, wishlist, authentication, validation, and expressive interaction design.",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Zod"],
    repoLink: "https://github.com/Nesix-org/velora",
  },
  {
    thumbNail: bigFarma,
    name: "BigFarma",
    description: "A collaborative agritech web product connecting farmers, suppliers, and buyers through a clear, responsive marketplace experience.",
    tools: ["React", "JavaScript", "Tailwind CSS", "Axios"],
    liveLink: "https://big-farma-frontend.vercel.app",
    repoLink: "https://github.com/BigFarma-Agrotech/BigFarma_Frontend",
  },
  {
    thumbNail: spaceTravel,
    name: "Space Tourism",
    description: "A responsive multi-page experience translating a detailed visual brief into immersive navigation, motion, and adaptive layouts.",
    tools: ["TypeScript", "React", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://space-tourism-tau-seven.vercel.app/",
    repoLink: "https://github.com/iranloyehannah/Space-Tourism",
  },
  {
    thumbNail: ecommerceProduct,
    name: "E-commerce Product Page",
    description: "A focused commerce interface with responsive image galleries, cart interactions, product controls, and careful mobile behaviour.",
    tools: ["React", "TypeScript", "Tailwind CSS"],
    liveLink: "https://ecommerce-product-ochre.vercel.app/",
    repoLink: "https://github.com/iranloyehannah/Ecommerce-Product",
  },
  {
    thumbNail: interactiveCard,
    name: "Interactive Card",
    description: "An interactive card-details flow with live visual feedback, structured validation, and responsive form states.",
    tools: ["JavaScript", "React", "CSS"],
    liveLink: "https://react-interactive-card-gamma.vercel.app/",
    repoLink: "https://github.com/iranloyehannah/React-Interactive-card",
  },
  {
    thumbNail: Todo,
    name: "Todo List",
    description: "A compact productivity interface exploring stateful interactions, component composition, and clean task-management flows.",
    tools: ["React", "Material UI", "Tailwind CSS"],
    liveLink: "https://react-todo-app-five-blond.vercel.app/",
    repoLink: "https://github.com/iranloyehannah/React-Todo-App",
  },
  {
    thumbNail: InstaSpots,
    name: "InstaSpots",
    description: "A collaborative social gallery concept focused on reusable content cards, responsive composition, and straightforward interaction patterns.",
    tools: ["JavaScript", "HTML", "CSS"],
    liveLink: "https://circle-03-instaspotsproject.vercel.app/",
    repoLink: "https://github.com/Caisere/circle-03-instaspotsproject",
  },
];
