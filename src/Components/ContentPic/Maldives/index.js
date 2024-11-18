import InfoMaldives from "../../Content Description/Maldives";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const MaldivesPicture = () => {
  const [maldivespicture, setMaldivesPicture] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    setLoading(true);
    const maldivespictureRef = ref(db, "maldivespicture/");
    onValue(maldivespictureRef, (snapshot) => {
      const data = snapshot.val();
      setMaldivesPicture(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="gallery-item">
      <img
        alt="Tropical island with palm trees"
        height={200}
        src={maldivespicture.img}
        width={300}
        //maldives
      />
      <InfoMaldives />
    </div>
  );
};
export default MaldivesPicture;
