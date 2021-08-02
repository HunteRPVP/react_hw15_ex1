import React, { Component } from "react";

export class CollapsableList extends Component {
  state = {
    part1: ["item", "item"],
    part2: ["item", "item"],
    showPart2: false,
  };

  handleClick = () => {
    this.setState({ ...this.state, showPart2: !this.state.showPart2 });
  };

  render() {
    const { part1, part2, showPart2 } = this.state;
    return (
      <div data-testid="cl">
        <ul data-testid="part1">
          {part1.map((item, id) => (
            <li key={id}>{item}</li>
          ))}
        </ul>
        {showPart2 && (
          <ul data-testid="part2">
            {part2.map((item, id) => (
              <li key={id + 2}>{item}</li>
            ))}
          </ul>
        )}
        {showPart2 ? (
          <button data-testid="lessBtn" onClick={this.handleClick}>Убрать</button>
        ) : (
          <button data-testid="moreBtn" onClick={this.handleClick}>Показать</button>
        )}
      </div>
    );
  }
}

export default CollapsableList;
