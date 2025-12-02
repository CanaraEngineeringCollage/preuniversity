"use client";

import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";

import toast from "react-hot-toast";
import { useOutsideClick } from "@/components/hooks/use-outside-click";
import { IoCloseOutline } from "react-icons/io5";
import { submitToGoogleSheet } from "@/utils/formSubmission";

type FormData = {
  fullName: string;
  email: string;
  phoneNumber: string;
  enquiry: string;
};

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, type: "spring", stiffness: 120 },
  },
  exit: { opacity: 0, scale: 0.9, y: 50, transition: { duration: 0.2 } },
};

const FormModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      enquiry: "",
    },
  });

  const commentValue = watch("enquiry") || "";
  const [loading, setLoading] = React.useState(false);

 const handleFormSubmit = async (data: FormData) => {
  setLoading(true);

  const result = await submitToGoogleSheet({
    fullName: data.fullName,
    email: data.email,
    phoneNumber: data.phoneNumber,
    comments: data.enquiry,
  });
reset();
    onClose();
  if (result.success) {
    reset();
    onClose();
  } else {
  }

  setLoading(false);
};

  // close on outside click
  useOutsideClick(containerRef, () => {
    if (isOpen) onClose();
  });

  // ESC key close
 React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex justify-center items-center p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Modal Box */}
          <motion.div
            ref={containerRef}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white rounded-3xl max-w-xl w-full px-8 pb-8 pt-14 relative shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4  h-8 w-8 rounded-full flex items-center justify-center text-white"
            >
             <IoCloseOutline className="text-4xl text-black" />
            </button>

            {/* Title */}
            <h2 className="text-2xl md:text-4xl leading-[1.3] font-bold text-center text-[#001A48] font-helvetica mb-6">
              Dream Big. Plan Smart. <br /> Enquire Now.
            </h2>

            {/* Form */}
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              className="grid grid-cols-1 gap-6 text-[#1D1D1F]"
            >
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  {...register("fullName", {
                    required: "Full name is required",
                    minLength: {
                      value: 2,
                      message: "Full name must be at least 2 characters",
                    },
                    maxLength: {
                      value: 50,
                      message: "Full name cannot exceed 50 characters",
                    },
                  })}
                  className="w-full border-b border-gray-300 focus:outline-none text-lg py-2"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.fullName.message}
                  </p>
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
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Enter a valid email",
                    },
                  })}
                  className="w-full border-b border-gray-300 focus:outline-none text-lg py-2"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^\+?[\d\s-]{10,15}$/,
                      message: "Enter a valid phone number",
                    },
                  })}
                  className="w-full border-b border-gray-300 focus:outline-none text-lg py-2"
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>

              {/* Enquiry */}
        <div className="relative">
  <textarea
    rows={3}
    maxLength={250}
    placeholder="Your Enquiry"
    {...register("enquiry", {
      required: "Enquiry is required",
      minLength: {
        value: 2,
        message: "Enquiry must be at least 2 characters",
      },
      maxLength: {
        value: 250,
        message: "Enquiry cannot exceed 250 characters",
      },
      validate: {
        notOnlyWhitespace: (value) =>
          value.trim().length > 0 ||
          "Enquiry cannot be only whitespace",
      },
    })}
    className="w-full border-b border-gray-300 focus:outline-none text-lg py-2 pr-12 resize-none"
  />

  {/* Character Counter inside textarea (top-right or bottom-right) */}
  <span className="absolute right-0 top-0 mt-2 mr-2 text-xs text-gray-500">
    {commentValue.length}/250
  </span>

  {/* Error Message Below */}
  <p className="text-red-500 text-sm mt-1">{errors.enquiry?.message}</p>
</div>


              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className={`bg-[#3C71D7] text-white px-8 py-2 rounded-full font-semibold text-md transition ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? <ClipLoader size={24} color="#fff" /> : "Submit"}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FormModal;
