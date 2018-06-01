import React from 'react';

const Home = () => {
    return (
        <div>
            <div>
                I am a good home component.
            </div>
            <button onClick={ () => { console.log('You clicked me!'); } } >
                Press Me!
            </button>
        </div>
    );
};

export default Home;