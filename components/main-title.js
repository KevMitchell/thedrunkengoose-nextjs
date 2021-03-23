export function MainTitle () {
  return (
    <div className='container'>
      <div className='main-title' />
      <style jsx>{`
        .container {
          padding: 40px 0 0 30px;
        }

        .main-title {
          position: relative;
          top: 0;
          left: 0;
          background-image: url('/img/goose-header.svg');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          height: 100px;
          max-height: 100px;
          padding-top: 10%;
          margin-bottom: 20px;
        }

        @media (max-width: 410px) {
          .main-title {
            height: 80px;
          }

          .container {
            padding-left: 10px;
          }
        }
      `}</style>
    </div>
  )
}
