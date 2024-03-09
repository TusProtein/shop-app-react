import React from 'react';

const InputComponent = ({ type, className }) => {
    return (
        <>
            <input type={type} className={className} id='name' />
        </>
    );
};

export default InputComponent;
