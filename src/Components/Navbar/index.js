import Active from "../Active";
const Navbar = () => {
  return (
    <div className="navbar">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          alt="Vacation Logo"
          height={50}
          src="https://storage.googleapis.com/a1aa/image/3u4KffLf9VCfKTNVx2QqwejK1pmPNyUq0jPDTQflaKYug6N8E.jpg"
          width={50}
        />
        <h1 style={{ marginLeft: 10, fontSize: 24 }}>Front Vacation</h1>
      </div>
      <ul>
        <li>
          <Active />
        </li>
        <li>
          <a href="#">Destinations</a>
        </li>
        <li>
          <a href="#">Offers</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <i className="fas fa-bars menu-icon"></i>
    </div>
  );
};
export default Navbar;
