import React from 'react';
import styles from './Login.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import InputComponent from '../../components/InputComponent/InputComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';

const formControlClass = `form-control ${styles.formControl} bg-transparent border-none text-white mt-2`;

const Login = () => (
    <div className={styles.Login}>
        <div className='container text-white h-[100vh]'>
            <div className='row justify-center items-center mt-16'>
                <div className='col-md-6'>
                    <div
                        className={`${styles.loginForm} mx-auto rounded-xl p-[1.5rem] max-w-[500px] items-center justify-center`}
                    >
                        <h2 className={`${styles.loginHeader} text-center`}>
                            Đăng nhập
                        </h2>
                        <div className='form-group mt-2'>
                            <label htmlFor='email'>Email/Phone</label>

                            <InputComponent
                                type='text'
                                id='email'
                                className='bg-transparent border-none text-white mt-2 outline-none'
                            />
                        </div>
                        <div className='spaceTop border-[0.5px] border-solid border-white'></div>

                        <div className='form-group passwordField relative mt-5'>
                            <label htmlFor='password'>Mật khẩu</label>

                            <InputComponent
                                type='password'
                                placeholder='Ít nhất 3 ký tự'
                                id='password'
                                className='bg-transparent border-none text-white mt-2 outline-none placeholder:text-[#684a3b]'
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
                                        id='remember'
                                    />
                                    <label
                                        className='form-check-label text-start'
                                        htmlFor='remember'
                                    >
                                        Ghi nhớ đăng nhập
                                    </label>
                                </span>
                                <a
                                    href='/forgotPassword'
                                    style={{ color: 'rgb(105,244,181)' }}
                                    className='register-link'
                                >
                                    Quên mật khẩu
                                </a>
                            </div>
                        </div>
                        <div className='form-group'>
                            <select
                                style={{
                                    border: '1px solid rgb(225,64,180)',
                                }}
                                className={`${formControlClass} access-right mt-3 w-[200px] text-white`}
                                defaultValue='1'
                            >
                                <option value='1' disabled>
                                    Quyền đăng nhập
                                </option>
                                <option>Người dùng</option>
                                <option>Quản trị viên</option>
                            </select>
                        </div>
                        <ButtonComponent
                            type='button'
                            className='loginBtn rounded-[30px] w-full mt-[20px] border-none py-[10px]'
                        >
                            Đăng nhập
                        </ButtonComponent>
                        <div
                            style={{
                                backgroundColor: 'rgb(243,165,42)',
                            }}
                            className='divider h-[.5px] m-[20px]'
                        ></div>
                        <p className='text-center'>
                            Bạn chưa đăng ký?{' '}
                            <span>
                                <a
                                    href='/register'
                                    style={{ color: 'rgb(105,244,181)' }}
                                    className='register-link'
                                >
                                    Tạo tài khoản
                                </a>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

Login.defaultProps = {};

export default Login;
