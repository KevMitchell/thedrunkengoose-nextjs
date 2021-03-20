export default function Footer () {
  return (
    <>
      <footer>
        Copyright © Kevin Mitchell, 2021
      </footer>
      <style jsx>{`
        footer {
          position: fixed;
          bottom: 0;
          left: 0;
          opacity: 0.6;
          font-size: 10px;
          margin: 10px;
          color: white;
        }
      `}</style>
    </>
  )
}
