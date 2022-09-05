import { render, screen } from '@testing-library/react'
import Calculator from '@/components/Calculator';

describe('Home', () => {
  it('Calculator renders an empty text input', () => {
    render(<Calculator />)
    const input = screen.getByTestId('input') as HTMLInputElement
    expect(input).toBeInTheDocument()
    expect(input.value).toBe("")
  })
})