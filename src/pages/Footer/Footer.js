import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => (
    <div className={styles.Footer}>
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <p className='text-white'>
                            &copy; 2023 by Mai Anh Tu. All rights reserved.
                        </p>
                    </div>
                    <div className='col-md-6'>
                        <p className='text-white text-end'>
                            Terms of Services | Privacy Policy
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

Footer.defaultProps = {};

export default Footer;
