import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ProductItem from '../../components/ProductItem/ProductItem';

function Home() {
    return (
        <>
            <div className='container'>
                <div className='flex justify-center text-white p-5 text-2xl font-semibold'>
                    This is Home Page
                </div>
                <div className='seach-box flex justify-center items-center gap-x-4 mb-4 relative'>
                    <input
                        type='text'
                        className='form-control w-[500px] mr-[10px] text-white'
                        style={{
                            backgroundColor: 'rgb(19,23,42)',
                        }}
                        placeholder='Tìm sản phẩm'
                    />
                    <FontAwesomeIcon
                        className='absolute right-[40.5%] cursor-pointer text-[#adb2cb]'
                        icon={faMagnifyingGlass}
                    />
                    <select
                        style={{
                            backgroundColor: 'transparent',
                        }}
                        className='form-control w-[200px] text-white'
                        defaultValue='1'
                    >
                        <option value='1' disabled>
                            Danh mục sản phẩm
                        </option>
                        <option value='2'>Đồ ăn Healthy</option>
                        <option value='3'>Thực phẩm bổ sung</option>
                        <option value='4'>Gói tập luyện</option>
                    </select>
                </div>
                <div className='row'>
                    <ProductItem
                        srcImg='https://bizweb.dktcdn.net/100/011/344/products/rule-1-r1-protein-chocolate-fudge-5lbs-900x900-jpeg.jpg?v=1688038731657'
                        name='Rule 1 Protein 5 Lbs'
                        type='Whey Protein Isolate & Hydrolyzate'
                        price='2.000.000'
                        discount='1.600.000'
                        btnCart
                        btnBuy
                    />
                    <ProductItem
                        srcImg='https://bizweb.dktcdn.net/100/011/344/products/rule-1-r1-protein-chocolate-fudge-5lbs-900x900-jpeg.jpg?v=1688038731657'
                        name='Rule 1 Protein 5 Lbs'
                        type='Whey Protein Isolate & Hydrolyzate'
                        price='2.000.000'
                        discount='1.600.000'
                        btnCart
                        btnBuy
                    />
                    <ProductItem
                        srcImg='https://bizweb.dktcdn.net/100/011/344/products/rule-1-r1-protein-chocolate-fudge-5lbs-900x900-jpeg.jpg?v=1688038731657'
                        name='Rule 1 Protein 5 Lbs'
                        type='Whey Protein Isolate & Hydrolyzate'
                        price='2.000.000'
                        discount='1.600.000'
                        btnCart
                        btnBuy
                    />
                    <ProductItem
                        srcImg='https://bizweb.dktcdn.net/100/011/344/products/rule-1-r1-protein-chocolate-fudge-5lbs-900x900-jpeg.jpg?v=1688038731657'
                        name='Rule 1 Protein 5 Lbs'
                        type='Whey Protein Isolate & Hydrolyzate'
                        price='2.000.000'
                        discount='1.600.000'
                        btnCart
                        btnBuy
                    />
                    <ProductItem
                        srcImg='https://bizweb.dktcdn.net/100/011/344/products/rule-1-r1-protein-chocolate-fudge-5lbs-900x900-jpeg.jpg?v=1688038731657'
                        name='Rule 1 Protein 5 Lbs'
                        type='Whey Protein Isolate & Hydrolyzate'
                        price='2.000.000'
                        discount='1.600.000'
                        btnCart
                        btnBuy
                    />
                </div>
            </div>
        </>
    );
}

export default Home;