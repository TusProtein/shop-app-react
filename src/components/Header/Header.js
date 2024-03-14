import React from 'react';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faCartShopping,
    faDumbbell,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import InputComponent from '../InputComponent/InputComponent';
import MenuItems from '../MenuItems/MenuItems';

const Header = () => (
    <div className={styles.Header}>
        <header>
            <nav
                style={{
                    backgroundColor: 'transparent !important',
                    color: '#adb2cb',
                }}
                className={`${styles.navbarHeader} navbar navbar-expand-lg navbar-light bg-dark`}
            >
                <div className='container gap-x-10 py-4 items-center'>
                    <a
                        className={`${styles.navbarBrand} flex gap-x-3 items-center`}
                        href='/home'
                    >
                        <FontAwesomeIcon icon={faDumbbell} />
                        <div className='flex flex-col'>
                            <span className='text-[1.2rem] font-medium'>
                                Heathy
                            </span>
                            <span className='text-[1.2rem] font-medium'>
                                Foods
                            </span>
                        </div>
                    </a>
                    {/* <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button> */}

                    <div>
                        {/* <select
                            style={{
                                backgroundColor: 'transparent',
                                color: '#adb2cb',
                            }}
                            className='form-control w-[200px]'
                            defaultValue='1'
                        >
                            <option value='1' disabled>
                                Danh mục sản phẩm
                            </option>
                            <option value='2'>Đồ ăn Healthy</option>
                            <option value='3'>Thực phẩm bổ sung</option>
                            <option value='4'>Gói tập luyện</option>
                        </select> */}
                        <button
                            style={{
                                border: '1px solid #fff',
                            }}
                            className='btn text-[#adb2cb] hover:text-white flex items-center'
                        >
                            <MenuItems />
                        </button>
                    </div>

                    <div className='seach-box flex justify-center items-center gap-x-4 relative'>
                        <InputComponent
                            type='text'
                            className='w-[500px]'
                            style={{
                                border: '1px solid #fff',
                            }}
                            placeholder='Tìm sản phẩm'
                        />
                        <FontAwesomeIcon
                            className='absolute right-[3.5%] cursor-pointer text-[#adb2cb]'
                            icon={faMagnifyingGlass}
                        />
                    </div>

                    <div
                        className='navbar-collapse flex items-center justify-end'
                        id='navbarSupportedContent'
                    >
                        <ul className='navbar-nav'>
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
