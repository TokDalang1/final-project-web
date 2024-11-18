import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const InfoParis = () => {
  const [infoparis, setInfoParis] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    setLoading(true);
    const infoparisRef = ref(db, "infoparis/");
    onValue(infoparisRef, (snapshot) => {
      const data = snapshot.val();
      setInfoParis(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="info">
      <h3>Paris, France</h3>
      <p>Discover the romantic city of lights and its rich history.</p>
      <div className="price">$900</div>
      <a className="read-more" href="#">
        Read More
      </a>
    </div>
  );
};
export default InfoParis;
