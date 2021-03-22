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
  } else if (router?.pathname === '/') {
    changeSelection(0)
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
        div {
          width: 85%;
          max-width: 800px;
          margin: auto;
          text-align: center;
        }

        a {
          display: inline-block;
          width: 130px;
          height: 30px;
          margin: 0 24px 10px 24px;
          background-repeat: no-repeat;
          text-align: center;
          padding: 14px 0;
          font-size: 2.2em;
          text-decoration: none;
          cursor: pointer;
          color: #cab488;
          border-bottom: 3px solid rgba(202, 180, 136, 0);
          -webkit-transition: border-color 0.2s ease-in-out;
          -moz-transition: border-color 0.2s ease-in-out;
          -o-transition: border-color 0.2s ease-in-out;
          -ms-transition: border-color 0.2s ease-in-out;
          transition: border-color 0.2s ease-in-out;
        }

        @media (max-width: 640px) {
          a {
            margin: 0 12px 10px 12px;
          }
        }

        .selected {
          border-color: rgba(202, 180, 136, 1);
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
