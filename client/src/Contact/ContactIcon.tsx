import * as React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface ContactIconProps {
  name: string;
  href: string;
  icon: IconDefinition;
}

const ContactIcon: React.SFC<ContactIconProps> = ({ href, icon }) => (
  <div className="contact-icon">
    <a {...{ href }} target="_blank">
      <div className="icon iconShadow">
        <FontAwesomeIcon {...{ icon }} size="10x" fixedWidth />
      </div>
      <div className="icon iconSurface">
        <FontAwesomeIcon {...{ icon }} size="10x" fixedWidth />
      </div>
    </a>
  </div>
);

export default ContactIcon;
