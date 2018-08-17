import * as React from 'react';
// import '~/Contact/contact.scss';

export interface ContactSceneProps {}

const ContactScene: React.SFC<ContactSceneProps> = () => (
  <div className="about">
    <ul>
      <li>Contact 1</li>
      <li>Contact 2</li>
      <li>Contact 3</li>
    </ul>
  </div>
);

export default ContactScene;
