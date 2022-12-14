import { ChangeEvent, Component } from 'react'
import styles from './Calculator.module.css'
import ArabicToRomanConverter from '../helpers/ArabicToRomanConverter';

const initialState = { arabicValue: "", romanValue: "" }
type CalculatorState = { arabicValue: string, romanValue: string }

export default class Calculator extends Component<object, CalculatorState> {
  readonly state: CalculatorState = initialState

  convert = (event: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ arabicValue: event.target.value })

    const value = Number(event.target.value);
    if (!value || value <= 0 || value > 1000) {
      this.setState({ romanValue: initialState.romanValue })
      return
    }

    let result = ArabicToRomanConverter.convert(Number(event.target.value))
    this.setState({ romanValue: result });
  }

  render() {
    let span = !this.state.arabicValue || this.state.romanValue
      ? <span data-testid="roman-numeral">{this.state.romanValue ?? "&nbsp;"}</span>
      : <span data-testid="error-message">Invalid input. Please enter number from 1 to 1000.</span>;

    return (
      <div className={styles.container} data-testid="calculator">
        <input type="text" value={this.state.arabicValue} onChange={this.convert} className={styles.input} data-testid="input" />
        <br />
        <div className={styles.result}>
          {span}
        </div>
      </div>
    )
  }
}