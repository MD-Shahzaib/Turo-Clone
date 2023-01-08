import './slider2.css'
import Slider from "react-slick";

function Slider2() {

    const settings = {
        dots: false,
        infinite: false,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0
    };

    return (
        <>
            <div className='container bg my-5 py-2'>
                <Slider {...settings} className="mx-3">

                    <div className="py-2 px-2">
                        <div className="slide-body">
                            <div className="d-flex justify-content-center align-items-center py-2 px-2">
                                <img src={require('../../images/slider2-img1.jpg')} className="" alt="" />
                            </div>
                            <div className="text-body py-2 px-2">
                                <p className="sl1-head">Find the perfect car <span className="sl1-h-purple">to conquer the great outdoors</span></p>
                                <p className="sl1-para">Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.</p>
                                <button className="sl1-btn">Browse cars</button>
                            </div>
                        </div>
                    </div>

                    <div className="py-2 px-2">
                        <div className="slide-body">
                            <div className="d-flex justify-content-center align-items-center py-2 px-2">
                                <img src={require('../../images/slider2-img2.jpg')} className="" alt="" />
                            </div>
                            <div className="text-body py-2 px-2">
                                <p className="sl1-head">Find the perfect car <span className="sl1-h-purple">to unwind for the weekend</span></p>
                                <p className="sl1-para">From daily drivers to spirited sports cars, ditch the grind with convenient nearby cars.</p>
                                <button className="sl1-btn">Browse cars</button>
                            </div>
                        </div>
                    </div>

                    <div className="py-2 px-2">
                        <div className="slide-body">
                            <div className="d-flex justify-content-center align-items-center py-2 px-2">
                                <img src={require('../../images/slider2-img3.jpg')} className="" alt="" />
                            </div>
                            <div className="text-body py-2 px-2">
                                <p className="sl1-head">Find the perfect car <span className="sl1-h-purple">to upgrade your vacation plans</span></p>
                                <p className="sl1-para">Skip the rental car counter and find the perfect car to complement your vacation vibe.</p>
                                <button className="sl1-btn">Browse cars</button>
                            </div>
                        </div>
                    </div>

                    <div className="py-2 px-2">
                        <div className="slide-body">
                            <div className="d-flex justify-content-center align-items-center py-2 px-2">
                                <img src={require('../../images/slider2-img4.jpg')} className="" alt="" />
                            </div>
                            <div className="text-body py-2 px-2">
                                <p className="sl1-head">Find the perfect car <span className="sl1-h-purple">for scenic corners & curves</span></p>
                                <p className="sl1-para">Get your fill of high-performance thrills, with the richest selection of luxury and exotic vehicles anywhere.</p>
                                <button className="sl1-btn">Browse cars</button>
                            </div>
                        </div>
                    </div>

                    <div className="py-2 px-2">
                        <div className="slide-body">
                            <div className="d-flex justify-content-center align-items-center py-2 px-2">
                                <img src={require('../../images/slider2-img5.jpg')} className="" alt="" />
                            </div>
                            <div className="text-body py-2 px-2">
                                <p className="sl1-head">Find the perfect car <span className="sl1-h-purple">to try before you buy</span></p>
                                <p className="sl1-para">Make sure your future wheels work well with your lifestyle by taking your time in the driver’s seat.</p>
                                <button className="sl1-btn">Browse cars</button>
                            </div>
                        </div>
                    </div>

                    <div className="py-2 px-2">
                        <div className="slide-body">
                            <div className="d-flex justify-content-center align-items-center py-2 px-2">
                                <img src={require('../../images/slider2-img6.jpg')} className="" alt="" />
                            </div>
                            <div className="text-body py-2 px-2">
                                <p className="sl1-head">Find the perfect car <span className="sl1-h-purple">to make errand day easier</span></p>
                                <p className="sl1-para">Book a roomy truck or SUV to ease your errand day stress, or to motivate your moving day.</p>
                                <button className="sl1-btn">Browse cars</button>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
        </>
    )
}

export default Slider2;