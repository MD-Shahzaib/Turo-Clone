import './slider5.css'
import Slider from "react-slick";

function Slider5() {

    const settings = {
        dots: false,
        infinite: false,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0
    };

    return (
        <>
            <div className="container text-center bg my-4 py-1 px-1">
                <div className="h-1">Meet the hosts</div>
            </div>

            <div className='container bg my-4 py-2'>
                <h2 className='slider-heading mx-3'>Top hosts on Turo</h2>
                <Slider {...settings} className="mx-3">

                    <div className="card-size2 my-2 py-2 px-2">
                        <div>
                            <div className="d-flex mb-2">
                                <div className="py-1 px-1">
                                    <img src={require('../../images/slider5-img1.jpg')} className="b-radius" alt="..." />
                                </div>
                                <div className="d-flex flex-column py-1 px-1 mx-1">
                                    <span className="f-size">Kevin M.</span>
                                    <span className="d-flex align-items-center">
                                        <span><svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="All-Star Host" aria-labelledby="allStarHostLabel" className="seo-pages-0 mb-1" role="img" version="1.1"><path fillRule="evenodd" clipRule="evenodd" d="m19.585 13.072 2.257 2.76a.7.7 0 0 1-.404 1.128l-2.871.575-1.18 3.538a.698.698 0 0 1-.664.478.7.7 0 0 1-.593-.326l-2.376-3.771a.554.554 0 0 1 .294-.826 8.623 8.623 0 0 0 4.649-3.525c.201-.31.655-.315.888-.03Zm-15.169 0c.234-.284.688-.278.889.03a8.62 8.62 0 0 0 4.648 3.526c.345.108.487.52.294.826l-2.376 3.77a.703.703 0 0 1-1.258-.151l-1.18-3.538-2.87-.574a.698.698 0 0 1-.404-1.13l2.257-2.758Zm11.242-5.249-1.715 1.455.522 2.171a.383.383 0 0 1-.574.417l-1.89-1.174-1.89 1.173a.383.383 0 0 1-.576-.417l.524-2.17-1.714-1.451a.384.384 0 0 1 .215-.678l2.242-.157.843-2.039a.383.383 0 0 1 .709 0l.843 2.039 2.24.155a.384.384 0 0 1 .22.676ZM12 2a6.667 6.667 0 1 0 .001 13.334 6.667 6.667 0 0 0 0-13.334Z" fill="#121214"></path></svg></span>
                                        <span className="f-size2 mx-1">All-Star Host</span>
                                    </span>
                                    <span className="f-size2">491 trips • Joined Aug 2020</span>
                                </div>
                            </div>
                            <div className="d-flex mb-2 py-1">
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                            </div>
                            <div className="f-size3 mb-2">He came thru for us at the last minute (I was literally on the plane when I got a call that my <strong>car</strong> from a <strong>rental</strong> <strong>agency</strong>.</div>
                        </div>
                        <div className="f-size2">Donna S. - Nov 2022</div>
                    </div>

                    <div className="card-size2 my-2 py-2 px-2">
                        <div>
                            <div className="d-flex mb-2">
                                <div className="py-1 px-1">
                                    <img src={require('../../images/slider5-img2.jpg')} className="b-radius" alt="..." />
                                </div>
                                <div className="d-flex flex-column py-1 px-1 mx-1">
                                    <span className="f-size">Phu L.</span>
                                    <span className="d-flex align-items-center">
                                        <span><svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="All-Star Host" aria-labelledby="allStarHostLabel" className="seo-pages-0 mb-1" role="img" version="1.1"><path fillRule="evenodd" clipRule="evenodd" d="m19.585 13.072 2.257 2.76a.7.7 0 0 1-.404 1.128l-2.871.575-1.18 3.538a.698.698 0 0 1-.664.478.7.7 0 0 1-.593-.326l-2.376-3.771a.554.554 0 0 1 .294-.826 8.623 8.623 0 0 0 4.649-3.525c.201-.31.655-.315.888-.03Zm-15.169 0c.234-.284.688-.278.889.03a8.62 8.62 0 0 0 4.648 3.526c.345.108.487.52.294.826l-2.376 3.77a.703.703 0 0 1-1.258-.151l-1.18-3.538-2.87-.574a.698.698 0 0 1-.404-1.13l2.257-2.758Zm11.242-5.249-1.715 1.455.522 2.171a.383.383 0 0 1-.574.417l-1.89-1.174-1.89 1.173a.383.383 0 0 1-.576-.417l.524-2.17-1.714-1.451a.384.384 0 0 1 .215-.678l2.242-.157.843-2.039a.383.383 0 0 1 .709 0l.843 2.039 2.24.155a.384.384 0 0 1 .22.676ZM12 2a6.667 6.667 0 1 0 .001 13.334 6.667 6.667 0 0 0 0-13.334Z" fill="#121214"></path></svg></span>
                                        <span className="f-size2 mx-1">All-Star Host</span>
                                    </span>
                                    <span className="f-size2">114 trips • Joined Oct 2020</span>
                                </div>
                            </div>
                            <div className="d-flex mb-2 py-1">
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                            </div>
                            <div className="f-size3 mb-2">This is a great host and <strong>car</strong>.</div>
                        </div>
                        <div className="f-size2">Mikaila B. - Nov 2022</div>
                    </div>

                    <div className="card-size2 my-2 py-2 px-2">
                        <div>
                            <div className="d-flex mb-2">
                                <div className="py-1 px-1">
                                    <img src={require('../../images/slider5-img3.jpg')} className="b-radius" alt="..." />
                                </div>
                                <div className="d-flex flex-column py-1 px-1 mx-1">
                                    <span className="f-size">Mohammed A.</span>
                                    <span className="d-flex align-items-center">
                                        <span><svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="All-Star Host" aria-labelledby="allStarHostLabel" className="seo-pages-0 mb-1" role="img" version="1.1"><path fillRule="evenodd" clipRule="evenodd" d="m19.585 13.072 2.257 2.76a.7.7 0 0 1-.404 1.128l-2.871.575-1.18 3.538a.698.698 0 0 1-.664.478.7.7 0 0 1-.593-.326l-2.376-3.771a.554.554 0 0 1 .294-.826 8.623 8.623 0 0 0 4.649-3.525c.201-.31.655-.315.888-.03Zm-15.169 0c.234-.284.688-.278.889.03a8.62 8.62 0 0 0 4.648 3.526c.345.108.487.52.294.826l-2.376 3.77a.703.703 0 0 1-1.258-.151l-1.18-3.538-2.87-.574a.698.698 0 0 1-.404-1.13l2.257-2.758Zm11.242-5.249-1.715 1.455.522 2.171a.383.383 0 0 1-.574.417l-1.89-1.174-1.89 1.173a.383.383 0 0 1-.576-.417l.524-2.17-1.714-1.451a.384.384 0 0 1 .215-.678l2.242-.157.843-2.039a.383.383 0 0 1 .709 0l.843 2.039 2.24.155a.384.384 0 0 1 .22.676ZM12 2a6.667 6.667 0 1 0 .001 13.334 6.667 6.667 0 0 0 0-13.334Z" fill="#121214"></path></svg></span>
                                        <span className="f-size2 mx-1">All-Star Host</span>
                                    </span>
                                    <span className="f-size2">1,084 trips • Joined Apr 2015</span>
                                </div>
                            </div>
                            <div className="d-flex mb-2 py-1">
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                            </div>
                            <div className="f-size3 mb-2">The <strong>car</strong> was in great condition and drove very well.</div>
                        </div>
                        <div className="f-size2">Lisa S. - Nov 2022</div>
                    </div>

                    <div className="card-size2 my-2 py-2 px-2">
                        <div>
                            <div className="d-flex mb-2">
                                <div className="py-1 px-1">
                                    <img src={require('../../images/slider5-img4.jpg')} className="b-radius" alt="..." />
                                </div>
                                <div className="d-flex flex-column py-1 px-1 mx-1">
                                    <span className="f-size">Derrick H.</span>
                                    <span className="d-flex align-items-center">
                                        <span><svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="All-Star Host" aria-labelledby="allStarHostLabel" className="seo-pages-0 mb-1" role="img" version="1.1"><path fillRule="evenodd" clipRule="evenodd" d="m19.585 13.072 2.257 2.76a.7.7 0 0 1-.404 1.128l-2.871.575-1.18 3.538a.698.698 0 0 1-.664.478.7.7 0 0 1-.593-.326l-2.376-3.771a.554.554 0 0 1 .294-.826 8.623 8.623 0 0 0 4.649-3.525c.201-.31.655-.315.888-.03Zm-15.169 0c.234-.284.688-.278.889.03a8.62 8.62 0 0 0 4.648 3.526c.345.108.487.52.294.826l-2.376 3.77a.703.703 0 0 1-1.258-.151l-1.18-3.538-2.87-.574a.698.698 0 0 1-.404-1.13l2.257-2.758Zm11.242-5.249-1.715 1.455.522 2.171a.383.383 0 0 1-.574.417l-1.89-1.174-1.89 1.173a.383.383 0 0 1-.576-.417l.524-2.17-1.714-1.451a.384.384 0 0 1 .215-.678l2.242-.157.843-2.039a.383.383 0 0 1 .709 0l.843 2.039 2.24.155a.384.384 0 0 1 .22.676ZM12 2a6.667 6.667 0 1 0 .001 13.334 6.667 6.667 0 0 0 0-13.334Z" fill="#121214"></path></svg></span>
                                        <span className="f-size2 mx-1">All-Star Host</span>
                                    </span>
                                    <span className="f-size2">1,130 trips • Joined Sep 2017</span>
                                </div>
                            </div>
                            <div className="d-flex mb-2 py-1">
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                            </div>
                            <div className="f-size3 mb-2"><strong>Best</strong> service!</div>
                        </div>
                        <div className="f-size2">Matteo B. - Nov 2022</div>
                    </div>

                    <div className="card-size2 my-2 py-2 px-2">
                        <div>
                            <div className="d-flex mb-2">
                                <div className="py-1 px-1">
                                    <img src={require('../../images/slider5-img5.jpg')} className="b-radius" alt="..." />
                                </div>
                                <div className="d-flex flex-column py-1 px-1 mx-1">
                                    <span className="f-size">Artem S.</span>
                                    <span className="d-flex align-items-center">
                                        <span><svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="All-Star Host" aria-labelledby="allStarHostLabel" className="seo-pages-0 mb-1" role="img" version="1.1"><path fillRule="evenodd" clipRule="evenodd" d="m19.585 13.072 2.257 2.76a.7.7 0 0 1-.404 1.128l-2.871.575-1.18 3.538a.698.698 0 0 1-.664.478.7.7 0 0 1-.593-.326l-2.376-3.771a.554.554 0 0 1 .294-.826 8.623 8.623 0 0 0 4.649-3.525c.201-.31.655-.315.888-.03Zm-15.169 0c.234-.284.688-.278.889.03a8.62 8.62 0 0 0 4.648 3.526c.345.108.487.52.294.826l-2.376 3.77a.703.703 0 0 1-1.258-.151l-1.18-3.538-2.87-.574a.698.698 0 0 1-.404-1.13l2.257-2.758Zm11.242-5.249-1.715 1.455.522 2.171a.383.383 0 0 1-.574.417l-1.89-1.174-1.89 1.173a.383.383 0 0 1-.576-.417l.524-2.17-1.714-1.451a.384.384 0 0 1 .215-.678l2.242-.157.843-2.039a.383.383 0 0 1 .709 0l.843 2.039 2.24.155a.384.384 0 0 1 .22.676ZM12 2a6.667 6.667 0 1 0 .001 13.334 6.667 6.667 0 0 0 0-13.334Z" fill="#121214"></path></svg></span>
                                        <span className="f-size2 mx-1">All-Star Host</span>
                                    </span>
                                    <span className="f-size2">510 trips • Joined Oct 2017</span>
                                </div>
                            </div>
                            <div className="d-flex mb-2 py-1">
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                            </div>
                            <div className="f-size3 mb-2">Beautiful <strong>car</strong>, sporty and descent on gas!</div>
                        </div>
                        <div className="f-size2">Deion W. - Nov 2022</div>
                    </div>

                    <div className="card-size2 my-2 py-2 px-2">
                        <div>
                            <div className="d-flex mb-2">
                                <div className="py-1 px-1">
                                    <img src={require('../../images/slider5-img6.jpg')} className="b-radius" alt="..." />
                                </div>
                                <div className="d-flex flex-column py-1 px-1 mx-1">
                                    <span className="f-size">CARS FROM ARS..</span>
                                    <span className="d-flex align-items-center">
                                        <span><svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="All-Star Host" aria-labelledby="allStarHostLabel" className="seo-pages-0 mb-1" role="img" version="1.1"><path fillRule="evenodd" clipRule="evenodd" d="m19.585 13.072 2.257 2.76a.7.7 0 0 1-.404 1.128l-2.871.575-1.18 3.538a.698.698 0 0 1-.664.478.7.7 0 0 1-.593-.326l-2.376-3.771a.554.554 0 0 1 .294-.826 8.623 8.623 0 0 0 4.649-3.525c.201-.31.655-.315.888-.03Zm-15.169 0c.234-.284.688-.278.889.03a8.62 8.62 0 0 0 4.648 3.526c.345.108.487.52.294.826l-2.376 3.77a.703.703 0 0 1-1.258-.151l-1.18-3.538-2.87-.574a.698.698 0 0 1-.404-1.13l2.257-2.758Zm11.242-5.249-1.715 1.455.522 2.171a.383.383 0 0 1-.574.417l-1.89-1.174-1.89 1.173a.383.383 0 0 1-.576-.417l.524-2.17-1.714-1.451a.384.384 0 0 1 .215-.678l2.242-.157.843-2.039a.383.383 0 0 1 .709 0l.843 2.039 2.24.155a.384.384 0 0 1 .22.676ZM12 2a6.667 6.667 0 1 0 .001 13.334 6.667 6.667 0 0 0 0-13.334Z" fill="#121214"></path></svg></span>
                                        <span className="f-size2 mx-1">All-Star Host</span>
                                    </span>
                                    <span className="f-size2">434 trips • Joined Aug 2015</span>
                                </div>
                            </div>
                            <div className="d-flex mb-2 py-1">
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                            </div>
                            <div className="f-size3 mb-2">Thanks for being responsive and having such great <b>cars</b> to borrow again.</div>
                        </div>
                        <div className="f-size2">Bethany K. - Nov 2022</div>
                    </div>

                    <div className="card-size2 my-2 py-2 px-2">
                        <div>
                            <div className="d-flex mb-2">
                                <div className="py-1 px-1">
                                    <img src={require('../../images/slider5-img7.jpg')} className="b-radius" alt="..." />
                                </div>
                                <div className="d-flex flex-column py-1 px-1 mx-1">
                                    <span className="f-size">Igor K.</span>
                                    <span className="d-flex align-items-center">
                                        <span><svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="All-Star Host" aria-labelledby="allStarHostLabel" className="seo-pages-0 mb-1" role="img" version="1.1"><path fillRule="evenodd" clipRule="evenodd" d="m19.585 13.072 2.257 2.76a.7.7 0 0 1-.404 1.128l-2.871.575-1.18 3.538a.698.698 0 0 1-.664.478.7.7 0 0 1-.593-.326l-2.376-3.771a.554.554 0 0 1 .294-.826 8.623 8.623 0 0 0 4.649-3.525c.201-.31.655-.315.888-.03Zm-15.169 0c.234-.284.688-.278.889.03a8.62 8.62 0 0 0 4.648 3.526c.345.108.487.52.294.826l-2.376 3.77a.703.703 0 0 1-1.258-.151l-1.18-3.538-2.87-.574a.698.698 0 0 1-.404-1.13l2.257-2.758Zm11.242-5.249-1.715 1.455.522 2.171a.383.383 0 0 1-.574.417l-1.89-1.174-1.89 1.173a.383.383 0 0 1-.576-.417l.524-2.17-1.714-1.451a.384.384 0 0 1 .215-.678l2.242-.157.843-2.039a.383.383 0 0 1 .709 0l.843 2.039 2.24.155a.384.384 0 0 1 .22.676ZM12 2a6.667 6.667 0 1 0 .001 13.334 6.667 6.667 0 0 0 0-13.334Z" fill="#121214"></path></svg></span>
                                        <span className="f-size2 mx-1">All-Star Host</span>
                                    </span>
                                    <span className="f-size2">462 trips • Joined Aug 2020</span>
                                </div>
                            </div>
                            <div className="d-flex mb-2 py-1">
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                            </div>
                            <div className="f-size3 mb-2">Wonderful wonderful person to <strong>rent a car</strong> from!</div>
                        </div>
                        <div className="f-size2">Julian D. - Nov 2022</div>
                    </div>

                    <div className="card-size2 my-2 py-2 px-2">
                        <div>
                            <div className="d-flex mb-2">
                                <div className="py-1 px-1">
                                    <img src={require('../../images/slider5-img8.jpg')} className="b-radius" alt="..." />
                                </div>
                                <div className="d-flex flex-column py-1 px-1 mx-1">
                                    <span className="f-size">Ivan A.</span>
                                    <span className="d-flex align-items-center">
                                        <span><svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="All-Star Host" aria-labelledby="allStarHostLabel" className="seo-pages-0 mb-1" role="img" version="1.1"><path fillRule="evenodd" clipRule="evenodd" d="m19.585 13.072 2.257 2.76a.7.7 0 0 1-.404 1.128l-2.871.575-1.18 3.538a.698.698 0 0 1-.664.478.7.7 0 0 1-.593-.326l-2.376-3.771a.554.554 0 0 1 .294-.826 8.623 8.623 0 0 0 4.649-3.525c.201-.31.655-.315.888-.03Zm-15.169 0c.234-.284.688-.278.889.03a8.62 8.62 0 0 0 4.648 3.526c.345.108.487.52.294.826l-2.376 3.77a.703.703 0 0 1-1.258-.151l-1.18-3.538-2.87-.574a.698.698 0 0 1-.404-1.13l2.257-2.758Zm11.242-5.249-1.715 1.455.522 2.171a.383.383 0 0 1-.574.417l-1.89-1.174-1.89 1.173a.383.383 0 0 1-.576-.417l.524-2.17-1.714-1.451a.384.384 0 0 1 .215-.678l2.242-.157.843-2.039a.383.383 0 0 1 .709 0l.843 2.039 2.24.155a.384.384 0 0 1 .22.676ZM12 2a6.667 6.667 0 1 0 .001 13.334 6.667 6.667 0 0 0 0-13.334Z" fill="#121214"></path></svg></span>
                                        <span className="f-size2 mx-1">All-Star Host</span>
                                    </span>
                                    <span className="f-size2">4,004 trips • Joined Jun 2019</span>
                                </div>
                            </div>
                            <div className="d-flex mb-2 py-1">
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                                <span className="mx"><img src={require("../../images/star2.png")} width={16} height={16} alt="star" /></span>
                            </div>
                            <div className="f-size3 mb-2">The <strong>car</strong> has great mileage.</div>
                        </div>
                        <div className="f-size2">Tina L. - Nov 2022</div>
                    </div>

                </Slider>
            </div>
        </>
    )
}

export default Slider5;