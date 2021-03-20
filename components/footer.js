export function Footer () {
  return (
    <>
      <footer>
        Copyright © Kevin Mitchell, 2021. UX Design by Nichola Evans
      </footer>
      <style jsx>{`
        footer {
          position: fixed;
          bottom: 0;
          left: 0;
          opacity: 0.6;
          font-size: 16px;
          margin: 10px;
          color: white;
        }
      `}</style>
    </>
  )
}
