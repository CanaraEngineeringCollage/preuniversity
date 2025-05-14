'use client'

import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';
import { useRouter } from 'next/navigation';

type FormData = {
  fullName: string;
  email: string;
  phoneNumber: string;
  enquiry: string;
};

const HeroSectionMobile = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      enquiry: '',
    },
  });

  const [loading, setLoading] = useState(false);
  const commentValue = watch('enquiry') || '';
  const router = useRouter();
  const onSubmit = async (data: FormData) => {
    setLoading(true);
    const response = await fetch("https://applycanara.vercel.app/api/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result.result === "success") {
      router.push("/thank-you");
    } else {
      toast.error("Error submitting form.");
    }
  }

  return (
    <div className="flex justify-center mt-[-10px] ">
      <div className="w-full max-w-7xl p-10">
        <h2 className="text-center text-black font-bold text-3xl md:text-3xl mb-12">
          Dream Big. Plan Smart. Enquire Now.
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              placeholder="Your Full Name"
              {...register('fullName', {
                required: 'Full name is required',
                minLength: {
                  value: 2,
                  message: 'Full name must be at least 2 characters',
                },
                maxLength: {
                  value: 50,
                  message: 'Full name cannot exceed 50 characters',
                },
              })}
              className="w-full border-b border-gray-300 focus:outline-none text-lg py-2"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Please enter a valid email address',
                },
              })}
              className="w-full border-b border-gray-300 focus:outline-none text-lg py-2"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <input
              type="tel"
              placeholder="Your Phone Number"
              {...register('phoneNumber', {
                required: 'Phone number is required',
                pattern: {
                  value: /^\+?[\d\s-]{10,15}$/,
                  message: 'Please enter a valid phone number (10-15 digits)',
                },
              })}
              className="w-full border-b border-gray-300 focus:outline-none text-lg py-2"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <textarea
              rows={3}
              maxLength={250}
              placeholder="Your Enquiry"
              {...register('enquiry', {
                required: 'Enquiry are required',
                minLength: {
                  value: 2,
                  message: 'Enquiry must be at least 2 characters',
                },
                maxLength: {
                  value: 250,
                  message: 'Enquiry cannot exceed 250 characters',
                },
                validate: {
                  notOnlyWhitespace: (value) =>
                    value.trim().length > 0 || 'Enquiry cannot be only whitespace',
                },
              })}
              className="w-full border-b border-gray-300 focus:outline-none text-lg py-2 resize-none"
            />
            <div className="flex justify-between items-center mt-1">
              <div>
                {errors.enquiry && (
                  <p className="text-red-500 text-sm">{errors.enquiry.message}</p>
                )}
              </div>
              <div className="text-sm text-gray-500">
                {commentValue.length}/250
              </div>
            </div>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className={`bg-[#3C71D7]  text-white text-lg font-semibold px-6 py-2 rounded-full transition duration-300 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? <ClipLoader size={24} color="#fff" /> : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeroSectionMobile;