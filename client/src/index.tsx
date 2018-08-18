import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Sol from 'ps/Sol/Sol';

ReactDOM.render(
  <Router>
    <Sol />
  </Router>,
  document.getElementById('mount-point')
);
