import React from 'react';
import styles from '../../resources/scss/app.module.scss';

const InputComponent = ({ type, className, ...rest }) => {
    const formControlClass = `form-control ${styles.formControl} ${className}`;
    return (
        <>
            <input type={type} className={formControlClass} {...rest} />
        </>
    );
};

export default InputComponent;
