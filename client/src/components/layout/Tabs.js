import React, { Component } from "react";
import { find } from "lodash";

import Tab from "./Tab";

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = { currentChildKey: "" };
  }

  findCurrentChild() {
    const children = React.Children.toArray(this.props.children);
    const { currentChildKey } = this.state;

    if (!currentChildKey) return children[0];
    return find(children, child => child.props.contentKey === currentChildKey);
  }

  render() {
    return (
      <div>
        <div>
          {React.Children.toArray(this.props.children).map((child, index) => {
            const contentKey = child.props.contentKey;

            return (
              <Tab
                handleClick={() =>
                  this.setState({ currentChildKey: contentKey })}
                key={contentKey + index}
                tabName={contentKey}
              />
            );
          })}
        </div>
        {this.findCurrentChild()}
      </div>
    );
  }
}

export default Tabs;
