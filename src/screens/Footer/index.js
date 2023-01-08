import './footer.css'

function Footer() {
    return (
        <>
            <footer className='border-top border-2'>
                <div className="main-content d-flex justify-content-center my-2 mx-2 py-2 px-2">
                    <div className="catogries d-flex justify-content-center my-2 mx-2 py-2 px-2">
                        <div className="row1 py-2 px-2 mx-2">
                            <span className="link-heading">Turo</span>
                            <ul className='list-unstyled'>
                                <li><a href="#" className='link-list'>About</a></li>
                                <li><a href="#" className='link-list'>Team</a></li>
                                <li><a href="#" className='link-list'>Policies</a></li>
                                <li><a href="#" className='link-list'>Careers</a></li>
                                <li><a href="#" className='link-list'>Press</a></li>
                                <li><a href="#" className='link-list'>OpenRoad</a></li>
                                <li><a href="#" className='link-list'>Turo shop</a></li>
                            </ul>
                        </div>
                        <div className="row2 py-2 px-2 mx-2">
                            <span className="link-heading">Locations</span>
                            <ul className='list-unstyled'>
                                <li><a href="#" className='link-list'>USA (EN)</a></li>
                                <li><a href="#" className='link-list'>Canada (EN)</a></li>
                                <li><a href="#" className='link-list'>Canada (FR)</a></li>
                                <li><a href="#" className='link-list'>UK (EN)</a></li>
                            </ul>
                        </div>
                        <div className="row3 py-2 px-2 mx-2">
                            <span className="link-heading">Explore</span>
                            <ul className='list-unstyled'>
                                <li><a href="#" className='link-list'>Book a car</a></li>
                                <li><a href="#" className='link-list'>Weddings</a></li>
                                <li><a href="#" className='link-list'>Trust & safety</a></li>
                                <li><a href="#" className='link-list'>Sustainability</a></li>
                                <li><a href="#" className='link-list'>FAQs</a></li>
                                <li><a href="#" className='link-list'>Get help</a></li>
                            </ul>
                        </div>
                        <div className="row4 py-2 px-2 mx-2">
                            <span className="link-heading">Hosting</span>
                            <ul className='list-unstyled'>
                                <li><a href="#" className='link-list'>List your car</a></li>
                                <li><a href="#" className='link-list'>Carculator</a></li>
                                <li><a href="#" className='link-list'>All-Star Hosts</a></li>
                                <li><a href="#" className='link-list'>Host tools</a></li>
                                <li><a href="#" className='link-list'>Insurance & protection</a></li>
                                <li><a href="#" className='link-list'>FAQs</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="social-content my-2 mx-2 py-2 px-2">
                        <div className="social-links">
                            <ul className="list-unstyled d-flex my-1">
                                <li><img src={require('../../images/fb-icon.png')} className="sl-s mx-1" alt="fb-icon" />
                                </li>
                                <li><img src={require('../../images/twitter-icon.png')} className="sl-s mx-1" alt="fb-icon" />
                                </li>
                                <li><img src={require('../../images/insta-icon.png')} className="sl-s mx-1" alt="fb-icon" />
                                </li>
                                <li><img src={require('../../images/youtube-icon.png')} className="sl-s mx-1" alt="fb-icon" />
                                </li>
                                <li><img src={require('../../images/blogger-icon.png')} className="sl-s mx-1" alt="fb-icon" />
                                </li>
                            </ul>
                        </div>
                        <div className="store-box my-2 py-2">
                            <a href="/"><img src={require('../../images/app-store.png')} className="sb-s mx-1" alt="app-store" /></a>
                            <a href="/"><img src={require('../../images/play-store.jpg')} className="sb-s mx-1" alt="play-store" /></a>
                        </div>
                        <div className="select-lang my-2">
                            <div className="dropup">
                                <button className="btn  mx-1 py-1 px-2 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="link-heading"><img src={require('../../images/pak-flag-circle.png')} className="flag-size" alt="pak-flag" />English</span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">French</a></li>
                                    <li><a className="dropdown-item" href="#">Spanish</a></li>
                                    <li><a className="dropdown-item" href="#">Urdu</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer