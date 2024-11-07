import React, { useEffect, useState } from 'react';
import backToTopImg from '../assets/images/svg/double-arrow.svg'

const BackToTop = () => {
    const [scrollTopVisible, setScrollTopVisible] = useState(false);

    const scrollHandler = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollTopHandler = () => {
        setScrollTopVisible(window.scrollY >= 70);
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollTopHandler);
    }, ); 

    return (
        <div>
            {scrollTopVisible && (
                <img onClick={scrollHandler} src={backToTopImg} alt="svg" className='fixed right-3 bottom-3 cursor-pointer bg-orange p-2 rounded border-white border'/>
            )}
        </div>
    );
};

export default BackToTop;
