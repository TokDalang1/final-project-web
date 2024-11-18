import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const InfoPeru = () => {
  const [infoperu, setInfoPeru] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    setLoading(true);
    const infoperuRef = ref(db, "infoperu/");
    onValue(infoperuRef, (snapshot) => {
      const data = snapshot.val();
      setInfoPeru(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="info">
      <h3>{infoperu.title}</h3>
      <p>Visit the ancient Incan city and marvel at its history.</p>
      <div className="price">$1100</div>
      <a className="read-more" href="#">
        Read More
      </a>
    </div>
  );
};
export default InfoPeru;
