"use client"; // Required for using hooks in Next.js 13+ App Router

import React, { useRef } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { motion, useInView } from "framer-motion";
import { toast } from "react-hot-toast";
import { useState } from "react";

import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";

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
    
    if (true) {
      router.push("/thank-you");
    } else {
   
    }
  };
  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true });

  return (
    <div className="relative md:h-[100vh] h-[70vh]">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image src="/images/homePageImages/bgImage.png" alt="Students 1" fill className="object-cover " />

          {/* Gradient overlay */}
        </div>
      </div>

      {/* Form Container - Positioned on the Right */}
      <div className="relative  container mx-auto h-full max-w-[1350px]  z-20 hidden md:flex items-center justify-end md:min-h-[90vh]">
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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6 text-black">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-4xl leading-[1.3] font-bold text-center text-[#001A48] font-helvetica"
            >
              Dream Big. Plan Smart. Enquire Now.
            </motion.h2>

            <motion.input
              type="text"
              placeholder="Your Full Name"
              {...register("fullName", { required: "Full Name is required" })}
              className="w-full border-b border-gray-300 focus:outline-none text-md py-2"
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}

            <motion.input
              type="email"
              placeholder="Your Email"
              {...register("email", { required: "Email is required" })}
              className="w-full border-b border-gray-300 focus:outline-none text-md py-2"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

            <motion.input
              type="tel"
              placeholder="Your Phone Number"
              {...register("phoneNumber", {
                required: "Phone Number is required",
              })}
              className="w-full border-b border-gray-300 focus:outline-none text-md py-2"
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}

            <motion.textarea
              placeholder="Your Enquiry"
              {...register("comments", {
                required: "Enquiry is required",
                maxLength: 250,
              })}
              rows={4}
              maxLength={250}
              className="w-full border-b border-gray-300 focus:outline-none text-md py-2"
            />
            <div className="flex justify-between text-red-500 text-sm px-1">
              <span>{errors.comments?.message}</span>
              <span className="text-gray-500">{watch("comments")?.length || 0}/250</span>
            </div>

            <div className="flex justify-center">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#3C71D7] text-white px-8 py-2 rounded-full font-semibold text-md"
              >
                {loading ? <ClipLoader size={24} color="#fff" className="mt-2" /> : "Submit"}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroBanner;
