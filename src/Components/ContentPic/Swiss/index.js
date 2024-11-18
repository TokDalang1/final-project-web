import InfoSwiss from "../../Content Description/Swiss";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const SwissPicture = () => {
  const [swisspicture, setSwissPicture] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    setLoading(true);
    const swisspictureRef = ref(db, "swisspicture/");
    onValue(swisspictureRef, (snapshot) => {
      const data = snapshot.val();
      setSwissPicture(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="gallery-item">
      <img
        alt="Mountainous landscape with a lake"
        height={200}
        src={swisspicture.img}
        width={300}
        //swiss
      />
      <InfoSwiss />
    </div>
  );
};
export default SwissPicture;
