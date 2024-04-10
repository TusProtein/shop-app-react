import React from 'react';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import styles from './DetailProduct.module.scss';

// const thumbnailClass = `${styles.thubnailItem}`;

const DetailProduct = () => {
    // const [activeSlide, setActiveSlide] = useState(0);

    // const handleSlidePrev = () => {
    //     const newActiveSlide =
    //         (activeSlide - 1 + thumbnails.length) % thumbnails.length;
    //     setActiveSlide(newActiveSlide);
    // };

    // const handleSlideNext = () => {
    //     const newActiveSlide = (activeSlide + 1) % thumbnails.length;
    //     setActiveSlide(newActiveSlide);
    // };

    const thumbnails = [
        'https://bizweb.dktcdn.net/100/011/344/products/rule-1-r1-protein-chocolate-fudge-5lbs-900x900-jpeg.jpg?v=1688038731657',
        'https://www.wheystore.vn/images/products/2023/11/21/large/inforgraphic-rule1-protein-5lbs_1700622044.jpg.webp',
        'https://www.wheystore.vn/images/products/2024/01/25/large/nhan-phu-rule-1-5lbs_1706177658.jpg.webp',
        'https://www.wheystore.vn/images/products/2023/11/21/large/thong-tin-chung-rule1-protein-5lbs_1700622045.jpg.webp',
        'https://www.wheystore.vn/images/products/2023/11/21/large/tem-cao-rule1-protein-5lbs_1700622045.jpg.webp',
    ];
    // const count = thumbnails.length;

    return (
        <div className={styles.DetailProduct}>
            <div className='container text-white'>
                <div className='flex justify-center text-white p-5 text-2xl font-semibold'>
                    This is DetailProduct Page
                </div>
                {/* body */}
                <div className='row'>
                    <div className='col-md-6'>
                        <div>
                            <SliderComponent arrImg={thumbnails} />
                        </div>
                    </div>
                    {/* Thumbnail */}
                    <div className='col-md-6'>
                        <div className='product-details p-[20px]'>
                            <div className='flex flex-col gap-y-4'>
                                <h2>Thông tin chi tiết sản phẩm</h2>
                                <p>Mô tả sản phẩm</p>
                                <p>Giá: 1.600.000₫</p>
                                <div className='productActions flex justify-start gap-x-2'>
                                    <button className='btn btn-primary'>
                                        Thêm vào giỏ hàng
                                    </button>
                                    <button className='btn btn-success'>
                                        Mua ngay
                                    </button>
                                </div>
                                <div className='product-quantity flex items-center justify-start'>
                                    <div
                                        style={{
                                            border: '1px solid white',
                                        }}
                                        className='border-wrapper'
                                    >
                                        <button
                                            style={{
                                                padding: '0 6px',
                                            }}
                                            className='bg-transparent border-none cursor-pointer'
                                        >
                                            -
                                        </button>
                                        <input
                                            className='p-[4px] bg-transparent border-none text-center w-[40px] focus:outline-none'
                                            style={{
                                                margin: '0 10px',
                                            }}
                                            type='text'
                                            value='1'
                                            readOnly
                                        />
                                        <button
                                            style={{
                                                padding: '0 6px',
                                            }}
                                            className='bg-transparent border-none cursor-pointer'
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// return(

// )

DetailProduct.defaultProps = {};

export default DetailProduct;
