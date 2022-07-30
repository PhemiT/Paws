import type { NextPage } from "next";
import { BsArrowLeft,
        BsArrowRight   } from "react-icons/bs"
import styles from '../styles/Footer.module.scss'

const Footer: NextPage = () => {
    
    return <>
            <div className={styles.footer__container}>
                <span className={styles.attribution}>Created with ❤️ by <span className="my-name"><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/phemi_t">Phemi</a></span></span>
            </div>
        </>
}

export default Footer;