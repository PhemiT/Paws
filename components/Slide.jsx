import React, { useRef, useEffect, useState } from 'react';
import styles from "../styles/Gallery.module.scss"

const useProgressiveImage =  src => {
  const [sourceLoaded, setSourceLoaded] = useState(null)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => setSourceLoaded(src)
  }, [src])

  return sourceLoaded
 } 

const useTilt = (active) => {
    const ref = useRef(null);
  
    useEffect(() => {
      if (!ref.current || !active) {
        return;
      }
  
      const state = {
        rect: undefined,
        mouseX: undefined,
        mouseY: undefined
      };
  
      let el = ref.current;
  
      const handleMouseMove = (e) => {
        if (!el) {
          return;
        }
        if (!state.rect) {
          state.rect = el.getBoundingClientRect();
        }
        state.mouseX = e.clientX;
        state.mouseY = e.clientY;
        const px = (state.mouseX - state.rect.left) / state.rect.width;
        const py = (state.mouseY - state.rect.top) / state.rect.height;
  
        el.style.setProperty("--px", px);
        el.style.setProperty("--py", py);
      };
  
      el.addEventListener("mousemove", handleMouseMove);
  
      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
      };
    }, [active]);
  
    return ref;
  }

const Slide = ({ slide, offset, placeholder }) => {
    const active = offset === 0 ? true : null;
    const ref = useTilt(active);
    const loaded = useProgressiveImage(slide.image_url)
  
    return (
      <div
        ref={ref}
        className={styles.slide}
        data-active={active}
        style={{
          "--offset": offset,
          "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
        }}
      >
        <div
          className={styles.slideBackground}
          style={{
            backgroundImage: `url('${loaded || placeholder}')`
          }}
        />
        <div
          className={styles.slideContent}
          style={{
            backgroundImage: `url('${loaded || placeholder}')`
          }}
        >
          <div className={styles.slideContentInner}>
            <h2 className={styles.slideTitle}>{slide.name}</h2>
            <p className={styles.slideDescription}>{slide.caption}</p>
          </div>
        </div>
      </div>
    );
  }

  export default Slide