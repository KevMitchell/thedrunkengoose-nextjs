export function MainTitle () {
  return (
    <div className='container'>
      <div className='main-title' />
      <div className='main-title__text'>The home of delicious cocktail recipes</div>
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
          height: 90px;
          max-height: 90px;
          padding-top: 10%;
          margin-bottom: 20px;
        }

        .main-title__text {
          text-align: center;
          color: #ba8e36;
          font-size: 32px;
          margin-top: 14px;
          margin-bottom: 60px;
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
