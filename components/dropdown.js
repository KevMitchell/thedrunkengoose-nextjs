import PropTypes from 'prop-types'

export function Dropdown ({ options, id, handleSelect }) {
  return (
    <>
      <div className='dropdown-container'>
        <select
          data-testid={id}
          onChange={handleSelect}
        >
          {options.map(({ name, value, disabled = false }, index) => (
            <option key={index} value={value} disabled={disabled} >
              {name}
            </option>
          ))}
        </select>
        <span className='arrow' tabIndex={0} />
      </div>

      <style jsx>{`
        .dropdown-container {
          position: relative;
          display: inline-block;
          width: 150px;
          height: 50px;
          border: 1px solid #cab488;
          background-color: #310e04;
        }
        
        select {
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0);
          color: #cab488;
          border: 0;
          text-align: center;
          text-align-last: center;
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          padding: 5px;
        }
        
        option {
          display: block;
          color: black;
        }
        
        .arrow {
          position: absolute;
          bottom: 0;
          left: 50%;
          display: block;
          height: 10px;
          pointer-events: none;
        }

        .arrow::after {
          --size: 0.35em;
          content: '';
          position: absolute;
          width: 0;
          height: 0;
          
          left: 50%;
          transform: translate(-50%, -50%);

          border-left: var(--size) solid transparent;
          border-right: var(--size) solid transparent;
          border-top: var(--size) solid rgba(255, 255, 255, 0.5);
          top: 45%;
        }

        @media (max-width: 860px) {
          .dropdown-container {
            width: 100px;
          }
        }
      `}</style>
    </>
  )
}

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  id: PropTypes.string,
  handleSelect: PropTypes.func
}
