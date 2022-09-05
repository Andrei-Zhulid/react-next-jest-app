import { fireEvent, render, screen } from '@testing-library/react'
import Calculator from '@/components/Calculator';

const setupInput = () => {
  render(<Calculator />)
  return screen.getByTestId('input') as HTMLInputElement
}

describe('Home', () => {
  it('Calculator renders an empty text input', () => {
    const input = setupInput()
    expect(input).toBeInTheDocument()
    expect(input.value).toBe("")
  })

  it('display entered value as roman numeral', () => {
    const input = setupInput()
    fireEvent.change(input, { target: { value: "23" } })
    const romanNumeral = screen.getByTestId('roman-numeral')
    expect(romanNumeral.textContent).toBe("23")
  })

  it('the error message is not presented initially', () => {
    render(<Calculator />)
    const element = screen.queryByTestId('error-message')
    expect(element).toBeNull()
  })

  it('enter a text instead of a number', () => {
    const input = setupInput()
    fireEvent.change(input, { target: { value: "some text" } })
    const error = screen.getByTestId('error-message')
    expect(error).toBeInTheDocument()
  })
})