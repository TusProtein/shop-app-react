import React from 'react';
import styles from '../../resources/scss/app.module.scss';

const InputComponent = ({ type, className, value, onChange, ...rest }) => {
    const formControlClass = `form-control ${styles.formControl} ${className}`;
    return (
        <>
            <input
                type={type}
                className={formControlClass}
                value={value}
                onChange={onChange}
                {...rest}
            />
        </>
    );
};

export default InputComponent;
