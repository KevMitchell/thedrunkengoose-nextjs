import { useEffect, useState } from 'react'
import { DrinkEntry } from '../components/drink-entry'
import { InstructionPanel } from '../components/instruction-panel'
import Selection from '../components/selection'
import drinksFile from '../public/data/drinks.json'
import instructionsFile from '../public/data/instructions.json'

export default function Menu () {
  const menuTypes = ['Alcoholic', 'Virgin']
  const [drinks, setDrinks] = useState([])
  const [showingInstructions, setShowingInstructions] = useState(false)
  const [currentDrink, setCurrentDrink] = useState({})
  const [drinkInstructions, setDrinkInstructions] = useState([])

  useEffect(() => {
    menuTypeChanged(menuTypes[0])

    const eventListener = (e) => {
      if (e.key === 'Escape') closeInstructions()
    }
    document.addEventListener('keydown', eventListener)

    return () => document.removeEventListener('keydown', eventListener)
  }, [])

  const menuTypeChanged = (newValue) => {
    const showVirgin = newValue === 'Virgin'
    const drinkIsRightType = (drink) => showVirgin === !!drink.virgin
    setDrinks(drinksFile.filter(drinkIsRightType))
  }

  const getDrink = (name) => {
    const matches = drinks.filter(d => d.name === name)
    return matches && matches.length ? matches[0] : {}
  }

  const showInstructions = (drinkName) => {
    if (showingInstructions) return

    setCurrentDrink(getDrink(drinkName))
    setDrinkInstructions(instructionsFile[drinkName])
    setShowingInstructions(true)
  }

  const closeInstructions = () => setShowingInstructions(false)

  return (
    <>
      <Selection
        options={menuTypes}
        initialValue={menuTypes[0]}
        changeListener={(value) => menuTypeChanged(value)}
      />
      <InstructionPanel
        instructions={drinkInstructions}
        name={currentDrink.name}
        image={currentDrink.image}
        ingredients={currentDrink.ingredients}
        closeInstructions={closeInstructions.bind(this)}
        visible={showingInstructions}
      />
      <div className='drinkList'>
        {drinks.map(drink => (
          <DrinkEntry
            key={drink.name}
            name={drink.name}
            image={drink.image}
            ingredients={drink.ingredients}
            showInstructions={showInstructions}
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
