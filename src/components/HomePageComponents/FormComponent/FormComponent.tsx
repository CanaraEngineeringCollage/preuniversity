"use client";

import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import { submitForm } from "@/utils/formSubmission";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

// Define the shape of our form data
interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  enquiry: string;
}

function FormComponent() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  // Watch the enquiry field to update the character count
  const enquiryValue = watch("enquiry") || "";

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);

    // Append +91 to the phone number before submitting
    const formattedData = {
      ...data,
      phoneNumber: `+91 ${data.phoneNumber}`,
      comments: data.enquiry, // Map to what submitForm expects if necessary
    };

    const result = await submitForm(formattedData);

    const sheetSuccess = result.sheet?.success;
    const firestoreSuccess = result.cms?.success;


      reset(); // Clears all form fields
      toast.success("Enquiry submitted successfully!");
   
    

    setIsLoading(false);
  };

  return (
    <div className="relative flex items-center justify-center mb-7 md:mb-0 p-4 overflow-hidden">
      {/* Background half white and half blue */}
      <div className="absolute inset-0 z-0">
        <div className="h-1/2 bg-white"></div> {/* Fixed broken bg-[ class */}
        <div className="h-1/2 md:bg-[#001A48]"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl bg-[#F6F7FB] rounded-2xl px-1.5 md:px-0 overflow-hidden md:flex flex-col md:flex-row">
        
        {/* Map Section */}
        <div className="md:w-1/2 h-[400px] md:h-[700px] relative lg:p-4">
          <iframe
            width="100%"
            height="100%"
            className="rounded-2xl lg:rounded-[15px]"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8486534147857!2d74.8398645!3d12.8791904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba350a13025ca43%3A0xc377faaf3db7a9c3!2sCanara%20College!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
          ></iframe>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-6 md:p-8 border md:border-none rounded-2xl flex flex-col mt-8 md:mt-0 justify-center md:ml-8">
          <h2 className="text-2xl md:text-[44px] leading-[1.2] font-bold text-[#001A48] mb-6 md:mb-8">
            Dream Big. Plan Smart. <br className="hidden md:block"/> Enquire Now.
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate // Disables native browser tooltips
            className="space-y-4 md:space-y-6 text-[#1D1D1F]"
          >
            {/* Full Name */}
            <div>
              <input
                type="text"
                placeholder="Your Full Name"
                {...register("fullName", {
                  required: "Full name is required",
                  minLength: { value: 2, message: "Must be at least 2 characters" },
                  maxLength: { value: 50, message: "Cannot exceed 50 characters" },
                })}
                className={`w-full px-4 py-2 md:py-3 border-b focus:outline-none text-sm md:text-base bg-transparent ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1 px-4">{errors.fullName.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Your Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email address",
                  },
                })}
                className={`w-full px-4 py-2 md:py-3 border-b focus:outline-none text-sm md:text-base bg-transparent ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 px-4">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <div
                className={`flex items-center border-b px-4 py-2 md:py-3 bg-transparent ${
                  errors.phoneNumber ? "border-red-500" : "border-gray-300"
                }`}
              >
                <span className="text-gray-500 mr-2 text-sm md:text-base">+91</span>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  maxLength={10}
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Please enter exactly 10 digits",
                    },
                  })}
                  className="w-full focus:outline-none text-sm md:text-base bg-transparent"
                />
              </div>
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1 px-4">{errors.phoneNumber.message}</p>
              )}
            </div>

            {/* Enquiry */}
            <div className="relative w-full">
              <textarea
                placeholder="Your Enquiry"
                rows={3}
                {...register("enquiry", {
                  required: "Enquiry is required",
                  minLength: { value: 2, message: "Must be at least 2 characters" },
                  maxLength: { value: 250, message: "Cannot exceed 250 characters" },
                  validate: (value) => value.trim().length > 0 || "Cannot be only whitespace",
                })}
                className={`w-full px-4 py-2 md:py-3 pr-14 border-b focus:outline-none resize-none text-sm md:text-base bg-transparent ${
                  errors.enquiry ? "border-red-500" : "border-gray-300"
                }`}
              />

              {/* Character Counter */}
              <span className="absolute top-3 right-4 text-xs text-gray-500">
                {enquiryValue.length}/250
              </span>

              {errors.enquiry && (
                <p className="text-red-500 text-sm mt-1 px-4">{errors.enquiry.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                disabled={isLoading}
                aria-label={isLoading ? "Submitting" : "Submit form"}
                className={`bg-[#3C71D7] text-white px-8 py-2 rounded-full font-semibold text-sm md:text-base hover:bg-[#3C71D7]/90 transition-colors ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? <ClipLoader size={20} color="#fff" /> : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormComponent;