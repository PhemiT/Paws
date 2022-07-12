import { NextPage } from "next";
import Image from "next/image";
import styles from '../styles/Navbar.module.scss'
import { GiSittingDog,
         GiJumpingDog } from 'react-icons/gi'
import { RiMenu4Line } from 'react-icons/ri'

const Navbar: NextPage = () => {
    
    return (
            <div className={styles.navbar__container}>
                <div className={styles.logo}>
                    <h3><GiJumpingDog className={styles.logo__icon}/>Paws</h3>
                </div>
                <div>
                    <span className={styles.menu__item}>
                        <RiMenu4Line />
                    </span>
                </div>
            </div>)
        
}

export default Navbar;