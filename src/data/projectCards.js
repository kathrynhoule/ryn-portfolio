import bookAppIcon from '../assets/book-app-icon.png';
import ecoAppIcon from '../assets/eco-app-icon.png';
import quizAppIcon from '../assets/quiz-app-icon.png';

import reactIcon from '../assets/home-icon-react.png';
import supabaseIcon from '../assets/supabase-icon.png';
import motionIcon from '../assets/motion-icon.png';
import mysqlIcon from '../assets/mysql-icon.png';
import herokuIcon from '../assets/heroku-icon.png';

const projectCards = [
     {
          image: bookAppIcon,
          alt: 'Project 1',
          title: 'Book Tracker App',
          description:
               'This project has only just started, but is intended to be an interactive reading companion that lets users build their virtual bookshelf, track progress, and celebrate reading milestones with a clean, modern interface. Check out the repo on ',
          link: 'https://github.com/kathrynhoule/book-tracker-app',
          linkText: 'GitHub',
          icons: [
               { src: reactIcon, alt: 'React', link: 'https://react.dev/' },
               { src: supabaseIcon, alt: 'Supabase', link: 'https://supabase.com/' },
               { src: motionIcon, alt: 'Motion', link: 'https://motion.dev/' },
          ],
     },
     {
          image: ecoAppIcon,
          alt: 'Project 2',
          title: 'Eco Challenge App',
          description:
               'I have recently started building an interactive eco challenge app that turns sustainable living into a game with fun challenges for users and progress tracking to reward eco-friendly habits. For now you can view the repo on ',
          link: 'https://github.com/kathrynhoule/eco-challenge-app',
          linkText: 'GitHub',
          icons: [
               { src: reactIcon, alt: 'React', link: 'https://react.dev/' },
               { src: supabaseIcon, alt: 'Supabase', link: 'https://supabase.com/' },
               { src: motionIcon, alt: 'Motion', link: 'https://motion.dev/' },
          ],
     },
     {
          image: quizAppIcon,
          alt: 'Project 3',
          title: 'Classroom Game & Quiz App',
          description:
               'This was a prototype app that I worked on for AgiLearning. The larger app was intended to help teachers easily build their own interactive stories and quizzes. Note: this was made with Heroku before they changed their service. Check out the repo on ',
          link: 'https://github.com/agilearning-plugin/agilearning-plugin/tree/phase-1',
          linkText: 'GitHub',
          icons: [
               { src: reactIcon, alt: 'React', link: 'https://react.dev/' },
               { src: mysqlIcon, alt: 'MySQL', link: 'https://www.mysql.com/' },
               { src: herokuIcon, alt: 'Heroku', link: 'https://www.heroku.com/' },
          ],
     },
];

export default projectCards;