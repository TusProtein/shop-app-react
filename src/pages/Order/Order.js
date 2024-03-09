import React from 'react';
import InputComponent from '../../components/InputComponent/InputComponent';
import styles from './Order.module.scss';

// Create Obj css
const formControlClass = `form-control ${styles.formControl}`;
const formLabelClass = `form-label ${styles.formControl}`;
const btnGradientClass = `btn ${styles.btnGradient}`;

const Order = () => (
    <div className={styles.Order}>
        <div className='container text-white h-[100vh]'>
            <div className='flex justify-center text-white p-5 text-2xl font-semibold'>
                This is Order Page
            </div>
            {/* body */}
            <div className='row'>
                <div className='col-md-6'>
                    <h2 className={`${styles.productHeader} mb-3`}>
                        Thông tin người nhận
                    </h2>
                    <form>
                        <div className='flex flex-col gap-y-3'>
                            <div>
                                <label
                                    htmlFor='name'
                                    className={formLabelClass}
                                >
                                    Họ và tên
                                </label>
                                <InputComponent
                                    type='text'
                                    className={formControlClass}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor='email'
                                    className={formLabelClass}
                                >
                                    Email
                                </label>
                                <input
                                    type='email'
                                    className={formControlClass}
                                    id='email'
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor='phone'
                                    className={formLabelClass}
                                >
                                    Số điện thoại
                                </label>
                                <input
                                    type='text'
                                    className={formControlClass}
                                    id='phone'
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <div className='col-md-6'>
                    <h2 className={`${styles.productOrder} mb-3`}>
                        Sản phẩm đã đặt hàng
                    </h2>
                    <table>
                        <thead>
                            <tr>
                                <th scope='col' className='text-start'>
                                    Sản phẩm
                                </th>
                                <th scope='col' className=''>
                                    Số lượng
                                </th>
                                <th scope='col' className=''>
                                    Đơn giá
                                </th>
                                <th scope='col' className=''>
                                    Tổng giá
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className='productInfo flex gap-x-3 items-center'>
                                        <img
                                            className='w-[100px] h-[100px] rounded'
                                            src='https://bizweb.dktcdn.net/100/011/344/products/rule-1-r1-protein-chocolate-fudge-5lbs-900x900-jpeg.jpg?v=1688038731657'
                                            alt='Whey protein'
                                        />
                                        <span>Tên sản phẩm</span>
                                    </div>
                                </td>
                                <td>2</td>
                                <td>1.600.000₫</td>
                                <td>3.200.000₫</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='productInfo flex gap-x-3 items-center'>
                                        <img
                                            className='w-[100px] h-[100px] rounded'
                                            src='https://bizweb.dktcdn.net/100/011/344/products/rule-1-r1-protein-chocolate-fudge-5lbs-900x900-jpeg.jpg?v=1688038731657'
                                            alt='Whey protein'
                                        />
                                        <span>Tên sản phẩm</span>
                                    </div>
                                </td>
                                <td>1</td>
                                <td>1.600.000₫</td>
                                <td>1.600.000₫</td>
                            </tr>
                        </tbody>
                    </table>
                    {/* Pay */}

                    <div className='flex flex-col gap-y-3 mt-3'>
                        <div className='text-start '>
                            <h4 className='text-end'>
                                Tổng thanh toán: 4.800.000₫
                            </h4>
                        </div>
                        <div className=''>
                            <h4 className={`${styles.productHeader}`}>
                                Nhập Coupon
                            </h4>
                            <div className='input-group'>
                                <input
                                    type='text'
                                    className={formControlClass}
                                    placeholder='Nhập Coupon'
                                />
                                <button
                                    className={btnGradientClass}
                                    type='button'
                                >
                                    Áp dụng
                                </button>
                            </div>
                        </div>
                        <div className='text-start '>
                            <button className={btnGradientClass} type='button'>
                                Đặt hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

Order.defaultProps = {};

export default Order;
