import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      opened: false
    };
  }

  handleClick() {
    const { cardId, cardClicked } = this.props;
    this.props.onClick(cardId, cardClicked);
    this.setState({ hover: false, opened: !this.state.opened });
  }

  render() {
    const { cardId, cardSelected, topOffset, hoverOffset } = this.props;
    const offset = cardId !== 0 && this.state.hover && !cardSelected
      ? hoverOffset
      : 0;
    const transform = `translate3d(0,${topOffset - offset}px,0)`;
    const cardStyles = {
      ...styles,
      background: this.props.background,
      transform,
      WebkitTransform: transform,
      height: this.props.height
    };
    return (
      <li
        style={cardStyles}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        <button
          onClick={this.handleClick.bind(this)}
          style={{
            border: "none",
            padding: "5px 10px",
            margin: "0 10px",
            backgroundColor: "rgba(0,0,0,0)",
            align: "right",
            pisition: "relative",
            marginLeft: "92%",
            color: "#80e6fb",
            outline: "none",
            cursor: "pointer"
          }}
        >
          {this.state.opened ? "∇" : "∆"}
        </button>

        {this.props.children}
      </li>
    );
  }
}

const styles = {
  position: "absolute",
  top: 0,
  width: "100%",
  transition: "0.5s transform ease",
  WebkitTransition: "-webkit-transform 0.5s ease"
};

export default Card;
