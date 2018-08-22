import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutScene from 'ps/About/AboutScene';
import ContactScene from 'ps/Contact/ContactScene';
import WorksScene from 'ps/Works/WorksScene';

const Content: React.SFC = () => (
  <main className="content">
    <Switch>
      <Route exact path="/" component={AboutScene} />
      <Route path="/about" component={AboutScene} />
      <Route path="/works" component={WorksScene} />
      <Route path="/contact" component={ContactScene} />
    </Switch>
  </main>
);

export default Content;
