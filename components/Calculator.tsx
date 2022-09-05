import { Component } from 'react';

export default class Calculator extends Component {
  render() {
    return (
      <div data-testid="calculator">
        <input type="text" data-testid="input" />
      </div>
    )
  }
}