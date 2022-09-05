import { fireEvent, render, screen } from '@testing-library/react'
import Calculator from '@/components/Calculator';

describe('Home', () => {
  it('Calculator renders an empty text input', () => {
    render(<Calculator />)
    const input = screen.getByTestId('input') as HTMLInputElement
    expect(input).toBeInTheDocument()
    expect(input.value).toBe("")
  })

  it('display entered value as roman numeral', () => {
    render(<Calculator />)
    const input = screen.getByTestId('input') as HTMLInputElement
    fireEvent.change(input, { target: { value: "23" } })
    const romanNumeral = screen.getByTestId('roman-numeral')
    expect(romanNumeral.textContent).toBe("23")
  })
})