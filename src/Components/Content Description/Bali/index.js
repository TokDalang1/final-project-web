import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const InfoBali = () => {
  const [infobali, setInfoBali] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    setLoading(true);
    const infobaliRef = ref(db, "infobali/");
    onValue(infobaliRef, (snapshot) => {
      const data = snapshot.val();
      setInfoBali(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="info">
      <h3>{infobali.title}</h3>
      <p>{infobali.sub}</p>
      <div className="price">$700</div>
      <a className="read-more" href="#">
        Read More
      </a>
    </div>
  );
};
export default InfoBali;
