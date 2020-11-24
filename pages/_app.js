import PropTypes from 'prop-types'
import Head from 'next/head'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import '../styles.css'

export default function App ({ Component, pageProps = {} }) {
  return (
    <>
      <div className='background'></div>
      <Head>
        <title>The Drunken Goose</title>
        <link href='https://fonts.googleapis.com/css?family=Aclonica' rel='stylesheet'></link>
        <meta
          name="description"
          content="The Drunken Goose Website"
        />
        <meta name='viewport' content='width=device-width,minimum-scale=1,initial-scale=1' />
      </Head>
      <Navigation />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />

      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          background-color: black;
        }
      `}</style>

      <style jsx>{`
        .background {
          position: fixed;
          width: 100%;
          height: 100vh;
          min-height: 100%;
          top: 0;
          background-image: url('./img/background.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          -webkit-background-size: cover;
          opacity: 0.6;
        }
        html {
          height: 100vh;
          min-height: 100%;
        }
        main {
          position: relative;
          top: 0;
          right: 0;
          left: 150px;
          text-align: center;
          width: calc(95% - 320px);
          height: 100%;
          margin: 30px auto;
        }

        @media (max-width: 780px) {
          main {
            width: 95%;
            left: 0;
            text-align: center;
            margin-left: 0;
          }
        }
      `}</style>
    </>
  )
}

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object
}
