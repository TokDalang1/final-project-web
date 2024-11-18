import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const InfoMaldives = () => {
  const [infomaldives, setInfoMaldives] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    setLoading(true);
    const infomaldivesRef = ref(db, "infomaldives/");
    onValue(infomaldivesRef, (snapshot) => {
      const data = snapshot.val();
      setInfoMaldives(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="info">
      <h3>{infomaldives.title}</h3>
      <p>{infomaldives.sub}</p>
      <div className="price">$1500</div>
      <a className="read-more" href="#">
        Read More
      </a>
    </div>
  );
};
export default InfoMaldives;
