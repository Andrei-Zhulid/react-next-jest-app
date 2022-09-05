import { ChangeEvent, Component } from 'react'
import styles from './Calculator.module.css'

const initialState = { arabicValue: "", romanValue: "" }
type CalculatorState = { arabicValue: string, romanValue: string }

export default class Calculator extends Component<object, CalculatorState> {
  readonly state: CalculatorState = initialState

  //TODO: Implement Arabic to Roman conversion instead of the mock function
  convert = (event: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ arabicValue: event.target.value })
    this.setState({ romanValue: event.target.value })
  }

  render() {
    return (
      <div data-testid="calculator">
        <input type="text" value={this.state.arabicValue} onChange={this.convert} className={styles.input} data-testid="input" />
        <br />
        <span data-testid="roman-numeral">{this.state.romanValue}</span>
      </div>
    )
  }
}