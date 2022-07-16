import type { NextPage } from "next";
import { img1,
    img2,
    img3,
    img4,
    img5,
    img6} from "./imports";


const PictureGallery: NextPage = () => {
    
    return <>
            <div className="picture-gallery__container">
                <div className="slider-section scrolling-wrapper">
                    <img src={img1.src} alt="" className="card"/>
                    <img src={img2.src} alt="" className="card"/>
                    <img src={img3.src} alt="" className="card"/>
                    <img src={img4.src} alt="" className="card"/>
                    <img src={img5.src} alt="" className="card"/>
                    <img src={img6.src} alt="" className="card"/>
                    <img src={img1.src} alt="" className="card"/>
                    <img src={img2.src} alt="" className="card"/>
                    <img src={img3.src} alt="" className="card"/>
                    <img src={img4.src} alt="" className="card"/>
                    <img src={img5.src} alt="" className="card"/>
                    <img src={img6.src} alt="" className="card"/>
                    <img src={img1.src} alt="" className="card"/>
                    <img src={img2.src} alt="" className="card"/>
                    <img src={img3.src} alt="" className="card"/>
                    <img src={img4.src} alt="" className="card"/>
                    <img src={img5.src} alt="" className="card"/>
                    <img src={img6.src} alt="" className="card"/>
                </div>
            </div>
        </>
}

export default PictureGallery;