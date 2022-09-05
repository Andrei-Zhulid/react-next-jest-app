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
})