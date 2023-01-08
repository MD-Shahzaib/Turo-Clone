// React-Slick-Slider____________________.
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components____________________________.
import Navbar from "./screens/Navbar";
import SearchBox from "./components/SearchBox";
import Slider1 from "./components/Slider1";
import Slider2 from "./components/Slider2";
import Slider3 from "./components/Slider3";
import Dreams from "./components/Dreams";
import Slider4 from "./components/Slider4";
import Slider5 from "./components/Slider5";
import BookingImg from "./components/Booking";
import Accordian from "./components/Accordian";
import Footer from "./screens/Footer";

function App() {
  return (
    <>
      <Navbar />
      <SearchBox />
      <Slider1 />
      <Slider2 />
      <Slider3 />
      <Dreams />
      <Slider4 />
      <Slider5 />
      <BookingImg />
      <Accordian />
      <Footer />
    </>
  );
}

export default App;