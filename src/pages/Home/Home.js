import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ProductItem from '../../components/ProductItem/ProductItem';
import InputComponent from '../../components/InputComponent/InputComponent';

function Home() {
    const arrProducts = [
        'https://bizweb.dktcdn.net/100/011/344/products/rule-1-r1-protein-chocolate-fudge-5lbs-900x900-jpeg.jpg?v=1688038731657',
        'https://bizweb.dktcdn.net/thumb/grande/100/011/344/products/nutrabolics-hydropure-extreme-ch.jpg?v=1689657674980',
        'https://bizweb.dktcdn.net/thumb/1024x1024/100/011/344/products/biotechusa-hydro-whey-zero-chocolate-1-8kg-gymstore-jpeg.jpg?v=1690008647117',
        'https://bizweb.dktcdn.net/thumb/grande/100/011/344/products/b4.jpg?v=1695203278557',
        'https://bizweb.dktcdn.net/100/011/344/products/rule-1-r1-protein-chocolate-fudge-5lbs-900x900-jpeg.jpg?v=1688038731657',
        'https://bizweb.dktcdn.net/100/011/344/products/rule-1-r1-protein-chocolate-fudge-5lbs-900x900-jpeg.jpg?v=1688038731657',
        'https://bizweb.dktcdn.net/100/011/344/products/rule-1-r1-protein-chocolate-fudge-5lbs-900x900-jpeg.jpg?v=1688038731657',
        'https://bizweb.dktcdn.net/100/011/344/products/rule-1-r1-protein-chocolate-fudge-5lbs-900x900-jpeg.jpg?v=1688038731657',
    ];
    return (
        <>
            <div className='container'>
                <div className='flex justify-center text-white p-5 text-2xl font-semibold'>
                    This is Home Page
                </div>

                <div className='row'>
                    {arrProducts.map((srcImg, index) => {
                        return (
                            <ProductItem
                                key={index}
                                srcImg={srcImg}
                                type='Whey Protein Isolate & Hydrolyzate'
                                price='2.000.000'
                                discount='1.600.000'
                                btnCart
                                btnBuy
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Home;
