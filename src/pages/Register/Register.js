import React, { useState } from 'react';
import styles from './Register.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import InputComponent from '../../components/InputComponent/InputComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';

// const formControlClass = `form-control ${styles.formControl} bg-transparent border-none text-white mt-2`;

const Register = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const handleChangeInput = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
    };

    const handleRegister = () => {
        axios
            .post('http://localhost:3001/api/user/createUser', formData)
            .then((response) => {
                alert(response.data.message);
                console.log(response.data.data);
                // window.location.href = '/login';
            })
            .catch((err) => {
                alert(err.response.data.message);
                console.log(err);
            });
    };

    return (
        <div className={styles.Register}>
            <div className='container text-white h-[100vh]'>
                <div className='row justify-center items-center mt-6'>
                    <div className='col-md-6'>
                        <div
                            className={`${styles.registerForm} mx-auto rounded-xl p-[1.5rem] max-w-[500px] items-center justify-center`}
                        >
                            <h2
                                className={`${styles.registerHeader} text-center`}
                            >
                                Đăng ký
                            </h2>
                            <div className='form-group mt-2'>
                                <label htmlFor='full-name'>Họ và tên</label>
                                <InputComponent
                                    type='text'
                                    className='bg-transparent border-none text-white mt-2'
                                    id='full-name'
                                    name='fullname'
                                    value={formData.fullname}
                                    onChange={handleChangeInput}
                                />
                            </div>
                            <div className='spaceTop border-[0.5px] border-solid border-white'></div>

                            <div className='form-group relative mt-5'>
                                <label htmlFor='email'>Email</label>

                                <InputComponent
                                    type='text'
                                    className='bg-transparent border-none text-white mt-2'
                                    id='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChangeInput}
                                />
                            </div>
                            <div className='spaceTop border-[0.5px] border-solid border-white'></div>

                            <div className='form-group relative mt-5'>
                                <label htmlFor='phone'>Số điện thoại</label>
                                <InputComponent
                                    type='text'
                                    className='bg-transparent border-none text-white mt-2'
                                    id='phone'
                                    name='phone'
                                    value={formData.phone}
                                    onChange={handleChangeInput}
                                />
                            </div>
                            <div className='spaceTop border-[0.5px] border-solid border-white'></div>

                            <div className='form-group passwordField relative mt-5'>
                                <label htmlFor='password'>Mật khẩu</label>
                                <InputComponent
                                    type='password'
                                    placeholder='Ít nhất 3 ký tự'
                                    className='bg-transparent border-none text-white mt-2 placeholder:text-[#684a3b]'
                                    id='password'
                                    name='password'
                                    value={formData.password}
                                    onChange={handleChangeInput}
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
                                <label htmlFor='password'>
                                    Gõ lại mật khẩu
                                </label>
                                <InputComponent
                                    type='password'
                                    placeholder='Ít nhất 3 ký tự'
                                    className='bg-transparent border-none text-white mt-2 placeholder:text-[#684a3b]'
                                    id='confirm-password'
                                    name='confirmPassword'
                                    value={formData.confirmPassword}
                                    onChange={handleChangeInput}
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
                                            htmlFor='agree'
                                        >
                                            Tôi đồng ý với các điều khoản và
                                            điều kiện
                                        </label>
                                    </span>
                                </div>
                            </div>

                            <ButtonComponent
                                type='button'
                                className='registerBtn rounded-[30px] w-full mt-[20px] border-none py-[10px]'
                                onClick={handleRegister}
                            >
                                Đăng ký
                            </ButtonComponent>
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
};

Register.defaultProps = {};

export default Register;
