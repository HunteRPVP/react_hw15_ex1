import React, { Component } from "react";

export class InputValid extends Component {
  state = {
    email: "",
    valid: false,
  };

  handleChange = (e) => {
    this.setState({
      email: e.target.value,
      valid:
        e.target.value.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/)
          ?.length === 1,
    });
  };

  render() {
    const { email, valid } = this.state;
    return (
      <div data-testid="iv">
        <input
          data-testid="emailInput"
          type="text"
          value={email}
          onChange={this.handleChange}
        />
        {!valid ? (
          <p data-testid="errorMsg" style={{ color: "red" }}>
            Адрес электронной почты имеет неверный формат
          </p>
        ) : (
          <p data-testid="validMsg" style={{ color: "green" }}>
            Адрес электронной почты введен корректно
          </p>
        )}
      </div>
    );
  }
}

export default InputValid;
