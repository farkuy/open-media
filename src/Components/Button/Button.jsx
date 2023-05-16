import React from 'react';

const Button = ({urlAudio}) => {

    const audio = new Audio(urlAudio);

    const playAudio = (e) => {
        e.preventDefault();
        audio.play();
    }

    return (
        <button
            onClick={playAudio}
        >
            Жми
        </button>
    );
};

export default Button;