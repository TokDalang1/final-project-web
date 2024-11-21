import InfoMorocco from "../../Content Description/Morocco";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const MoroccoPicture = () => {
  const [moroccopicture, setMoroccoPicture] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    setLoading(true);
    const moroccopictureRef = ref(db, "moroccopicture/");
    onValue(moroccopictureRef, (snapshot) => {
      const data = snapshot.val();
      setMoroccoPicture(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="gallery-item">
      <img
        alt="Desert landscape with sand dunes"
        height={200}
        src={`data:images/jpeg;base64,${moroccopicture.img}`}
        width={300}
        //morocco
      />
      <InfoMorocco />
    </div>
  );
};
export default MoroccoPicture;
