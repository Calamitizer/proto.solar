import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from 'ps/Header/Header';
import Content from 'ps/Content';
import Footer from 'ps/Footer/Footer';
import 'ps/Sol/sol.scss';

const Sol: React.SFC = () => (
  <div className="sol">
    <Header />
    <Content />
    <Footer />
  </div>
);

export default Sol;
