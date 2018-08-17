import * as React from 'react';
// import '~/About/about.scss';

export interface AboutSceneProps {}

const AboutScene: React.SFC<AboutSceneProps> = () => (
  <div className="about">
    <ul>
      <li>About 1</li>
      <li>About 2</li>
      <li>About 3</li>
    </ul>
  </div>
);

export default AboutScene;
