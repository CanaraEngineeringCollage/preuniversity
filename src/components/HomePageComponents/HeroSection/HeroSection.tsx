"use client"; // Required for using hooks in Next.js 13+ App Router

import React, { useRef } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { motion, useInView } from "framer-motion";
import { toast } from "react-hot-toast";
import { useState } from "react";

import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";

import FormModal from "@/components/Common/FormModal/FormModal";
import { submitForm } from "@/utils/formSubmission";

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  comments: string;
}

const HeroBanner = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  
  const onSubmit = async (data: FormData) => {
    setLoading(true);

    // Append +91 to the phone number before submitting
    const formattedData = {
      ...data,
      phoneNumber: `+91 ${data.phoneNumber}`,
    };

    const result = await submitForm(formattedData);

    const sheetSuccess = result.sheet?.success;
    const firestoreSuccess = result.cms?.success;

    
      reset();
      toast.success("Enquiry submitted successfully!");
   

    setLoading(false);
  };

  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true });
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* FIX: Changed md:h-[100vh] h-[50vh] to md:min-h-[100vh] min-h-[50vh]
        This allows the container to grow if the form needs more space.
      */}
      <div className="relative md:min-h-[100vh] min-h-[50vh] flex flex-col">
        
        <div className="absolute bottom-6 left-0 w-full flex flex-col items-center md:hidden z-20 px-4 text-center">
          <h2 className="text-3xl leading-[1.3] font-bold text-white font-helvetica mb-4">
            Dream Big. Plan Smart. <br /> Enquire Now.
          </h2>

          <button
            onClick={() => setOpen(true)}
            className="text-white bg-[#3C71D7] rounded-[90px] px-8 py-2 font-bold"
          >
            Enquire Now
          </button>
        </div>
        
        {/* Background Image Carousel */}
        {/* The absolute inset-0 wrapper will automatically stretch to match the new min-height */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image 
              src="/images/homePageImages/bgImage.png" 
              alt="Students 1" 
              fill 
              className="object-cover object-[20%_center] md:object-center" 
            />
            {/* Gradient overlay */}
          </div>
        </div>

        {/* Form Container - Positioned on the Right */}
        {/* FIX: Changed h-full to flex-1 py-12 to ensure it pushes the parent height correctly */}
        <div className="relative pr-20 flex-1 py-12 z-10 hidden md:flex items-center justify-end">
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: 50 }} // Slide in from right
            animate={{
              opacity: isFormInView ? 1 : 0,
              x: isFormInView ? 0 : 50,
            }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg px-4 md:px-6 lg:px-8 py-6 md:py-8 xl:py-16 w-full max-w-[95vw] sm:max-w-[80vw] md:max-w-[40vw] lg:max-w-[35vw] xl:max-w-[30vw]"
          >
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4 md:space-y-6 text-[#1D1D1F]">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-4xl leading-[1.3] font-bold text-center text-[#001A48] font-helvetica"
              >
                Dream Big. Plan Smart. Enquire Now.
              </motion.h2>

              {/* Full Name */}
              <div>
                <motion.input
                  type="text"
                  placeholder="Your Full Name"
                  {...register("fullName", {
                    required: "Full name is required",
                    minLength: { value: 2, message: "Must be at least 2 characters" },
                    maxLength: { value: 50, message: "Cannot exceed 50 characters" },
                  })}
                  className={`w-full border-b focus:outline-none text-md py-2 ${
                    errors.fullName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <motion.input
                  type="email"
                  placeholder="Your Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                  className={`w-full border-b focus:outline-none text-md py-2 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <div
                  className={`flex items-center border-b py-2 ${
                    errors.phoneNumber ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <span className="text-md text-gray-500 mr-2">+91</span>
                  <motion.input
                    type="tel"
                    placeholder="Phone Number"
                    maxLength={10} // Restricts typing more than 10 chars
                    {...register("phoneNumber", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Please enter exactly 10 digits",
                      },
                    })}
                    className="w-full focus:outline-none text-md"
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
                )}
              </div>

              {/* Enquiry / Comments */}
              <div className="relative w-full">
                <motion.textarea
                  placeholder="Your Enquiry"
                  rows={4}
                  {...register("comments", {
                    required: "Enquiry is required",
                    minLength: { value: 2, message: "Must be at least 2 characters" },
                    maxLength: { value: 250, message: "Cannot exceed 250 characters" },
                    validate: (value) => value.trim().length > 0 || "Cannot be only whitespace",
                  })}
                  className={`w-full border-b focus:outline-none text-md py-2 pr-10 resize-none ${
                    errors.comments ? "border-red-500" : "border-gray-300"
                  }`}
                />

                {/* Character Counter Positioned Right */}
                <span className="absolute top-2 right-0 text-gray-500 text-[12px]">
                  {watch("comments")?.length || 0}/250
                </span>

                {errors.comments && (
                  <p className="text-red-500 text-sm mt-1">{errors.comments.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-center mt-2">
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-[#3C71D7] text-white px-8 py-2 rounded-full font-semibold text-md transition ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? <ClipLoader size={24} color="#fff" /> : "Submit"}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
      
      <FormModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default HeroBanner;