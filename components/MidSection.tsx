import type { NextPage } from "next";
import Link from "next/link";

const MidSection: NextPage = () => {
    return (
        <div className="midsection__main">
            <h1>Explore Memories. <br /> Share your Cute Pet Moments.</h1>
            <div 
            className="midsection__media--container"
            >
                <div
                className="midsection__media"
                />
            </div>
            <div className="buttons">
                <Link href="/gallery">
                    <button>
                        Visit Gallery
                    </button>
                </Link>
                <Link href="/postyourpet">
                    <button>
                        Post your Pet
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default MidSection