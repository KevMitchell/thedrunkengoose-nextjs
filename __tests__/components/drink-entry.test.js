import { render } from '@testing-library/react'
import { DrinkEntry } from '../../components/drink-entry'

const testIngredients = [{
  name: 'ing1', quantity: 10
},
{
  name: 'ing2', quantity: 20, alternative: 'ing3'
},
{
  name: 'ing4', quantity: 5, optional: true
}]

test('renders the supplied drink item', () => {
  const { container } = render(
    <DrinkEntry
      name={'test-name'}
      image={'test-image'}
      ingredients={testIngredients}
    ></DrinkEntry>
  )

  expect(container).toMatchSnapshot()
})
