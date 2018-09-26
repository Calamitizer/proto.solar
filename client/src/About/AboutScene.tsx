import * as React from 'react';
// import '~/About/about.scss';

export interface AboutSceneProps {}

const AboutScene: React.SFC<AboutSceneProps> = () => (
  <div className="tab about">
    <h1>About</h1>
    <ul>
      <li>
        <span>About 1</span>
      </li>
      <li>
        <span>About 2</span>
      </li>
      <li>
        <span>About 3</span>
      </li>
    </ul>
  </div>
);

export default AboutScene;
