import InfoParis from "../../Content Description/Paris";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const ParisPicture = () => {
  const [parispicture, setParisPicture] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    setLoading(true);
    const parispictureRef = ref(db, "parispicture/");
    onValue(parispictureRef, (snapshot) => {
      const data = snapshot.val();
      setParisPicture(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="gallery-item">
      <img
        alt="Cityscape with historical buildings"
        height={200}
        src={parispicture.img}
        width={300}
        //paris
      />
      <InfoParis />
    </div>
  );
};
export default ParisPicture;
