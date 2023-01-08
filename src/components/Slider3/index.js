import './slider3.css'
import Slider from "react-slick";

function Slider3() {

    const settings = {
        dots: false,
        infinite: false,
        speed: 400,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='container bg my-3 py-2 px-3'>
                <h2 className='slider-heading mx-3'>Browse by destination</h2>
                <Slider {...settings} className="mx-3">
                    <div className="card c-body3 d-flex justify-content-center align-items-center">
                        <img src={require('../../images/card-losangeles.png')} className="card-img-top card-img3" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Los Angeles</h5>
                        </div>
                    </div>
                    <div className="card c-body3 d-flex justify-content-center align-items-center">
                        <img src={require('../../images/card-miami.png')} className="card-img-top card-img3" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Miami</h5>
                        </div>
                    </div>
                    <div className="card c-body3 d-flex justify-content-center align-items-center">
                        <img src={require('../../images/card-honolulu.png')} className="card-img-top card-img3" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Honolulu</h5>
                        </div>
                    </div>
                    <div className="card c-body3 d-flex justify-content-center align-items-center">
                        <img src={require('../../images/card-denver.png')} className="card-img-top card-img3" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Denver</h5>
                        </div>
                    </div>
                    <div className="card c-body3 d-flex justify-content-center align-items-center">
                        <img src={require('../../images/card-london.png')} className="card-img-top card-img3" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">London</h5>
                        </div>
                    </div>
                    <div className="card c-body3 d-flex justify-content-center align-items-center">
                        <img src={require('../../images/card-toronto.png')} className="card-img-top card-img3" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Toronto</h5>
                        </div>
                    </div>
                    <div className="card c-body3 d-flex justify-content-center align-items-center">
                        <img src={require('../../images/card-jerseycity.png')} className="card-img-top card-img3" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Jersey City</h5>
                        </div>
                    </div>
                    <div className="card c-body3 d-flex justify-content-center align-items-center">
                        <img src={require('../../images/card-sanfrancisco.png')} className="card-img-top card-img3" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">San Francisco</h5>
                        </div>
                    </div>
                    <div className="card c-body3 d-flex justify-content-center align-items-center">
                        <img src={require('../../images/card-atlanta.png')} className="card-img-top card-img3" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Atlanta</h5>
                        </div>
                    </div>
                    <div className="card c-body3 d-flex justify-content-center align-items-center">
                        <img src={require('../../images/card-phoenix.png')} className="card-img-top card-img3" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Phoenix</h5>
                        </div>
                    </div>
                    <div className="card c-body3 d-flex justify-content-center align-items-center">
                        <img src={require('../../images/card-orlando.png')} className="card-img-top card-img3" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Orlando</h5>
                        </div>
                    </div>
                    <div className="card c-body3 d-flex justify-content-center align-items-center">
                        <img src={require('../../images/card-lasvegas.png')} className="card-img-top card-img3" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Lasvegas</h5>
                        </div>
                    </div>
                    <div className="card c-body3 d-flex justify-content-center align-items-center">
                        <img src={require('../../images/card-dallas.png')} className="card-img-top card-img3" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dallas</h5>
                        </div>
                    </div>
                    <div className="card c-body3 d-flex justify-content-center align-items-center">
                        <img src={require('../../images/card-washingtondc.png')} className="card-img-top card-img3" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Washington DC</h5>
                        </div>
                    </div>
                    <div className="card c-body3 d-flex justify-content-center align-items-center">
                        <img src={require('../../images/card-chicago.png')} className="card-img-top card-img3" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Chicago</h5>
                        </div>
                    </div>
                    <div className="card c-body3 d-flex justify-content-center align-items-center">
                        <img src={require('../../images/card-houston.png')} className="card-img-top card-img3" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Houston</h5>
                        </div>
                    </div>
                    <div className="card c-body3 d-flex justify-content-center align-items-center">
                        <img src={require('../../images/card-sandiego.png')} className="card-img-top card-img3" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">San Diego</h5>
                        </div>
                    </div>
                    <div className="card c-body3 d-flex justify-content-center align-items-center">
                        <img src={require('../../images/card-boston.png')} className="card-img-top card-img3" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Boston</h5>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default Slider3;