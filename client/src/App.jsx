import Navbar from "./components/Navbar";
import Home from "./Pages/home";
import Aftercare from "./Pages/Aftercare";
import About from "./Pages/About";
import Booking from "./components/Booking";

export default function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/About":
      component = <About />;
      break;
    case "/Aftercare":
      component = <Aftercare />;
      break;
    case "/Booking":
      component = <Booking />;
      break;
    default:
      component = <Home />;
  }

  return (
    <>
      <Navbar />
      {component}
    </>
  );
}