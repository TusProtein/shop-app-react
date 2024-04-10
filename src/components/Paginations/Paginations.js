import React from 'react';
import $ from 'jquery';
const Paginations = ({
    customStyle,
    nextPage,
    prevPage,
    totalPages,
    handleChangePage,
    currentPage,
}) => {
    const className = 'page-link bg-transparent text-[#adb2cb] border-none';

    const renderPageNumbers = () => {
        let pageNumbers = [];

        for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
            let isCheckPageNumber = currentPage === pageNumber;

            const pageClass = isCheckPageNumber
                ? `${className} text-white`
                : className;

            pageNumbers.push(
                <li key={pageNumber} className='page-item'>
                    <a
                        onClick={() => handleChangePage(pageNumber)}
                        className={`${pageClass} ${customStyle}`}
                        href='#'
                    >
                        {pageNumber}
                    </a>
                </li>
            );
        }

        return pageNumbers;
    };

    return (
        <div>
            <nav aria-label='Page navigation example'>
                <ul className='pagination justify-center mt-6'>
                    <li className='page-item'>
                        <a
                            onClick={prevPage}
                            className={`${className} ${customStyle}`}
                            href='#'
                            aria-label='Previous'
                        >
                            <span aria-hidden='true'>&laquo;</span>
                        </a>
                    </li>

                    {renderPageNumbers()}

                    <li className='page-item'>
                        <a
                            onClick={nextPage}
                            className={`${className} ${customStyle}`}
                            href='#'
                            aria-label='Next'
                        >
                            <span aria-hidden='true'>&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Paginations;
