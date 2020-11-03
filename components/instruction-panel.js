import PropTypes from 'prop-types'

export function InstructionPanel ({
  name,
  image,
  ingredients,
  instructions,
  closeInstructions,
  visible
}) {
  const getIngredientText = (ing) => {
    const alternativeText = ing.alternative ? ` or ${ing.alternative}` : ''
    const measure = ing.name.toLowerCase() === 'cherries'
      ? ' '
      : ing.dashes ? ' dashes ' : 'ml '

    const quantity = ing.quantity ? ing.quantity + measure : ''
    let text = quantity + ing.name
    if (ing.optional) text += ' (optional)'
    return <div key={text}>{text + alternativeText}</div>
  }

  return (
    <div className={visible ? 'instructionPanel visible' : 'instructionPanel'}>
      <div className='title'>
        Instructions
      </div>
      <div
        className='close'
        onClick={closeInstructions.bind(this)}
      >
        X
      </div>
      <div className='titleBar'>
        {image && (
          <div className='imageContainer'>
            <img
              className='image'
              src={`img/drinks/${image}`}
              alt={name}
            />
          </div>
        )}
        <div className='titleBarText'>
          <div className='name'>
            {name}
          </div>
          <div className='ingredients'>
            {ingredients && ingredients.map(ing => getIngredientText(ing))}
          </div>
        </div>
      </div>
      <div className='instructions'>
        {instructions.map(i =>
          <div
            key={i}
            className='instructionLine'>
            {i}
          </div>
        )}
      </div>

      <style jsx>{`
        .instructionPanel {
          display: block;
          position: fixed;
          background-color: aliceblue;
          margin: 0 5% 0 4%;
          min-height: 400px;
          padding: 15px 20px;
          box-sizing: border-box;
          width: 90%;
          max-width: 600px;
          top: 10px;
          opacity: 0;
          z-index: -1;
          -webkit-transition: opacity 0.5s ease-out;
          -moz-transition: opacity 0.5s ease-out;
          -o-transition: opacity 0.5s ease-out;
          -ms-transition: opacity 0.5s ease-out;
          transition: opacity 0.5s ease-out;
        }
        
        .instructionPanel.visible {
          opacity: 1;
          z-index: 3;
          -webkit-transition: opacity 0.5s ease-out;
          -moz-transition: opacity 0.5s ease-out;
          -o-transition: opacity 0.5s ease-out;
          -ms-transition: opacity 0.5s ease-out;
          transition: opacity 0.5s ease-out;
        }
        
        .titleBar {
          vertical-align: top;
          margin-top: 10px;
        }
        
        .titleBarText {
          display: inline-block;
          vertical-align: top;
        }
        
        .imageContainer {
          display: inline-block;
          margin-right: 20px;
        }
        
        .image {
          height: 120px;
        }
        
        .title {
          color: grey;
          font-style: italic;
          font-size: 24px;
        }
        
        .close {
          position: absolute;
          right: 10px;
          top: 10px;
          color: grey;
          cursor: pointer;
        }
        
        .name {
          vertical-align: top;
          text-align: left;
          font-size: 120%;
          color: darkred;
          font-weight: bold;
          margin-bottom: 20px;
        }
        
        .ingredients {
          text-align: left;
        }
        
        .instructions {
          margin: 20px auto;
          max-width: 700px;
          text-align: left;
        }
        
        .instructionLine {
          display: list-item;
        }
      `}</style>
    </div>
  )
}

InstructionPanel.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  ingredients: PropTypes.array,
  instructions: PropTypes.array,
  closeInstructions: PropTypes.func,
  visible: PropTypes.bool
}
