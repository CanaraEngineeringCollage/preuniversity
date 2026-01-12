"use client";

import { useEffect, useState } from "react";
import { collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";
import { db } from "@/utils/firebase";


export default function Magazine() {
  const [magazineUrl, setMagazineUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the latest uploaded magazine
    const q = query(
      collection(db, "magazines"),
      orderBy("createdAt", "desc"),
      limit(1)
    );

    const unsubscribe = onSnapshot(q, snapshot => {
      if (!snapshot.empty) {
        setMagazineUrl(snapshot.docs[0].data().url);
      } else {
        setMagazineUrl(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="max-w-7xl xl:max-w-[75%] px-5 mx-auto my-10 lg:my-16">
      <h1 className="text-[30px] lg:text-[54px] font-bold text-[#1D1D1F]">
        E-Magazine
      </h1>

      {/* Loading State */}
      {loading && null}

      {/* No Magazine Found */}
      {!loading && !magazineUrl && (
        <div className="text-center text-[#2A2A2A] mt-10">
          <p>No magazine uploaded yet.</p>
        </div>
      )}

      {/* Display Magazine */}
      {!loading && magazineUrl && (
        <iframe
          className="w-full h-[70vh] mt-5 lg:mt-10"
          allowFullScreen
          allow="clipboard-write"
          scrolling="no"
          src={magazineUrl}
          frameBorder="0"
        />
      )}
    </div>
  );
}
