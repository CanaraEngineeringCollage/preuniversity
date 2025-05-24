"use client";

import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import Image from "next/image";

function FormComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiry: "",
  });

  const [charCount, setCharCount] = useState<number>(0);
  const [isLoding, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(formData);
    setIsLoading(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });

    if (e.target.name === "enquiry") {
      setCharCount(value.length);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
      {/* Background half white and half blue */}
      <div className="absolute inset-0 z-0">
        <div className="h-1/2 bg-["></div>
        <div className="h-1/2 bg-[#001A48]"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl bg-[#F6F7FB]  rounded-2xl  overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2 h-[400px] md:h-[800px] relative">
          <Image
            src="/images/homePageImages/map.jpg"
            alt="Map"
            fill
            className="lg:m-[15px] rounded-[15px] object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex justify-center">
              <svg
                width="35"
                height="43"
                viewBox="0 0 35 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.3152 0.299805C26.6982 0.299805 34.3152 7.9168 34.3152 17.2998C34.3152 22.1858 31.8772 27.2148 28.8162 31.4378C24.5422 37.3358 19.1972 41.6358 19.1972 41.6358V41.6368C18.0982 42.5208 16.5322 42.5208 15.4332 41.6368V41.6358C15.4332 41.6358 10.0882 37.3358 5.81418 31.4378C2.75318 27.2148 0.315186 22.1858 0.315186 17.2998C0.315186 7.9168 7.93219 0.299805 17.3152 0.299805ZM17.3152 10.2998C21.1782 10.2998 24.3152 13.4368 24.3152 17.2998C24.3152 21.1628 21.1782 24.2998 17.3152 24.2998C13.4522 24.2998 10.3152 21.1628 10.3152 17.2998C10.3152 13.4368 13.4522 10.2998 17.3152 10.2998Z"
                  fill="#3C71D7"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center md:ml-8">
          <h2 className="text-2xl md:text-[44px] font-bold text-[#1e1b4b] mb-6 md:mb-8">
            Dream Big. Plan Smart. Enquire Now.
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 text-black">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 md:py-3 border-b border-gray-300 focus:border-purple-500 focus:outline-none text-sm md:text-base"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 md:py-3 border-b border-gray-300 focus:border-purple-500 focus:outline-none text-sm md:text-base"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 md:py-3 border-b border-gray-300 focus:border-purple-500 focus:outline-none text-sm md:text-base"
                required
              />
            </div>

            <div className="relative">
              <textarea
                name="enquiry"
                placeholder="Your Enquiry"
                value={formData.enquiry}
                onChange={handleChange}
                className="w-full px-4 py-2 md:py-3 border-b border-gray-300 focus:border-purple-500 focus:outline-none resize-none text-sm md:text-base"
                maxLength={250}
                required
                rows={3}
              />
              <span className="absolute bottom-2 right-2 text-xs md:text-sm text-gray-400">
                {charCount}/250
              </span>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                aria-label={isLoding ? "Submitting" : "Submit form"}
                className="w-32 cursor-pointer bg-[#9583FE] text-white py-2 md:py-3 px-6 rounded-full hover:bg-[#6d28d9] transition-colors text-sm md:text-base"
              >
                {isLoding ? <ClipLoader size={24} color="#fff" /> : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormComponent;
