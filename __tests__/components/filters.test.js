import { render } from '@testing-library/react'
import { Filters } from '../../components/filters'

test('renders correct filters', () => {
  const { container } = render(<Filters />)
  expect(container).toMatchSnapshot()
})
