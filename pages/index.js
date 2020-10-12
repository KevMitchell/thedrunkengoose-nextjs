import Head from 'next/head'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

export default function Home () {
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
      </main>
      <Footer />
    </>
  )
}
