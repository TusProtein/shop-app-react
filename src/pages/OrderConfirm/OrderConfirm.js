import React from 'react';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import styles from './OrderConfirm.module.scss';

const btnGradientClass = `btn ${styles.btnGradient}`;

const OrderConfirm = () => (
    <div className={`container text-white ${styles.OrderConfirm} h-[100vh]`}>
        <div className='flex justify-center'>
            <div
                style={{
                    boxShadow: '0 0 5px rgba(255,255,255,0.1',
                    margin: '50px 0',
                    padding: '1.4rem',
                }}
                className='confirmationContainer max-w-[600px] text-center rounded-xl'
            >
                <h2>Xác nhận đơn hàng</h2>
                <p>
                    Cảm ơn bạn đã đặt hàng! Dưới đây là thông tin chi tiết về
                    đơn hàng của bạn
                </p>
            </div>
        </div>
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
        <div className='text-center mt-3'>
            <ButtonComponent className={btnGradientClass} type='button'>
                Tiếp tục mua sắm
            </ButtonComponent>
        </div>
    </div>
);

OrderConfirm.defaultProps = {};

export default OrderConfirm;
