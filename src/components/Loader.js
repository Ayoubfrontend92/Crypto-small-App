import React from 'react';

// Gif
import gifloader from '../gif/gifloader.gif'

const Loader = () => {
    return (
        <div>
            <img src={gifloader} alt="Loading" />
        </div>
    );
};

export default Loader;