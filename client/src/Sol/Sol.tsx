import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from '~/Header';
import Content from '~/Content';
// import Footer from '~/Footer';
import './sol.scss';

const Sol: React.SFC = () => (
  <div className="sol">
    <Header />
    <Content />
    {/* <Footer /> */}
  </div>
);

export default Sol;
