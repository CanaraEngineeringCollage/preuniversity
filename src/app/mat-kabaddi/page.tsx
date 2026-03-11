export const dynamic = "force-dynamic";


import Brochure, { EventSection as BrochureData } from "@/components/Common/Brochure/Brochure";
import FestLocation, { EventSection as FestLocationData } from "@/components/Common/FestLocation/FestLocation";
import { db } from "@/utils/firebase";
import { doc, getDoc } from "firebase/firestore";

export default async function page() {
  const docRef = doc(db, "events", "mat-kabbadi");
  const snap = await getDoc(docRef);
  const data = snap.exists() ? snap.data() : null;



  const brochureData = data as BrochureData | null;
  const festLocationData = data as FestLocationData | null;

  return (
    <div className="">
      {/* Heading */}
      <Brochure category="mat-kabbadi" initialData={brochureData} />
      <FestLocation category="mat-kabbadi" initialData={festLocationData} />
    </div>
  );
}
