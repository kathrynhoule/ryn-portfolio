import aboutIcon from '../assets/about-icon.png';
import mainProjectsIcon from '../assets/main-projects-icon.png';
import sideProjectsIcon from '../assets/side-projects-icon.png';
import contactIcon from '../assets/contact-icon.png';

const homeLinks = [
  {
    to: '/about',
    icon: aboutIcon,
    alt: 'About',
    title: 'About Me',
    description: 'Learn more about me and some fun facts',
    className: 'about-link',
  },
  {
    to: '/main-projects',
    icon: mainProjectsIcon,
    alt: 'Projects',
    title: 'Main Projects',
    description: 'Check out my work and main projects',
    className: 'work-link',
  },
  {
    to: '/side-projects',
    icon: sideProjectsIcon,
    alt: 'Projects',
    title: 'Side Projects',
    description: 'Check out my personal projects',
    className: 'work-link',
  },
  {
    to: '/contact',
    icon: contactIcon,
    alt: 'Contact',
    title: 'Contact',
    description: 'Get in touch or find me elsewhere',
    className: 'contact-link',
  },
];

export default homeLinks;