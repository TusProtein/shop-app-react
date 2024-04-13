import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import Paginations from '../../components/Paginations/Paginations';
import ProductItem from '../../components/ProductItem/ProductItem';

function Home() {
    const [currentPage, setCurrentPage] = useState(1);

    const loadPage = async (page) => {
        const response = await axios.get(
            `http://localhost:3001/api/product/getAllProducts?page=${page}`
        );
        return response.data;
    };

    const { isLoading, error, data } = useQuery({
        queryKey: ['getAllProducts', currentPage],
        queryFn: () => loadPage(currentPage),
    });

    const totalPages = data ? data.totalPage : null;

    const handleChangePage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const nextPage = (e) => {
        e.preventDefault();

        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = (e) => {
        e.preventDefault();

        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // if (isLoading)
    //     return (
    //         <div className='flex justify-center text-white p-5 text-2xl font-semibold'>
    //             Loading data...
    //         </div>
    //     );

    if (error)
        return (
            <div className='flex justify-center text-white p-5 text-2xl font-semibold'>
                Fetching data errors...
            </div>
        );

    return (
        <>
            <div className='container'>
                <div className='flex justify-center text-white p-5 text-2xl font-semibold'>
                    This is Home Page
                </div>

                <div className='row'>
                    {data?.dataObj?.map((data, index) => {
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
