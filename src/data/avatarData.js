import homeAvatar from '../assets/home-avatar.png';
import homeIconReact from '../assets/home-icon-react.png';
import homeIconPython from '../assets/home-icon-python.png';
import homeIconAseprite from '../assets/home-icon-aseprite.png';

import aboutIconCoffee from '../assets/about-icon-coffee.png';
import aboutIconTamagotchi from '../assets/about-icon-tamagotchi.png';
import aboutIconBird from '../assets/about-icon-bird.png';

const avatarData = {
     home: {
          avatar: homeAvatar,
          facts: [
               'Creative Coder & Designer',
               'React & Python',
               'Based in Canada',
          ],
          icons: [
               { src: homeIconReact, alt: 'React' },
               { src: homeIconPython, alt: 'Python' },
               { src: homeIconAseprite, alt: 'Aseprite' },
          ],
     },

     about: {
          avatar: homeAvatar,
          facts: [
               'Coffee Lover',
               'Pet Game Enthusiast',
               'Birds Birds Birds',
          ],
          icons: [
               { src: aboutIconCoffee, alt: 'Coffee' },
               { src: aboutIconTamagotchi, alt: 'Tamagotchi' },
               { src: aboutIconBird, alt: 'Bird' },
          ],
     },

     contact: {
          avatar: homeAvatar,
          facts: [
               'Reach out to me!',
               'Let’s make something cool.',
               'You can also send me an email at ryn.houle@gmail.com',
          ],
          icons: [],
     },
};

export default avatarData;