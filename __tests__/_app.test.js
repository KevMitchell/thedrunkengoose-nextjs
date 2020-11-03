import { render } from '@testing-library/react'
import App from '../pages/_app'

const component = () => <div />

test('renders navigation', () => {
  const { getAllByRole } = render(<App Component={component} />)
  expect(getAllByRole(/link/)).toMatchSnapshot()
})

test('renders the footer', () => {
  const { getByText } = render(<App Component={component} />)
  expect(getByText(/Copyright © Kevin Mitchell, 2020/)).toBeInTheDocument()
})
