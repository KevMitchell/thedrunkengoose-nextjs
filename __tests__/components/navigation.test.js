import { render } from '@testing-library/react'
import Navigation from '../../components/navigation'

test('button renders with correct label', () => {
  const { container } = render(<Navigation />)
  expect(container).toMatchSnapshot()
})
