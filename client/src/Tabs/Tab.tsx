import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';

export interface TabProps {
  tabIndex: number;
  isActive: boolean;
  onClick: (tabIndex: number) => void;
}

const Tab: React.SFC<TabProps> = ({ tabIndex, isActive, onClick }) => (
  <li className="tab">
    <a
      className={classNames({
        'tab-link': true,
        active: isActive,
      })}
      onClick={(event) => {
        event.preventDefault();
        onClick(tabIndex);
      }}>Unicorns &amp; Rainbows</a>
  </li>
);
