import { render } from '@testing-library/react'
import About from '../pages/about'

test('renders navigation', () => {
  const { container } = render(<About />)
  expect(container).toMatchSnapshot()
})
