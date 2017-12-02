import React from "react";
import hoistStatics from "hoist-non-react-statics";

export const HoverHOC = WrappedComponent => {
  class HoverableComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = { hovered: false };
    }

    turnHoverOn = () => {
      this.setState({ hovered: true });
    };

    turnHoverOff = () => {
      this.setState({ hovered: false });
    };

    render() {
      const props = { hovered: this.state.hovered, ...this.props };
      return (
        <WrappedComponent
          onMouseEnter={this.turnHoverOn}
          onMouseLeave={this.turnHoverOff}
          {...props}
        />
      );
    }
  }
  return hoistStatics(HoverableComponent, WrappedComponent);
};
