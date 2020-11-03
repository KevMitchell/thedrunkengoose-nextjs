import { render } from '@testing-library/react'
import Navigation from '../../components/navigation'

test('navigation renders with all links', () => {
  const { container } = render(<Navigation />)
  expect(container).toMatchSnapshot()
})
