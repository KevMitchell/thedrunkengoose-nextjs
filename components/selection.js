import { useState } from 'react'
import PropTypes from 'prop-types'

export default function Selection ({ options, initialValue, changeListener }) {
  const [selectedItem, setSelectedItem] = useState(initialValue)

  return (
    <div>
      {options.map(option => {
        return (
          <span
            key={option}
            onClick={() => {
              setSelectedItem(option)
              changeListener(option)
            }}
            className={option === selectedItem ? 'selected' : ''}
          >
            {option}
          </span>
        )
      })}

      <style jsx>{`
        div {
          width: 100%;
          display: inline-block;
        }
        span {
          display: inline-block;
          width: 150px;
          height: 40px;
          margin: 10px;
          text-align: center;
          cursor: pointer;
          color: white;
          background: inherit;
          background-image: url(./img/smear.png);
          background-repeat: no-repeat;
          background-size: contain;
          background-blend-mode: difference;
          padding-top: 14px;
          text-decoration: none;
          cursor: pointer;
          color: black;
          opacity: 0.7;
        }
        span.selected {
          opacity: 1;
        }
      `}</style>
    </div>
  )
}

Selection.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  initialValue: PropTypes.string.isRequired,
  changeListener: PropTypes.func.isRequired
}
