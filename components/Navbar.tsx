import type { NextPage } from "next";
import Image from "next/image";
import styles from '../styles/Navbar.module.scss'
import { GiSittingDog,
         GiJumpingDog } from 'react-icons/gi'
import { RiMenu4Line,
        RiCloseLine } from 'react-icons/ri'
import { useState } from "react";

const Navbar: NextPage = () => {

    const [toggleMenu, setToggleMenu] = useState(true)
    
    return (
            <div className={styles.navbar__container}>
                <div className={styles.logo}>
                    <h3><GiJumpingDog className={styles.logo__icon}/>Paws</h3>
                </div>
                <div>
                    <span className={styles.menu__item}>
                        {/* {toggleMenu
                            ?<RiCloseLine onClick={() => setToggleMenu(false)}/>
                            :<RiMenu4Line onClick={() => setToggleMenu(true)}/>
                            } */}
                            {toggleMenu && (
                                <>
                                <input type="checkbox" id="main-navigation-toggle" className="btn btn--close" title="Toggle main navigation" />
                                <label htmlFor="main-navigation-toggle">
                                  <span></span>
                                </label>
                                <nav id="main-navigation" className="nav-main">
                                    <ul className="menu">
                                    <li className="menu__item">
                                        <a className="menu__link" href="#0">Home</a>
                                    </li>
                                    <li className="menu__item">
                                        <a className="menu__link" href="#0">Gallery</a>
                                    </li>
                                    <li className="menu__item">
                                        <a className="menu__link" href="#0">Post your Pet</a>
                                    </li>
                                    </ul>
                              </nav>
                              </>
                            )}
                    </span>
                </div>
            </div>)
        
}

export default Navbar;