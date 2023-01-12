import React from 'react';

const Rectangle = ({src, textContent}) => {
    return (
        <section className='Rectangle'>
            <div className='Rectangle__image'>
                <img src={src}></img>
            </div>
            <h1>{textContent}</h1>
        </section>
    );
};

export default Rectangle;