import { useEffect, useState } from 'react'
import Selection from '../components/selection'
import drinksFile from '../public/data/drinks.json'

export default function Menu () {
  const menuTypes = ['Alcoholic', 'Virgin']
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    menuTypeChanged(menuTypes[0])
  }, [])

  const menuTypeChanged = (newValue) => {
    const showVirgin = newValue === 'Virgin'
    const drinkIsRightType = (drink) => showVirgin === !!drink.virgin
    setDrinks(drinksFile.filter(drinkIsRightType))
  }

  return (
    <>
      <Selection
        options={menuTypes}
        initialValue={menuTypes[0]}
        changeListener={(value) => menuTypeChanged(value)}
      />
      <div className='drinkList'>
        {drinks.map(drink => (
          <div key={drink.name}>
            {drink.name}
          </div>
        ))}
      </div>

      <style jsx>{`
        drinkList {
          margin: 10px;
        }
      `}</style>
    </>
  )
}
