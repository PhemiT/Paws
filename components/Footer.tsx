import { NextPage } from "next";
import { BsArrowLeft,
        BsArrowRight   } from "react-icons/bs"
import styles from '../styles/Footer.module.scss'

const Footer: NextPage = () => {
    
    return <>
            <div className={styles.footer__container}>
                <span><BsArrowLeft /></span>
                <span className={styles.attribution}>Created with ❤️ by Phemi</span>
                <span><BsArrowRight /></span>
            </div>
        </>
}

export default Footer;