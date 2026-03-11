import Brochure, { EventSection as BrochureData } from "@/components/Common/Brochure/Brochure";
import FestLocation, { EventSection as FestLocationData } from "@/components/Common/FestLocation/FestLocation";

// Helper to fetch from your CMS instead of Firebase
async function getEventData(category: string) {
  const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:3000";
  
  try {
    // We fetch with 'no-store' to ensure we always get the latest CMS updates
    const res = await fetch(`${cmsUrl}/api/events?category=${category}`, {
      cache: 'no-store',
    });

    if (!res.ok) return null;

    const data = await res.json();
    
    // Your API returns { items: [ {category: 'footprints', ...} ] }
    // We take the first item that matches our category
    return data.items?.[0] || null;
  } catch (err) {
    console.error(`CMS Fetch Error for ${category}:`, err);
    return null;
  }
}

export default async function Page() {
  const category = "mat-kabbadi";
  const data = await getEventData(category);

  // Casting data to the types expected by your components
  const brochureData = data as BrochureData | null;
  const festLocationData = data as FestLocationData | null;

  return (
    <div className="">
      {/* Passing "footprints" to your components */}
      <Brochure category={category} initialData={brochureData} />
      <FestLocation category={category} initialData={festLocationData} />
    </div>
  );
}