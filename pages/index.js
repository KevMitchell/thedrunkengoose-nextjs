import DrinkPanel from '../components/drink-panel'
import drinks from '../public/data/drinks.json'
import instructions from '../public/data/instructions.json'

export default function Index () {
  return (
    <>
      <div className='main-title' />
      {drinks.map(drink =>
        <DrinkPanel
          name={drink.name}
          key={drink.name}
          image={drink.image}
          difficulty={drink.difficulty}
          base={drink.base}
          flavour={drink.flavour.join(', ')}
          ingredients={drink.ingredients}
          instructions={instructions[drink.name]}
        />
      )}

      <style jsx>{`
        .main-title {
          max-height: 320px;
          background-image: url('/img/banner1.jpg');
          background-size: contain;
          background-repeat: no-repeat;
          width: 100%;
          height: 0;
          padding-top: 30%;
          margin-bottom: 20px;
        }
      `}</style>
    </>
  )
}
