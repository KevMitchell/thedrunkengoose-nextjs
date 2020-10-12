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
      <main>
        <Navigation />
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object
}
