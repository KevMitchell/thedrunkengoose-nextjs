import { render } from '@testing-library/react'
import About from '../pages/about'

test('renders about section', () => {
  const { container } = render(<About />)
  expect(container).toMatchSnapshot()
})
