import './slider4.css';
import Slider from "react-slick";

function Slider4() {

    const settings = {
        dots: false,
        infinite: false,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
    };

    return (
        <>
            <div className='container bg my-5 py-2'>
                <h2 className='slider-heading mx-3'>Browse by experience</h2>
                <Slider {...settings} className="mx-3">
                    <div className="card-size my-2">
                        <img src={require('../../images/slider4-img1.jpg')} className="rounded" alt="..." />
                        <span className="cs-para px-1 py-2">Electric</span>
                    </div>
                    <div className="card-size my-2">
                        <img src={require('../../images/slider4-img2.jpg')} className="rounded" alt="..." />
                        <span className="cs-para px-1 py-2">Deluxe & Super Deluxe</span>
                    </div>
                    <div className="card-size my-2">
                        <img src={require('../../images/slider4-img3.jpg')} className="rounded" alt="..." />
                        <span className="cs-para px-1 py-2">Pet-friendly</span>
                    </div>
                    <div className="card-size my-2">
                        <img src={require('../../images/slider4-img4.jpg')} className="rounded" alt="..." />
                        <span className="cs-para px-1 py-2">Convertibles</span>
                    </div>
                    <div className="card-size my-2">
                        <img src={require('../../images/slider4-img5.jpg')} className="rounded" alt="..." />
                        <span className="cs-para px-1 py-2">All-wheel drive</span>
                    </div>
                    <div className="card-size my-2">
                        <img src={require('../../images/slider4-img6.jpg')} className="rounded" alt="..." />
                        <span className="cs-para px-1 py-2">Classic cars</span>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default Slider4;