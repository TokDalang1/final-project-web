import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const InfoMorocco = () => {
  const [infomorocco, setInfoMorocco] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    setLoading(true);
    const infomoroccoRef = ref(db, "infomorocco/");
    onValue(infomoroccoRef, (snapshot) => {
      const data = snapshot.val();
      setInfoMorocco(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="info">
      <h3>{infomorocco.title}</h3>
      <p>{infomorocco.sub}</p>
      <div className="price">$800</div>
      <a className="read-more" href="#">
        Read More
      </a>
    </div>
  );
};
export default InfoMorocco;
