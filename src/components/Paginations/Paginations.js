import React from 'react';

const Paginations = ({ customStyle }) => {
    const className = 'page-link bg-transparent text-white border-none';
    return (
        <div>
            <nav aria-label='Page navigation example'>
                <ul className='pagination justify-center mt-6'>
                    <li className='page-item'>
                        <a
                            className={`${className} ${customStyle}`}
                            href='#'
                            aria-label='Previous'
                        >
                            <span aria-hidden='true'>&laquo;</span>
                        </a>
                    </li>
                    <li className='page-item'>
                        <a className={`${className} ${customStyle}`} href='#'>
                            1
                        </a>
                    </li>
                    <li className='page-item'>
                        <a className={`${className} ${customStyle}`} href='#'>
                            2
                        </a>
                    </li>
                    <li className='page-item'>
                        <a className={`${className} ${customStyle}`} href='#'>
                            3
                        </a>
                    </li>
                    <li className='page-item'>
                        <a
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
