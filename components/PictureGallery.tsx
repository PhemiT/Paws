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
                <div className="slider-section">
                    <img src={img1.src} alt="" />
                    <img src={img2.src} alt="" />
                    <img src={img3.src} alt="" />
                    <img src={img4.src} alt="" />
                    <img src={img5.src} alt="" />
                    <img src={img6.src} alt="" />
                </div>
            </div>
        </>
}

export default PictureGallery;