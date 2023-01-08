import './dream.css'

function Dreams() {
    return (
        <>
            <div className="container d-flex flex-column justify-content-center align-items-center my-4 py-1 px-1">
                <div className="h-1">Fuel your daydreams</div>
                <div>Stoke your wanderlust with some dreamy photo chronicles of road trip adventures.</div>
                <button className="h-btn my-3">Explore Travelogues</button>
            </div>

            <div className='main container py-1 px-1'>
                <div className='bg-image py-2 px-2'>
                    <div className="black-box px-3 py-4">
                        <p className='t-1'>FEATURED TRAVELOGUE</p>
                        <p className='t-2'>Coastal escapes for an unforgettable UK staycation</p>
                        <a className='t-3' href="/">Read more</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dreams;