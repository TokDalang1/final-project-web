import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Footer = () => {
  const [footer, setFooter] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    setLoading(true);
    const footerRef = ref(db, "footer/");
    onValue(footerRef, (snapshot) => {
      const data = snapshot.val();
      setFooter(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="footer">
      <p>Follow Us:</p>
      <div className="person">
        <img
          alt="Person working on a laptop"
          src="Images/WhatsApp Image 2024-11-14 at 21.42.15.jpeg"
        />
        <p>Eden J Mirontoneng</p>
        <p>s22110547@student.unklab.ac.id</p>
      </div>
      <div className="person">
        <img
          alt="Person writing on a notebook"
          src="Images/profile.png"
        />
        <p>Yorry Efrem</p>
        <p>s22210690@student.unklab.ac.id</p>
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
  );
};
export default Footer;
