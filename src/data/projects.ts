import spaceTravel from "../assets/thumbnails/spaceTravel.png";
import ecommerceProduct from "../assets/thumbnails/sneaker.png";
import interactiveCard from "../assets/thumbnails/interactiveCard.png";
import bigFarma from "../assets/thumbnails/bigFarma.png";
interface MyProjectsProps {
  thumbNail: string;  
  name?: string;
  description?: string;
  tools?: string[];
  liveLink?: string;
  repoLink?: string;
}

export const projects: MyProjectsProps[] = [
 
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
  }
]
