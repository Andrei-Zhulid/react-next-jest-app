import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', { name: /roman numeral calculator/i, })
    expect(heading).toBeInTheDocument()
  })

  it('renders Calculator component', () => {
    render(<Home />)
    const input = screen.getByTestId('calculator')
    expect(input).toBeInTheDocument()
  })
})
