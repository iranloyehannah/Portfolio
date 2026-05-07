import spaceTravel from "../assets/thumbnails/spaceTravel.webp";
import ecommerceProduct from "../assets/thumbnails/sneaker.webp";
import interactiveCard from "../assets/thumbnails/interactiveCard.webp";
import bigFarma from "../assets/thumbnails/bigFarma.webp";
import InstaSpots from "../assets/thumbnails/instaspots.webp";
import Todo from "../assets/thumbnails/todoapp.webp";
import authstack from "../assets/thumbnails/authstack.webp";
import velora from "../assets/thumbnails/velora.webp";
interface MyProjectsProps {
  thumbNail: string;  
  name?: string;
  description?: string;
  tools?: string[];
  liveLink?: string;
  repoLink?: string;
}

export const projects: MyProjectsProps[] = [
  {thumbNail: authstack,
    name: "AuthStack",
    description: "A full-stack authentication app exploring real auth flows with Neon, Prisma, NextAuth.js, and Bcrypt. Sharp, minimal, production-ready.",
    tools: ["Next.js", "TypeScript", "NextAuth.js", "Prisma", "Neon", "Bcrypt"],
    liveLink: "#",
    repoLink: "https://github.com/Nesix-org/authstack"
  },
  {thumbNail: velora,
    name: "Velora",
    description: "A modern, full-featured e-commerce platform with product browsing, cart, wishlist, and authentication. Built with Next.js 16 and React 19.",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Zod"],
    liveLink: "#",
    repoLink: "https://github.com/Nesix-org/velora"
  },
  {thumbNail: bigFarma,
    name: "BigFarma",
    description: "BigFarma is a modern web app that connects farmers, suppliers, and buyers.",
    tools: ["React", "Javascript", "Tailwind CSS", "Axios"],
    liveLink: "https://big-farma-frontend.vercel.app",
    repoLink: "https://github.com/BigFarma-Agrotech/BigFarma_Frontend"
  },
  {thumbNail:spaceTravel,
    name: "Space Tourism",
    description: "This is a fully responsive Space Tourism website built with React and TypeScript.",
    tools: ["Typescript", "React", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://space-tourism-tau-seven.vercel.app/",
    repoLink: "https://github.com/iranloyehannah/Space-Tourism"
  },
  {thumbNail: ecommerceProduct,
    name: "Ecommerce Single Product Page",
    description: "A Frontend Mentor project showcasing a single product page for an ecommerce site.",
    tools: ["React", "Typescript", "Tailwind CSS"],
    liveLink: "https://ecommerce-product-ochre.vercel.app/",
    repoLink: "https://github.com/iranloyehannah/Ecommerce-Product"
  },
  {thumbNail: interactiveCard,
    name: "Interactive Card",
    description: "This project is a React application built with Vite. It features an interactive credit card details form with live preview and validation.",
    tools: ["Javascript", "React", "CSS"],
    liveLink: "https://react-interactive-card-gamma.vercel.app/",
    repoLink: "https://github.com/iranloyehannah/React-Interactive-card"
  },

  {thumbNail: Todo,
    name: "Todo List",
    description: "This project is a Javascript application, It displays and add new cards.",
    tools: ["React", "Material Ui", "TailwindCss"],
    liveLink: "https://react-todo-app-five-blond.vercel.app/",
    repoLink: "https://github.com/iranloyehannah/React-Todo-App"
  },
  {thumbNail: InstaSpots,
    name: "InstaSpots",
    description: "This project is a Javascript application, It displays and add new cards.",
    tools: ["Javascript", "Html", "CSS"],
    liveLink: "https://circle-03-instaspotsproject.vercel.app/",
    repoLink: "https://github.com/Caisere/circle-03-instaspotsproject"
  },
]
