import React, { useReducer } from 'react';
import Head from "next/head";
import Slide from '../components/Slide';
import styles from "../styles/Gallery.module.scss"
import dbConnect from '../lib/dbConnect'
import Image from '../models/Image'
import Link from "next/link";
import { BsArrowUpLeft,
        BsArrowLeftShort,
        BsArrowRightShort
} from "react-icons/bs";

export async function getServerSideProps() {
  await dbConnect()

  /* find all the data in our database */
  const result = await Image.find({})
  const images = result.map((doc) => {
    const image = doc.toObject()
    image._id = image._id.toString()
    return image
  })
  const imagesLength = images.length

  return { props: { slides: images, imagesLength: imagesLength } }
}

const initialState = {
    slideIndex: 0
  };
  
   

const Gallery = ({slides}) => {
    const slidesReducer = (state, event) => {
      if (event.type === "NEXT") {
        return {
          ...state,
          slideIndex: (state.slideIndex + 1) % slides.length
        };
      }
      if (event.type === "PREV") {
        return {
          ...state,
          slideIndex:
            state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
        };
      }
    };
    
    const [state, dispatch] = useReducer(slidesReducer, initialState);
  
    return (
      <>
        <Head>
          <title>Paws | Gallery</title>
        </Head>
        <div className="redirect">
        <Link href="/">
          <button className="backtohome"><span><BsArrowUpLeft /> Back to Home</span></button>
        </Link>  
        </div>
      <div className={styles.slides}>
        <button onClick={() => dispatch({ type: "NEXT" })}><span><BsArrowLeftShort /></span></button>
  
        {[...slides, ...slides, ...slides].map((slide, i) => {
          let offset = slides.length + (state.slideIndex - i);
          return <Slide slide={slide} offset={offset} key={i} />;
        })}
        <button onClick={() => dispatch({ type: "PREV" })}><span><BsArrowRightShort /></span></button>
        <style jsx global>
          {
            `
            @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');
  
            *,
            *::before,
            *::after {
              box-sizing: border-box;
              position: relative;
              font-family: 'Syne', sans-serif;
            }
            
            html,
            body {
              max-height: 100vh;
              max-width: 100vw;
              margin: 0;
              padding: 0;
              font-size: 3vmin;
            }
            
            html {
              background: #151515;
              color: #fff;
              overflow: hidden;
            }
            
            body {
              display: flex;
              justify-content: center;
              align-items: center;
            }
            
            `
          }
        </style>
      </div>
      </>
    );
  }
  
  export default Gallery