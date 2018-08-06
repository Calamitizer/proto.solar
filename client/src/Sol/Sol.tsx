import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from '~/Header';
import Content from '~/Content';
import './sol.scss';

const Sol: React.SFC = () => (
    <div className="sol">
        <Header />
        <Content />
    </div>
);

export default Sol;
