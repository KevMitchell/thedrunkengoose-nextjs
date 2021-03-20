import { render } from '@testing-library/react'
import { TabMenu } from '../../components/tab-menu'

test('tabMenu renders', () => {
  const { container } = render(<TabMenu />)
  expect(container).toMatchSnapshot()
})
