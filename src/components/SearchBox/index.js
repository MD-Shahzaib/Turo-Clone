import './searchbox.css'

function SearchBox() {
    return (
        <>
            <div className="mb-5">
                <div className="top-container">
                    <div className="search-box">
                        <div className="box-center bg-light rounded-pill px-3 py-2">
                            <div className="mx-1 px-1 border-end border-secondary">
                                <span className="inp-label">Where</span>
                                <input className="form-control inp" list="datalistOptions" placeholder="City, airport, address..." />
                                <datalist id="datalistOptions">
                                    <option value="San Francisco" />
                                    <option value="New York" />
                                    <option value="Seattle" />
                                    <option value="Los Angeles" />
                                    <option value="Chicago" />
                                </datalist>
                            </div>
                            <div className="mx-1 px-1 border-end border-secondary">
                                <span className="inp-label">From</span>
                                <input type="datetime-local" className="form-control inp" />
                            </div>
                            <div className="mx-1 px-1">
                                <span className="inp-label">Until</span>
                                <input type="datetime-local" className="form-control inp" />
                            </div>
                            <div className="">
                                <img src={require("../../images/search-icon.png")} className="search-icon" alt="search-icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-container my-4 mx-2 py-2 px-2 ">
                    <div className="title text-center">Find your drive</div>
                    <div className="para text-center">Explore the world's largest car sharing marketplace</div>
                </div>
            </div>
        </>
    )
}

export default SearchBox;