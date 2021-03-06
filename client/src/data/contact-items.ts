import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
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
    icon: faGithubAlt,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/jalexruble',
    icon: faLinkedinIn,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/aknifeallblade',
    icon: faTwitter,
  },
];

export default contactItems;
