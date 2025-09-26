import gardenAppIcon from '../assets/garden-app-icon.png';
import petAppIcon from '../assets/pet-app-icon.png';
import siteIcon from '../assets/site-icon.png';

import reactIcon from '../assets/home-icon-react.png';
import asepriteIcon from '../assets/home-icon-aseprite.png';
import zustandIcon from '../assets/zustand-icon.png';

const sideProjectCards = [
  {
    image: gardenAppIcon,
    alt: 'Project 1',
    title: 'Mini Gardening Game',
    description:
      'A fun, interactive gardening game that lets players grow and harvest different plants to build a virtual garden in their browser. Still being built, but the repo is up on ',
    link: 'https://github.com/kathrynhoule/mini-gardening-game',
    linkText: 'GitHub',
    icons: [
      { src: reactIcon, alt: 'React', link: 'https://react.dev/' },
      { src: asepriteIcon, alt: 'Aseprite', link: 'https://www.aseprite.org/' },
    ],
  },
  {
    image: petAppIcon,
    alt: 'Project 2',
    title: 'Virtual Pet Game',
    description:
      'A browser-based virtual pet game where you feed, play, and care for your pet in a fun, interactive way as they grow . Still being built, but you can view the repo on ',
    link: 'https://github.com/kathrynhoule/virtual-pet-game',
    linkText: 'GitHub',
    icons: [
      { src: reactIcon, alt: 'React', link: 'https://react.dev/' },
      { src: asepriteIcon, alt: 'Aseprite', link: 'https://www.aseprite.org/' },
      { src: zustandIcon, alt: 'Zustand', link: 'https://zustand-demo.pmnd.rs/' },
    ],
  },
  {
    image: siteIcon,
    alt: 'Project 3',
    title: 'This site!',
    description:
      'The site you are on was made by me with React over the course of about 5 days. The icons and images were all made by me using Aseprite at 32x32 or 16x16 size. The repo for this site is public on ',
    link: 'https://github.com/kathrynhoule/ryn-portfolio',
    linkText: 'Github',
    icons: [
      { src: reactIcon, alt: 'React', link: 'https://react.dev/' },
      { src: asepriteIcon, alt: 'Aseprite', link: 'https://www.aseprite.org/' },
    ],
  },
];

export default sideProjectCards;