import { render } from '@testing-library/react'
import Selection from '../../components/selection'

const testOptions = [
  'testOption1',
  'testOption2'
]
const testListener = jest.fn()

test('selection renders with correct options', () => {
  const { getByText } = render(
    <Selection
      options={testOptions}
      initialValue={testOptions[0]}
      changeListener={(value) => testListener(value)}
    />
  )
  expect(getByText(/testOption1/)).toBeInTheDocument()
  expect(getByText(/testOption2/)).toBeInTheDocument()
})

test('selection sets the correct initial value', () => {
  const { getByText } = render(
    <Selection
      options={testOptions}
      initialValue={testOptions[1]}
      changeListener={(value) => testListener(value)}
    />
  )
  const selection1 = getByText(/testOption1/)
  expect(selection1.className).not.toContain('selected')
  const selection2 = getByText(/testOption2/)
  expect(selection2.className).toContain('selected')
})

test('selection changes the selection', () => {
  const { getByText } = render(
    <Selection
      options={testOptions}
      initialValue={testOptions[1]}
      changeListener={(value) => testListener(value)}
    />
  )

  const selection1 = getByText(/testOption1/)
  selection1.click()
  expect(selection1.className).toContain('selected')
  const selection2 = getByText(/testOption2/)
  expect(selection2.className).not.toContain('selected')
})

test('clicking a selection calls the changeListener with the appropriate item', () => {
  const { getByText } = render(
    <Selection
      options={testOptions}
      initialValue={testOptions[1]}
      changeListener={(value) => testListener(value)}
    />
  )
  const selection1 = getByText(/testOption1/)
  selection1.click()
  expect(testListener).toHaveBeenCalledWith('testOption1')
})
