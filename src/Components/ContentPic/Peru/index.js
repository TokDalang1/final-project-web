import InfoPeru from "../../Content Description/Peru";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const PeruPicture = () => {
  const [perupicture, setPeruPicture] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    setLoading(true);
    const perupictureRef = ref(db, "perupicture/");
    onValue(perupictureRef, (snapshot) => {
      const data = snapshot.val();
      setPeruPicture(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="gallery-item">
      <img
        alt="Historical ruins with a sunset background"
        height={200}
        src={perupicture.img}
        width={300}
        //peru
      />
      <InfoPeru />
    </div>
  );
};
export default PeruPicture;
