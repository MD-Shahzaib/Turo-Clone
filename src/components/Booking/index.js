import './booking.css'

function BookingImg() {
  return (
    <>
      <div className="container my-5">
        <div className="content">
          <div className="space-b p-b">
            <div className='place1 text-center'>
              <a href="/" className='plc-link'>Book a car &gt;</a>
              <p className='plc-para'>Down the street or across the country, find the perfect vehicle for your next adventure.</p>
            </div>
          </div>
          <div className="space-b p-t">
            <div className='place2 text-center'>
              <a href="/" className='plc-link'>Become a host &gt;</a>
              <p className='plc-para'>Accelerate your entrepreneurship and start building a small car sharing business on Turo.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookingImg;