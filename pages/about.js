export default function About () {
  return (
    <>
      <div className='text'>
        <div>The Drunken Goose is a cocktail bar serving the very best in drinks and company.</div>
        <div>We can be found serving beside the campfires in campsites and gardens around the UK.</div>
      </div>
      <img
        src='./img/goose1.jpg'
        alt='Drunken Goose Crew'
      />
      <img
        src='./img/goose2.jpg'
        alt='Drunken Goose'
      />
      <img
        src='./img/goose3.jpg'
        alt='Drunken Goose'
      />
      <img
        src='./img/goose4.jpg'
        alt='Drunken Goose'
      />
      <div className='text last'>
        <div>For queries we can be contacted at <a href='mailto:contact@thedrunkengoose.com'>contact@thedrunkengoose.com</a></div>
      </div>

      <style jsx>{`
        .text {
          color: black;
          font-size: 20px;
          background-image: url(./img/parch.jpg);
          border: 3px solid  rgba(80, 26, 26, 0.5);
          padding: 10px;
          opacity: 0.9;
          text-align: left
        }
      
        .text div {
          padding: 5px 0;
        }
      
        a {
          color: rgb(212, 21, 21);
          text-decoration: none;
          font-size: 24px;
          opacity: 1;
        }
        
        img {
          max-width: 90%;
          border: 5px solid  rgba(80, 26, 26, 0.5);
          margin: 20px 0;
        }
        
        .last {
          margin-bottom: 30px;
        }

        @media (max-width: 780px) {
          div {
            display: inline-block;
          }

          .about {
            top: 310px;
            left: 0;
            text-align: center;
            width: 90%;
            margin-left: 0;
          }

          a {
            font-size: 18px;
          }
        }
      `}</style>
    </>
  )
}
