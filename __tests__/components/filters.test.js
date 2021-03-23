import { render } from '@testing-library/react'
import { Filters } from '../../components/filters'

test('renders correct filters', () => {
  const { container } = render(
    <Filters
      handleTypeChange={jest.fn()}
      handleDifficultyChange={jest.fn()}
      handleBaseChange={jest.fn()}
      handleFlavourChange={jest.fn()}
      handleSearchChange={jest.fn()}
    />
  )
  expect(container).toMatchSnapshot()
})
