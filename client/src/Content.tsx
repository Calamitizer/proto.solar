import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutScene from '~/About/AboutScene';
import ContactScene from '~/Contact/ContactScene';
import WorksScene from '~/Works/WorksScene';

const Content: React.SFC = () => (
  <main>
    <Switch>
      <Route exact path="/" component={AboutScene} />
      <Route path="/about" component={AboutScene} />
      <Route path="/works" component={WorksScene} />
      <Route path="/contact" component={ContactScene} />
    </Switch>
  </main>
);

export default Content;
