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
        <img alt="Person working on a laptop" src={footer.img1} />
        <p>Eden J Mirontoneng</p>
        <p>s22110547@student.unklab.ac.id</p>
      </div>
      <div className="person">
        <img alt="Person writing on a notebook" src={footer.img2} />
        <p>Yorry Efrem</p>
        <p>s22210690@student.unklab.ac.id</p>
      </div>
      <div className="person">
        <img alt="Person using a tablet" src={footer.img3} />
        <p>David Albrian Manorek</p>
        <p>s22110457@student.unklab.ac.id</p>
      </div>
      <div className="person">
        <img alt="Person holding a smartphone" src={footer.img4} />
        <p>Nofriandi Julio Malinso</p>
        <p>s22020162@studentunklab.ac.id</p>
      </div>
    </div>
  );
};
export default Footer;
