import Active from "./Components/Active";
//field
function App() {
  return (
    <div>
      <title>Vacation Gallery</title>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n   body {\n            margin: 0;\n            font-family: 'Roboto', sans-serif;\n            background-color: #f0f0f0;\n            color: #333;\n        }\n        .navbar {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            padding: 20px 50px;\n            background-color: #004d61;\n            color: white;\n        }\n        .navbar img {\n            height: 50px;\n        }\n        .navbar ul {\n            list-style: none;\n            display: flex;\n            gap: 20px;\n            margin: 0;\n            padding: 0;\n        }\n        .navbar ul li {\n            display: inline;\n        }\n        .navbar ul li a {\n            text-decoration: none;\n            color: white;\n            font-weight: 500;\n            padding: 10px 20px;\n            border-radius: 20px;\n        }\n        .navbar ul li a.active, .navbar ul li a:hover {\n            background-color: #003d4f;\n        }\n        .navbar .menu-icon {\n            display: none;\n        }\n        .gallery {\n            padding: 50px;\n            display: grid;\n            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n            gap: 20px;\n        }\n        .gallery-item {\n            background-color: white;\n            border-radius: 20px;\n            overflow: hidden;\n            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n        }\n        .gallery-item img {\n            width: 100%;\n            height: auto;\n        }\n        .gallery-item .info {\n            padding: 20px;\n            text-align: center;\n        }\n        .gallery-item .info h3 {\n            margin: 0;\n            font-size: 20px;\n        }\n        .gallery-item .info p {\n            margin: 10px 0;\n            font-size: 16px;\n            color: #777;\n        }\n        .gallery-item .info .price {\n            font-size: 18px;\n            color: #004d61;\n            font-weight: bold;\n        }\n        .gallery-item .info .read-more {\n            display: inline-block;\n            margin-top: 10px;\n            padding: 10px 20px;\n            background-color: #004d61;\n            color: white;\n            border-radius: 20px;\n            text-decoration: none;\n        }\n        .gallery-item .info .read-more:hover {\n            background-color: #003d4f;\n        }\n        .footer {\n            background-color: #004d61;\n            color: white;\n            text-align: center;\n            padding: 20px 0;\n        }\n        .footer img {\n            width: 50px;\n            height: 50px;\n            border-radius: 50%;\n            object-fit: cover;\n            margin: 0 10px;\n        }\n        .footer .person {\n            display: inline-block;\n            text-align: center;\n            margin: 20px 10px;\n        }\n        .footer .person img {\n            width: 100px;\n            height: 100px;\n            border-radius: 50%;\n            object-fit: cover;\n            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n        }\n        .footer .person p {\n            margin: 5px 0;\n            font-size: 14px;\n            color: white;\n        }\n  ",
        }}
      />
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
      <div className="gallery">
        <div className="gallery-item">
          <img
            alt="Beautiful beach with clear blue water"
            height={200}
            src="https://storage.googleapis.com/a1aa/image/zu8BxVCMmP7ZHF8kVi7hipoMpyU9xS22f2pfiutDjvPBq3wTA.jpg"
            width={300}
          />
          <div className="info">
            <h3>Bali, Indonesia</h3>
            <p>Experience the serene beaches and vibrant culture.</p>
            <div className="price">$700</div>
            <a className="read-more" href="#">
              Read More
            </a>
          </div>
        </div>
        <div className="gallery-item">
          <img
            alt="Mountainous landscape with a lake"
            height={200}
            src="https://storage.googleapis.com/a1aa/image/hRHRAAyOq96lA59BdbVnEQoyB14Jo1ef1hhzekBiXTGIUvhnA.jpg"
            width={300}
          />
          <div className="info">
            <h3>Swiss Alps, Switzerland</h3>
            <p>Enjoy the breathtaking views and outdoor activities.</p>
            <div className="price">$1200</div>
            <a className="read-more" href="#">
              Read More
            </a>
          </div>
        </div>
        <div className="gallery-item">
          <img
            alt="Cityscape with historical buildings"
            height={200}
            src="https://storage.googleapis.com/a1aa/image/rY2Go0v37uLNOFXKAeyihR9niAIecsdyjejRjIfeqemRi6N8E.jpg"
            width={300}
          />
          <div className="info">
            <h3>Paris, France</h3>
            <p>Discover the romantic city of lights and its rich history.</p>
            <div className="price">$900</div>
            <a className="read-more" href="#">
              Read More
            </a>
          </div>
        </div>
        <div className="gallery-item">
          <img
            alt="Desert landscape with sand dunes"
            height={200}
            src="https://storage.googleapis.com/a1aa/image/8l3PvNArhaI6OF1ChsoH1bCv4F9eRNYyuGAgTL29BJXE1b4JA.jpg"
            width={300}
          />
          <div className="info">
            <h3>Sahara Desert, Morocco</h3>
            <p>Explore the vast and stunning desert landscapes.</p>
            <div className="price">$800</div>
            <a className="read-more" href="#">
              Read More
            </a>
          </div>
        </div>
        <div className="gallery-item">
          <img
            alt="Tropical island with palm trees"
            height={200}
            src="https://storage.googleapis.com/a1aa/image/r9oraMK1SF76ARHrnKIO75ZqSWqHYOGHXuIEXee66qWHq3wTA.jpg"
            width={300}
          />
          <div className="info">
            <h3>Maldives</h3>
            <p>Relax in the luxurious resorts and crystal-clear waters.</p>
            <div className="price">$1500</div>
            <a className="read-more" href="#">
              Read More
            </a>
          </div>
        </div>
        <div className="gallery-item">
          <img
            alt="Historical ruins with a sunset background"
            height={200}
            src="https://storage.googleapis.com/a1aa/image/aQ1dPGu9W779FBSY5NuagAwQHWDfKpUnwtnDFfzSXnMFq3wTA.jpg"
            width={300}
          />
          <div className="info">
            <h3>Machu Picchu, Peru</h3>
            <p>Visit the ancient Incan city and marvel at its history.</p>
            <div className="price">$1100</div>
            <a className="read-more" href="#">
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Follow Us:</p>
        <div className="person">
          <img
            alt="Person working on a laptop"
            src="https://storage.googleapis.com/a1aa/image/1u4KffLf9VCfKTNVx2QqwejK1pmPNyUq0jPDTQflaKYug6N8E.jpg"
          />
          <p>John Doe</p>
          <p>john.doe@example.com</p>
        </div>
        <div className="person">
          <img
            alt="Person writing on a notebook"
            src="https://storage.googleapis.com/a1aa/image/2u4KffLf9VCfKTNVx2QqwejK1pmPNyUq0jPDTQflaKYug6N8E.jpg"
          />
          <p>Jane Smith</p>
          <p>jane.smith@example.com</p>
        </div>
        <div className="person">
          <img
            alt="Person using a tablet"
            src="https://storage.googleapis.com/a1aa/image/3u4KffLf9VCfKTNVx2QqwejK1pmPNyUq0jPDTQflaKYug6N8E.jpg"
          />
          <p>Alice Johnson</p>
          <p>alice.johnson@example.com</p>
        </div>
        <div className="person">
          <img
            alt="Person holding a smartphone"
            src="https://storage.googleapis.com/a1aa/image/4u4KffLf9VCfKTNVx2QqwejK1pmPNyUq0jPDTQflaKYug6N8E.jpg"
          />
          <p>Bob Brown</p>
          <p>bob.brown@example.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;
