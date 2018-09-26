import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { ContactIconProps } from 'ps/Contact/ContactIcon';

const contactItems: ContactIconProps[] = [
  {
    name: 'Email',
    href: 'mailto:jaruble@ncsu.edu',
    icon: faEnvelope,
  },
  {
    name: 'Github',
    href: 'https://github.com/calamitizer',
    icon: faGithub,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/jalexruble',
    icon: faLinkedin,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/aknifeallblade',
    icon: faTwitter,
  },
];

export default contactItems;
