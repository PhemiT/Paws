import type { NextPage } from 'next'
import Head from "next/head"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.scss'
import MidSection from '../components/MidSection'

const Home: NextPage = () => {
  return (
    <div className={styles.App}>
      <Head>
        <title>Paws</title>
      </Head>
      <Navbar />
      <MidSection />
      <Footer />
    </div>
  )
}

export default Home
