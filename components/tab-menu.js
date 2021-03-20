import { useState } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

export function TabMenu () {
  const [selection, setSelection] = useState(0)
  const router = useRouter()

  const changeSelection = (newSelection) => {
    if (newSelection !== selection) {
      setSelection(newSelection)
    }
  }

  if (router?.pathname === '/saved') {
    changeSelection(1)
  } else if (router?.pathname === '/about') {
    changeSelection(2)
  }

  return (
    <div>
      <Link href={'/'}>
        <a className={selection === 0 ? 'selected' : ''} onClick={() => changeSelection(0)}>Recipes</a>
      </Link>
      <Link href={'/saved'}>
        <a className={selection === 1 ? 'selected' : ''} onClick={() => changeSelection(1)}>Saved</a>
      </Link>
      <Link href={'/about'}>
        <a className={selection === 2 ? 'selected' : ''} onClick={() => changeSelection(2)}>About us</a>
      </Link>
      <style jsx>{`
        a {
          display: inline-block;
          width: 120px;
          height: 30px;
          margin-bottom: 10px;
          background-repeat: no-repeat;
          text-align: center;
          padding-top: 14px;
          font-size: 20px;
          text-decoration: none;
          cursor: pointer;
          color: white;
          border-bottom: 3px solid rgba(1, 1, 1, 0);
          -webkit-transition: border-color 0.2s ease-in-out;
          -moz-transition: border-color 0.2s ease-in-out;
          -o-transition: border-color 0.2s ease-in-out;
          -ms-transition: border-color 0.2s ease-in-out;
          transition: border-color 0.2s ease-in-out;
        }

        .selected {
          border-color: rgba(255, 255, 255, 1);
          -webkit-transition: border-color 0.2s ease-in-out;
          -moz-transition: border-color 0.2s ease-in-out;
          -o-transition: border-color 0.2s ease-in-out;
          -ms-transition: border-color 0.2s ease-in-out;
          transition: border-color 0.2s ease-in-out;
        }
      `}</style>
    </div>
  )
}

TabMenu.propTypes = {
  selectedIndex: PropTypes.number
}
