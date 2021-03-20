import Link from 'next/link'

export function TabMenu () {
  return (
    <div>
      <Link href={'/'}>
        <a>Recipes</a>
      </Link>
      <Link href={'/saved'}>
        <a>Saved</a>
      </Link>
      <Link href={'/about'}>
        <a>About us</a>
      </Link>
      <style jsx>{`
        a {
          display: inline-block;
          width: 120px;
          height: 40px;
          background-repeat: no-repeat;
          text-align: center;
          padding-top: 14px;
          font-size: 20px;
          text-decoration: none;
          cursor: pointer;
          color: white;
        }
      `}</style>
    </div>
  )
}
