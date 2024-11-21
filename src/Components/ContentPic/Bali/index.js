import InfoBali from "../../Content Description/Bali";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const BaliPicture = () => {
  const [balipicture, setBaliPicture] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    setLoading(true);
    const balipictureRef = ref(db, "balipicture/");
    onValue(balipictureRef, (snapshot) => {
      const data = snapshot.val();
      setBaliPicture(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="gallery-item">
      <img
        alt="Beautiful beach with clear blue water"
        height={200}
        src={`data:images/jpg;base64,${balipicture.img}`}
        width={300}
        //Bali
      />
      <InfoBali />
    </div>
  );
};

export default BaliPicture;
