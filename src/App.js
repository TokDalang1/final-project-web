import InfoMaldives from "./Components/Content Description/Maldives";
import InfoMorocco from "./Components/Content Description/Morocco";
import InfoParis from "./Components/Content Description/Paris";
import InfoPeru from "./Components/Content Description/Peru";
import BaliPicture from "./Components/ContentPic/Bali";
import MaldivesPicture from "./Components/ContentPic/Maldives";
import MoroccoPicture from "./Components/ContentPic/Morocco";
import ParisPicture from "./Components/ContentPic/Paris";
import PeruPicture from "./Components/ContentPic/Peru";
import SwissPicture from "./Components/ContentPic/Swiss";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
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
      <Navbar />
      <div className="gallery">
        <BaliPicture />
        <SwissPicture />
        <ParisPicture />
        <MoroccoPicture />
        <MaldivesPicture />
        <PeruPicture />
      </div>
      <Footer />
    </div>
  );
}

export default App;
