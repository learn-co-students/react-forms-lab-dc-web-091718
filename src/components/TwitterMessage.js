import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    value:"",
    maxChars:props.maxChars
    };
  }

  handleChange = (event)=>{
    this.setState({value: event.target.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" value={this.state.value}/>
        <h1>Remaining Characters:
        {this.props.maxChars-this.state.value.length}</h1>
      </div>
    );
  }
}

export default TwitterMessage;
