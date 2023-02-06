import { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div>
        <button
          type="button"
          style={{
            color: this.props.color,
            backgroundColor: this.props.bgc,
            width: this.props.width,
            height: this.props.height,
            margin: this.props.margin,
            borderRadius: this.props.borad,
            fontFamily: this.props.fontFamily,
            fontSize: this.props.fs,
          }}
        >
          {this.props.content}
        </button>
      </div>
    );
  }
}
export default Button;
