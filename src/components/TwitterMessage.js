import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  calculateRemainingChars = () => {
    return (this.props.maxChars - this.state.value.length)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
          />
        <h4>Remaining characters:</h4>
        <h4>{this.calculateRemainingChars()}</h4>
      </div>
    );
  }
}

export default TwitterMessage;
