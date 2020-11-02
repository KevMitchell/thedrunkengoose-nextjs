import PropTypes from 'prop-types'
import Head from 'next/head'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import '../styles.css'

export default function App ({ Component, pageProps = {} }) {
  return (
    <>
      <Head>
        <title>The Drunken Goose</title>
        <link href='https://fonts.googleapis.com/css?family=Aclonica' rel='stylesheet'></link>
        <meta
          name="description"
          content="The Drunken Goose Website"
        />
      </Head>
      <Navigation />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />

      <style jsx>{`
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
      `}</style>
    </>
  )
}

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object
}
