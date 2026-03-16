"use client";

export interface EventSection {
  heading: string;
  description: string;
  googleFormUrl: string;
  flipbookUrl: string;
}

interface BrochureProps {
  category: "mat-kabbadi" | "footprints";
  initialData?: EventSection | null;
  descriptionList?: string[]; // Added as a separate prop here
}

export default function Brochure({ category, initialData, descriptionList }: BrochureProps) {
  const data = initialData;

  if (!data) {
    return (
      <section className="w-full px-5 py-10 md:py-16 bg-[#F5F6FA]">
        <div className="max-w-7xl xl:max-w-[85%] mx-auto flex flex-col items-center animate-pulse">
          <div className="flex justify-between items-center w-full md:mb-10">
            {/* Heading Skeleton */}
            <div className="w-full">
              <div className="h-8 md:h-14 bg-gray-300 rounded w-3/4 mb-4"></div>
              <div className="h-4 md:h-6 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 md:h-6 bg-gray-300 rounded w-2/3"></div>
            </div>

            {/* Register Button Skeleton (Desktop) */}
            <div className="hidden lg:block w-48 h-12 bg-gray-300 rounded-[90px]"></div>
          </div>

          {/* Array Data (descriptionList) Skeleton added here */}
          <div className="w-full mb-10 space-y-3 ">
            <div className="h-4 md:h-5 bg-gray-300 rounded w-11/12"></div>
            <div className="h-4 md:h-5 bg-gray-300 rounded w-5/6"></div>
            <div className="h-4 md:h-5 bg-gray-300 rounded w-full"></div>
          </div>

          {/* Flipbook iFrame Skeleton */}
          <div className="w-full mt-10 flex justify-center">
            <div className="w-full h-[600px] bg-gray-300 rounded-md"></div>
          </div>

          {/* Register Button Skeleton (Mobile) */}
          <div className="block lg:hidden mt-10 w-48 h-12 bg-gray-300 rounded-[90px]"></div>
        </div>
      </section>
    );
  }

  const handleRegister = () => {
    if (data.googleFormUrl) {
      window.open(data.googleFormUrl, "_blank");
    }
  };

  return (
    <section className="w-full px-5 py-10 md:py-16 bg-[#F5F6FA]">
      <div className="max-w-7xl xl:max-w-[85%] mx-auto flex flex-col items-center">
        <div className="flex justify-between items-center w-full md:mb-10">
          {/* Heading */}
          <div>
            <h1 className="text-[30px] lg:text-[54px] font-bold text-[#1D1D1F]">{data.heading}</h1>

            <p className="lg:text-2xl text-base text-[#1D1D1F] font-medium">{data.description}</p>
          </div>

          {/* Register Button (Desktop) */}
          {data.googleFormUrl && (
            <button onClick={handleRegister} className="text-white whitespace-nowrap bg-[#3C71D7] hidden lg:block rounded-[90px] px-8 py-3 font-bold">
              Register Now
            </button>
          )}
        </div>

        {/* Array Data (descriptionList) added right after the heading block as a separate prop */}
        {descriptionList && descriptionList.length > 0 && (
          <div className="w-full mb-10">
            <div className="  space-y-2">
              {descriptionList.map((desc, index) => (
                <p key={index} className="lg:text-2xl text-base text-[#1D1D1F] font-medium">
                  {desc}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Flipbook iFrame */}
        {data.flipbookUrl && (
          <div className="w-full mt-10 flex justify-center">
            <iframe src={data.flipbookUrl} className="w-full h-[600px] rounded-md" allowFullScreen />
          </div>
        )}

        {/* Register Button (Mobile) */}
        {data.googleFormUrl && (
          <button onClick={handleRegister} className="text-white bg-[#3C71D7] block lg:hidden mt-10 rounded-[90px] px-8 py-3 font-bold">
            Register Now
          </button>
        )}
      </div>
    </section>
  );
}