import React from 'react';

// Gif
import gifloader from '../gif/gifloader.gif'

const Loader = () => {
    return (
        <div>
            <img src={gifloader} alt="Loading" />
            <h1>Loading ...</h1>
        </div>
    );
};

export default Loader;