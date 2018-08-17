import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './tabs.scss';

export interface TabsProps {
  defaultActiveTabIndex: number;
}

export interface TabsState {
  activeTabIndex: number;
}

class Tabs extends React.Component<TabsProps, TabsState> {
  constructor(props: TabsProps) {
    super(props);
    this.state = {
      activeTabIndex: this.props.defaultActiveTabIndex,
    };
  }

  private handleTabClick = (tabIndex: number) => {
    this.setState({
      activeTabIndex: tabIndex,
    });
  };

  render() {
    return (
      <div className="tabs">
        <ul>{/** */}</ul>
        <div className="tab-active-content">{/** */}</div>
      </div>
    );
  }
}

export default Tabs;
