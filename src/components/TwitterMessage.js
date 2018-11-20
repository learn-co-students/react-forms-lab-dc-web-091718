import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      maxChars: props.maxChars,
      content: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="content" onChange={this.handleChange} value={this.state.content} />
        {this.props.maxChars-this.state.content.length}
      </div>
    );
  }
}

export default TwitterMessage;
