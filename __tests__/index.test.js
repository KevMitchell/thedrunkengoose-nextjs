import { render } from '@testing-library/react'
import Index from '../pages/index'

test('renders navigation', () => {
  const { getAllByRole } = render(<Index />)
  const navigationLinks = getAllByRole(
    /link/
  )
  expect(navigationLinks).toMatchSnapshot()
})

test('renders the footer', () => {
  const { getByText } = render(<Index />)
  const textElement = getByText(
    /Copyright © Kevin Mitchell, 2020/
  )
  expect(textElement).toBeInTheDocument()
})
