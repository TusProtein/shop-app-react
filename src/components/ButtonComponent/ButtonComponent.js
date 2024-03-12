import React from 'react';

const ButtonComponent = ({ type = 'button', className, children, ...rest }) => {
    return (
        <>
            <button
                type={type}
                style={{
                    background:
                        'linear-gradient(to right, rgb(255,64,180), rgb(126,43,237))',
                }}
                className={className}
                {...rest}
            >
                {children}
            </button>
        </>
    );
};

export default ButtonComponent;
