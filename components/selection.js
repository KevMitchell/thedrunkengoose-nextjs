import { useState } from 'react'
import PropTypes from 'prop-types'

export default function Selection ({ options, initialValue, changeListener }) {
  const [selectedItem, setSelectedItem] = useState(initialValue)

  return (
    <>
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
        span {
          margin: 10px;
          opacity: 1;
          cursor: pointer;
        }
        span.selected {
          opacity: 0.6
        }
      `}</style>
    </>
  )
}

Selection.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  initialValue: PropTypes.string.isRequired,
  changeListener: PropTypes.func.isRequired
}
