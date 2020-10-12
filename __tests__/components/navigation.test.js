import { render } from '@testing-library/react'
import Navigation from '../../components/navigation'

test('button renders with correct label', () => {
  expect(render(<Navigation />)).toMatchSnapshot()
})
