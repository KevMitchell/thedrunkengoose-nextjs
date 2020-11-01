import Selection from '../components/selection'

export default function Menu () {
  const menuTypes = ['Alcoholic', 'Virgin']

  const menuTypeChanged = (newValue) => {
    console.log(newValue)
  }

  return (
    <>
      <Selection
        options={menuTypes}
        initialValue={menuTypes[0]}
        changeListener={(value) => menuTypeChanged(value)}
      />
    </>
  )
}
