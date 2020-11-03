import { useEffect, useState } from 'react'
import { DrinkEntry } from '../components/drink-entry'
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
          <DrinkEntry
            key={drink.name}
            name={drink.name}
            image={drink.image}
            ingredients={drink.ingredients}
          />
        ))}
      </div>

      <style jsx>{`
        .drinkList {
          margin: 10px;
        }
        @media (max-width: 780px) {
          .drinkList {
            width: 100%;
            left: 0;
            text-align: center;
            margin-left: 0;
          }
        }
      `}</style>
    </>
  )
}
