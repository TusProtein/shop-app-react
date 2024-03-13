import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
const ProductItem = ({
    srcImg,
    name,
    type,
    discount,
    price,
    btnCart,
    btnBuy,
}) => {
    return (
        <div className='col-lg-4 col-md-6'>
            <div
                style={{
                    border: '1px solid #fff',
                }}
                className='product-item flex flex-col gap-y-4 p-4 rounded-[20px] mb-4 text-white'
            >
                <img
                    className='w-full h-auto rounded-2xl'
                    src={srcImg}
                    alt='Whey protein'
                />
                <h3>{name}</h3>
                <p
                    style={{
                        color: 'rgb(173,178,203',
                    }}
                >
                    {type}
                </p>

                {discount && price && (
                    <p>
                        {discount + '₫'}{' '}
                        <span className='line-through'>{price + '₫'}</span>
                    </p>
                )}

                <div className='text-[#FFD700]'>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfAlt} />
                </div>
                <div className='flex gap-x-2'>
                    {btnCart && (
                        <button className='btn btn-primary'>
                            Thêm vào giỏ hàng
                        </button>
                    )}

                    {btnBuy && (
                        <button className='btn btn-success'>Mua ngay</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
