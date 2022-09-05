import { ChangeEvent, Component } from 'react'
import styles from './Calculator.module.css'

const initialState = { arabicValue: "", romanValue: "" }
type CalculatorState = { arabicValue: string, romanValue: string }

export default class Calculator extends Component<object, CalculatorState> {
  readonly state: CalculatorState = initialState

  //TODO: Implement Arabic to Roman conversion instead of the mock function
  convert = (event: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ arabicValue: event.target.value })

    if (!Number(event.target.value)) {
      this.setState({ romanValue: initialState.romanValue })
      return
    }

    this.setState({ romanValue: event.target.value })
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