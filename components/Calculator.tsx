import { Component } from 'react';
import styles from './Calculator.module.css'

export default class Calculator extends Component {
  render() {
    return (
      <div data-testid="calculator">
        <input type="text" className={styles.input} data-testid="input" />
      </div>
    )
  }
}