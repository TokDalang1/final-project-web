import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const InfoSwiss = () => {
  const [infoswiss, setInfoSwiss] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    setLoading(true);
    const infoswissRef = ref(db, "infoswiss/");
    onValue(infoswissRef, (snapshot) => {
      const data = snapshot.val();
      setInfoSwiss(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="info">
      <h3>{infoswiss.title}</h3>
      <p>Enjoy the breathtaking views and outdoor activities.</p>
      <div className="price">$1200</div>
      <a className="read-more" href="#">
        Read More
      </a>
    </div>
  );
};
export default InfoSwiss;
