//  icons
import {
  FiGithub,
  FiDribbble,
  FiMail,
  FiMapPin,
  FiLinkedin,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/pokedex.png';
import Project2 from './assets/img/projects/clothes.png';
import Project3 from './assets/img/projects/electronics.png';
import Project4 from './assets/img/projects/weather.png';
import Project5 from './assets/img/projects/rickandmorthy.png';
import Project6 from './assets/img/projects/users.png';





// skills images
import Html from './assets/img/skills/html5.png';
import Css from './assets/img/skills/css3.png';
import Js from './assets/img/skills/js.png';
import Reactjs from './assets/img/skills/reactjs.png';
import Nextjs from './assets/img/skills/nextjs.png';
import Nodejs from './assets/img/skills/nodejs.png';
import Git from './assets/img/skills/git.png';
import Npm from './assets/img/skills/npm.png';
import Sass from './assets/img/skills/sass.png';
import Material from './assets/img/skills/material.png';
import Tailwind from './assets/img/skills/tailwindcss.png';
import Express from './assets/img/skills/express.png';
import Postgre from './assets/img/skills/postgre.png';

// navigation
export const navigation = [
  {
    name: 'inicio',
    href: 'home',
  },
  {
    name: 'acerca de mi',
    href: 'about',
  },
  {
    name: 'habilidades',
    href: 'services',
  },
  {
    name: 'portafolio',
    href: 'portfolio',
  },
  
  {
    name: 'contacto',
    href: 'contact',
  },
];

// social
export const social = [
  
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/isaias-hernandez-gomez/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/ingIsaiasHernandez',
  },
  {
    icon: <FiDribbble />,
    href: '',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'App de Pokédex',
    category: 'video juegos',
    url: "https://pokedex-isaias-hernandez.netlify.app/"
  },
  {
    id: '2',
    image: Project2,
    name: 'Tienda de ropa',
    category: 'ecommerce',
    url: "https://clothes-store-academlo.netlify.app/"
  },
  {
    id: '3',
    image: Project3,
    name: 'Articulos de electrónica',
    category: 'ecommerce',
    url: "https://electronicss-shop.netlify.app/"
  },
  {
    id: '4',
    image: Project4,
    name: 'App de clima',
    category: 'app de ayuda',
    url: "https://weatrher-app-of-isaias.netlify.app"
  },
  {
    id: '5',
    image: Project5,
    name: 'Rick and Morthy',
    category: 'entretenimiento',
    url: "https://rick-and-morty-isaias.netlify.app/"
  },
  {
    id: '6',
    image: Project6,
    name: 'CRUD de usuarios',
    category: 'app de ayuda',
    url: "https://users-app-of-isaias-and-angel.netlify.app/"
  },
  // {
  //   id: '7',
  //   image: Project6,
  //   name: 'agencia de viajes',
  //   category: 'empresarial',
  //   url: "https://users-app-of-isaias-and-angel.netlify.app/"
  // },
];

// projects
export const projectsNav = [
  {
    name: 'todos',
  },
  {
    name: 'Empresarial',
  },
  {
    name: 'video juegos',
  },
  {
    name: 'ecommerce',
  },
  {
    name: 'app de ayuda',
  },
  {
    name: 'redes sociales',
  },
  {
    name: 'entretenimiento',
  },
];

// skill
export const skills = [
  {
    image: Html,
  },
  {
    image: Css,
  },
  {
    image: Js,
  },
  {
    image: Reactjs,
  },
  {
    image: Nextjs,
  },
  {
    image: Nodejs,
  },
  {
    image: Git,
  }
];

// services
export const services = [
  {
    icon: Npm,
    name: 'NPM',
    description:
      'Administrador de paquetes para el lenguaje de programación JavaScript.',
  },
  {
    icon: Git,
    name: 'Git',
    description:
      'Sistema de control de versiones distribuido que realiza un seguimiento de los cambios en cualquier conjunto de archivos de computadora.',
  },
  {
    icon: Css,
    name: 'CSS',
    description:
      'Una tecnología de hojas de estilo utilizado para describir la presentación de un documento escrito en un lenguaje de marcado como HTML',
  },
  {
    icon: Html,
    name: 'HTML',
    description:
      'HTML es el lenguaje de marcado estándar para documentos diseñados para mostrarse en un navegador web.',
  },
  {
    icon: Js,
    name: 'Javascript',
    description:
      'Lenguaje de programación que es una de las tecnologías centrales de la World Wide Web.',
  },
  {
    icon: Reactjs,
    name: 'Reactjs',
    description:
      'Una biblioteca JavaScript front-end gratuita y de código abierto para crear interfaces de usuario basadas en componentes.',
  },
  {
    icon: Sass,
    name: 'Sass',
    description:
      'Lenguaje de secuencias de comandos de preprocesador que se interpreta o compila en hojas de estilo en cascada.',
  },
  {
    icon: Material,
    name: 'Material UI',
    description:
      'Biblioteca de componentes de interfaz de usuario para React, diseñada para ayudar a los desarrolladores a construir aplicaciones web moderna',
  },
  {
    icon: Tailwind,
    name: 'TailwindCss',
    description:
      'Framework CSS que da prioridad a la utilidad sobre el propio estilo.',
  },
  {
    icon: Nextjs,
    name: 'NextJs',
    description:
      'Marco de desarrollo web de código abierto basadas en React con representación del lado del servidor y generación de sitios web estáticos.',
  },
  {
    icon: Nodejs,
    name: 'NodeJs',
    description:
      'Entorno de tiempo de ejecución de JavaScript de back-end.',
  },
  {
    icon: Express,
    name: 'Express',
    description:
      'Un marco de aplicaciones web back-end para crear API RESTful con Node.js',
  },

  {
    icon: Postgre,
    name: 'PostgreSQL',
    description:
      'Sistema de administración de bases de datos relacionales gratuito y de código abierto que enfatiza la extensibilidad y el cumplimiento de SQL',
  },
];


// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Tienes alguna pregunta?',
    subtitle: 'Puedo ayudarte',
    description: 'Enviame correo a ing.isaias.hdez@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Ubicación actual',
    subtitle: 'Guadalajara, México',
    description: 'Servicio a caulquier parte del mundo',
  },
];
