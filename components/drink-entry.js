import { PropTypes } from 'prop-types'

export function DrinkEntry ({ name, image, ingredients, showInstructions = () => {} }) {
  const composeIngredientList = () => {
    return ingredients.map(ing => {
      const alternativeText = ing.alternative ? ` or ${ing.alternative}` : ''
      const optionalText = ing.optional ? ' (optional)' : ''

      return (
        <div key={name + ing.name}>
          {ing.name + alternativeText + optionalText}
        </div>
      )
    })
  }

  return (
    <div
      className="drinkItem"
      key={name}
      onClick={showInstructions && showInstructions.bind(this, name)}
    >
      <div className="name">
        {name}
      </div>
      {image && (
        <div className="imageContainer">
          <img
            className="image"
            src={`./img/drinks/${image}`}
            alt={name}
          />
        </div>
      )}
      <div className="ingredients">
        {composeIngredientList()}
      </div>
      <style jsx>{`
        .drinkItem {
          display: inline-block;
          background-size: contain;
          background-repeat: no-repeat;
          vertical-align: top;
          width: 300px;
          min-height: 375px;
          padding: 12px;
          margin: 10px;
          cursor: pointer;
          background-image: url('./img/scroll.png')
        }
        
        .image {
          height: 120px;
          margin-top: 6px;
          border-radius: 5px;
        }
        
        .ingredients {
          text-align: left;
          margin-left: 40px;
        }
        
        .drinkRow__substitution {
          font-size: 80%;
          color: rgb(80, 26, 26);
        }
        
        .name {
          font-size: 120%;
          color: rgb(80, 26, 26);
          font-weight: bold;
          margin: 14px 0 10px -8px;
        }
    `}</style>
    </div>
  )
}

DrinkEntry.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
  showInstructions: PropTypes.func
}
