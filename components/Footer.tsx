import type { NextPage } from "next";
import { BsArrowLeft,
        BsArrowRight   } from "react-icons/bs"
import styles from '../styles/Footer.module.scss'

const Footer: NextPage = () => {
    
    return <>
            <div className={styles.footer__container}>
                <span className="footer-btn"><BsArrowLeft /></span>
                <span className={styles.attribution}>Created with ❤️ by Phemi</span>
                <span className="footer-btn"><BsArrowRight /></span>
            </div>
        </>
}

export default Footer;