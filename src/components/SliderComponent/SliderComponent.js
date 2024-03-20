import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import styles from '../../pages/DetailProduct/DetailProduct.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const thumbnailClass = `${styles.thubnailItem}`;

const SliderComponent = ({ arrImg }) => {
    const [activeSlide, setActiveSlide] = useState(0);

    const sliderRef = useRef();

    function NextArrow(props) {
        return <FontAwesomeIcon icon={faChevronRight} {...props} />;
    }

    function PrevArrow(props) {
        return <FontAwesomeIcon icon={faChevronLeft} {...props} />;
    }

    let settings = {
        ref: sliderRef,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        beforeChange: (current, next) => setActiveSlide(next),
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <>
            <Slider className='flex' {...settings}>
                {arrImg.map((slider, index) => {
                    return <img key={index} src={slider} alt='Slider' />;
                })}
            </Slider>

            {/* Thumbnails */}
            <div className='thumbnail-container flex justify-between mt-[20px]'>
                {arrImg.map((thumbnail, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => sliderRef.current.slickGoTo(index)}
                            className={`${thumbnailClass} ${
                                index === activeSlide ? styles.active : ''
                            }`}
                        >
                            <img
                                src={thumbnail}
                                className='thumbnail-image'
                                alt='Thumbnail Image'
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default SliderComponent;
