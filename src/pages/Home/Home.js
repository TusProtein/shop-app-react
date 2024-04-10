import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Paginations from '../../components/Paginations/Paginations';
import ProductItem from '../../components/ProductItem/ProductItem';

function Home() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();

    useEffect(() => {
        loadPage(currentPage);
    }, [currentPage]);

    const loadPage = (page) => {
        axios
            .get(
                `http://localhost:3001/api/product/getAllProducts?page=${page}`
            )
            .then((response) => {
                setTotalPages(response.data.totalPage);
                setProducts(response.data.data);
            })
            .catch((err) => console.log(err));
    };

    const handleChangePage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const nextPage = (e) => {
        if (currentPage < totalPages) {
            setCurrentPage((currentPage) => currentPage + 1);
        } else {
            e.preventDefault();
        }
    };

    const prevPage = (e) => {
        if (currentPage > 1) {
            setCurrentPage((currentPage) => currentPage - 1);
        } else {
            e.preventDefault();
        }
    };

    return (
        <>
            <div className='container'>
                <div className='flex justify-center text-white p-5 text-2xl font-semibold'>
                    This is Home Page
                </div>

                <div className='row'>
                    {products.map((data, index) => {
                        return (
                            <ProductItem
                                key={index}
                                name={data.name}
                                image={data.image}
                                type={data.type}
                                price={data.price}
                                discount={data.discount}
                                rating={data.rating}
                                btnCart
                                btnBuy
                            />
                        );
                    })}
                </div>

                <Paginations
                    nextPage={nextPage}
                    prevPage={prevPage}
                    totalPages={totalPages}
                    handleChangePage={handleChangePage}
                    currentPage={currentPage}
                />
            </div>
        </>
    );
}

export default Home;
