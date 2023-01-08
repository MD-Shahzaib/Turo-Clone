import './navbar.css'

function Navbar() {
    return (
        <>
            {/* top nav section */}
            <ul className="nav justify-content-center text-center bg py-1">
                <li className="nav-item">
                    <a className="nav-link active nav-tab-link" aria-current="page" href="#">Turo has launched in New York! Tap to explore cars.</a>
                </li>
            </ul>

            {/* bottom nav section */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    {/* turo-logo  */}
                    <a className="navbar-brand" href="#"><img src={require('../../images/Turo-logo.png')} height={40} width={90} alt="turo-logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        {/* nav button 1 */}
                        <input type="button" value={'Become a Host'} className="btn btn-outline-dark" />
                        {/* nav button 2 */}
                        <div className="btn-group dropstart">
                            <button type="button" className="btn border-dark mx-2 py-1 px-1 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <span><img src={require('../../images/hamburger-icon.png')} className="mx-1" width={27} alt="hamburger-icon" /></span>
                                <span><img src={require('../../images/profile-icon.png')} className="mx-1" width={27} alt="hamburger-icon" /></span>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Log in</a></li>
                                <li><a className="dropdown-item" href="#">Sign up</a></li>
                                <li><a className="dropdown-item" href="#">Become a host</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">How Turo works</a></li>
                                <li><a className="dropdown-item" href="#">Contact support</a></li>
                                <li><a className="dropdown-item" href="#">Legal</a></li>
                                <li><a className="dropdown-item" href="#">Insurance & protection</a></li>
                                <li><a className="dropdown-item" href="#">Host tools</a></li>
                                <li><a className="dropdown-item" href="#">Calculator</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar