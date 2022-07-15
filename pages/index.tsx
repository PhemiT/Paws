import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import PictureGallery from '../components/PictureGallery'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <div className="gallery-container">
        <h1 className={styles.Title}>Pet Gallery</h1>
        <PictureGallery />
      </div>
      <Footer />
    </div>
  )
}

export default Home
