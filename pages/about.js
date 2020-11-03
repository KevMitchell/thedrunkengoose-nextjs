export default function About () {
  return (
    <div className='about'>
      <div className='text'>
        <div>The Drunken Goose is a cocktail bar serving the very best in drinks and company.</div>
        <div>We can be found in LARP events around the UK; all are welcome to come sit by the fire, drink, eat, gossip, and sing.</div>
        <div>Private tables are available on request.</div>
      </div>
      <img
        src='./img/crew1.jpg'
        alt='Drunken Goose Crew'
      />
      <img
        src='./img/goose1.jpg'
        alt='Drunken Goose'
      />
      <div className='text'>
        <div><a href='https://www.profounddecisions.co.uk/empire' alt='Profound Decisions: Empire'>Profound Decisions: Empire</a></div>
        <div>The staff of The Drunken Goose are part of the Nation of Navarr at Empire events. The Goose can be found in the Navarr woods at the intersection between the main camp path and Murder Alley leading to the Wintermark camp.</div>
      </div>
      <img
        src='./img/crew2.jpg'
        alt='Drunken Goose Crew'
      />
      <img
        src='./img/goose2.jpg'
        alt='Drunken Goose Crew'
      />
      <img
        src='./img/goose3.jpg'
        alt='Drunken Goose Crew'
      />
      <div className='text last'>
        <div>For queries we can be contacted at <a href='mailto:contact@thedrunkengoose.com'>contact@thedrunkengoose.com</a></div>
      </div>

      <style jsx>{`
        .about {
          margin-left: 74px;
        }
      
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
            width: 100%;
            display: inline-block;
          }

          .about {
            top: 310px;
            left: 0;
            text-align: center;
            width: 90%;
          }
        }
      `}</style>
    </div>
  )
}
