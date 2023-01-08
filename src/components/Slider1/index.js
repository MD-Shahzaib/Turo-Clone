import './slider1.css'
import Slider from "react-slick";

function Slider1() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 5,
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
      <div className='container bg py-2 px-3'>
        <h2 className='slider-heading mx-3'>Browse by make</h2>
        <Slider {...settings} className="mx-3">
          <div className="card c-body d-flex justify-content-center align-items-center">
            <img src={require('../../images/card-jeep.jpg')} className="card-img-top card-img" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Jeep</h5>
            </div>
          </div>
          <div className="card c-body d-flex justify-content-center align-items-center">
            <img src={require('../../images/card-tesla.jpg')} className="card-img-top card-img" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Tesla</h5>
            </div>
          </div>
          <div className="card c-body d-flex justify-content-center align-items-center">
            <img src={require('../../images/card-subaru.jpg')} className="card-img-top card-img" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Subaru</h5>
            </div>
          </div>
          <div className="card c-body d-flex justify-content-center align-items-center">
            <img src={require('../../images/card-porsche.jpg')} className="card-img-top card-img" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Porsche</h5>
            </div>
          </div>
          <div className="card c-body d-flex justify-content-center align-items-center">
            <img src={require('../../images/card-bmw.jpg')} className="card-img-top card-img" alt="..." />
            <div className="card-body">
              <h5 className="card-title">BMW</h5>
            </div>
          </div>
          <div className="card c-body d-flex justify-content-center align-items-center">
            <img src={require('../../images/card-mb.jpg')} className="card-img-top card-img" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Mercedes-Benz</h5>
            </div>
          </div>
          <div className="card c-body d-flex justify-content-center align-items-center">
            <img src={require('../../images/card-toyota.jpg')} className="card-img-top card-img" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Toyota</h5>
            </div>
          </div>
          <div className="card c-body d-flex justify-content-center align-items-center">
            <img src={require('../../images/card-nissan.jpg')} className="card-img-top card-img" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Nissan</h5>
            </div>
          </div>
          <div className="card c-body d-flex justify-content-center align-items-center">
            <img src={require('../../images/card-lambo.jpg')} className="card-img-top card-img" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Lamborghini</h5>
            </div>
          </div>
          <div className="card c-body d-flex justify-content-center align-items-center">
            <img src={require('../../images/card-ford.jpg')} className="card-img-top card-img" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Ford</h5>
            </div>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default Slider1