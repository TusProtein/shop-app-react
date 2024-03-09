import React from 'react';
import styles from './Register.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const formControlClass = `form-control ${styles.formControl} bg-transparent border-none text-white mt-2`;

const Register = () => (
    <div className={styles.Register}>
        <div className='container text-white h-[100vh]'>
            <div className='row justify-center items-center mt-6'>
                <div className='col-md-6'>
                    <div
                        className={`${styles.registerForm} mx-auto rounded-xl p-[1.5rem] max-w-[500px] items-center justify-center`}
                    >
                        <h2 className={`${styles.registerHeader} text-center`}>
                            Đăng ký
                        </h2>
                        <div className='form-group mt-2'>
                            <label htmlFor='email'>Email/Phone</label>
                            <input
                                type='text'
                                className={formControlClass}
                                id='email'
                            />
                        </div>
                        <div className='spaceTop border-[0.5px] border-solid border-white'></div>

                        <div className='form-group passwordField relative mt-5'>
                            <label htmlFor='password'>Mật khẩu</label>
                            <input
                                type='password'
                                placeholder='Ít nhất 3 ký tự'
                                className={formControlClass}
                                id='password'
                            />
                            <FontAwesomeIcon
                                style={{
                                    transform: 'translateY(-50%)',
                                    color: 'rgb(105, 244, 181',
                                }}
                                className='absolute top-[72%] right-3 cursor-pointer'
                                icon={faEyeSlash}
                            />
                        </div>
                        <div className='spaceTop border-[0.5px] border-solid border-white'></div>

                        <div className='form-group passwordField relative mt-5'>
                            <label htmlFor='password'>Gõ lại mật khẩu</label>
                            <input
                                type='password'
                                placeholder='Ít nhất 3 ký tự'
                                className={formControlClass}
                                id='confirm-password'
                            />
                            <FontAwesomeIcon
                                style={{
                                    transform: 'translateY(-50%)',
                                    color: 'rgb(105, 244, 181',
                                }}
                                className='absolute top-[72%] right-3 cursor-pointer'
                                icon={faEyeSlash}
                            />
                        </div>
                        <div className='spaceTop border-[0.5px] border-solid border-white'></div>

                        <div className='form-group relative mt-5'>
                            <label htmlFor='full-name'>Họ và tên</label>
                            <input
                                type='text'
                                className={formControlClass}
                                id='full-name'
                            />
                            <FontAwesomeIcon
                                style={{
                                    transform: 'translateY(-50%)',
                                    color: 'rgb(105, 244, 181',
                                }}
                                className='absolute top-[72%] right-3 cursor-pointer'
                                icon={faEyeSlash}
                            />
                        </div>
                        <div className='spaceTop border-[0.5px] border-solid border-white'></div>

                        <div className='form-group relative mt-5'>
                            <label htmlFor='address'>Địa chỉ</label>
                            <input
                                type='text'
                                className={formControlClass}
                                id='address'
                            />
                            <FontAwesomeIcon
                                style={{
                                    transform: 'translateY(-50%)',
                                    color: 'rgb(105, 244, 181',
                                }}
                                className='absolute top-[72%] right-3 cursor-pointer'
                                icon={faEyeSlash}
                            />
                        </div>
                        <div className='spaceTop border-[0.5px] border-solid border-white'></div>

                        <div className='form-group'>
                            <div
                                className={`form-check ${styles.checkboxText} flex items-center justify-between mt-2`}
                            >
                                <span className='flex items-center gap-x-1'>
                                    <input
                                        type='checkbox'
                                        className='form-check-input mb-1'
                                        id='agree'
                                    />
                                    <label
                                        className='form-check-label text-start'
                                        for='agree'
                                    >
                                        Tôi đồng ý với các điều khoản và điều
                                        kiện
                                    </label>
                                </span>
                            </div>
                        </div>

                        <button
                            type='button'
                            style={{
                                background:
                                    'linear-gradient(to right, rgb(255,64,180), rgb(126,43,237))',
                                padding: '10px 0',
                            }}
                            className='registerBtn rounded-[30px] w-full mt-[20px] border-none'
                        >
                            Đăng ký
                        </button>
                        <div
                            style={{
                                backgroundColor: 'rgb(243,165,42)',
                            }}
                            className='divider h-[.5px] m-[20px]'
                        ></div>
                        <p className='text-center'>
                            Bạn đã có tài khoản?{' '}
                            <span>
                                <a
                                    href='/login'
                                    style={{ color: 'rgb(105,244,181)' }}
                                    className='register-link'
                                >
                                    Đăng nhập
                                </a>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

Register.defaultProps = {};

export default Register;
