import type { NextPage } from "next";

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
                <button>Visit Gallery</button>
                <button>Post your Pet</button>
            </div>
        </div>
    )
}

export default MidSection