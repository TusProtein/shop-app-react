import React from 'react';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faDumbbell } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
    <div className={styles.Header}>
        <header>
            <nav
                style={{
                    backgroundColor: 'transparent !important',
                }}
                className={`${styles.navbarHeader} navbar navbar-expand-lg navbar-light bg-dark`}
            >
                <div className='container gap-x-6'>
                    <a className={styles.navbarBrand} href='/home'>
                        <FontAwesomeIcon icon={faDumbbell} />
                    </a>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div
                        className='navbar-collapse'
                        id='navbarSupportedContent'
                    >
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <a
                                    className={`nav-link ${styles.navLink} ${styles.active} active`}
                                    aria-current='page'
                                    href='/home'
                                >
                                    Trang chủ
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a
                                    className={`nav-link ${styles.navLink}`}
                                    href='/notify'
                                >
                                    Thông báo
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a
                                    className={`nav-link ${styles.navLink}`}
                                    href='/cart'
                                >
                                    <FontAwesomeIcon icon={faCartShopping} />{' '}
                                    Giỏ hàng
                                </a>
                            </li>
                            <li className='nav-item '>
                                <a
                                    className={`nav-link ${styles.navLink}`}
                                    href='/login'
                                >
                                    Đăng nhập
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </div>
);

Header.defaultProps = {};

export default Header;
