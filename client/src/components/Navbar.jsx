import "../styles/navbar.css";

export default function Navbar() {
    return(
        <nav className="navbar">
            <h2 className="logo">Wolfe's Tattoo Gallery</h2>
        
            <p>123 TATTOO LANE, KNOXVILLE, TN, 37909</p>

            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Aftercare">Aftercare</a></li>
                <li><a href="/Booking">Book Now</a></li>
            </ul>
        </nav>
    );

}