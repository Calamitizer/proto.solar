import * as React from 'react';
// import '~/Works/works.scss';

export interface WorksSceneProps {}

const WorksScene: React.SFC<WorksSceneProps> = () => (
  <div className="works">
    <ul>
      <li>Work 1</li>
      <li>Work 2</li>
      <li>Work 3</li>
    </ul>
  </div>
);

export default WorksScene;
