"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Define the shape of a detailed feature item
export interface FeatureItem {
  title: string;
  description: string;
}

interface FacilitiesCardContentProps {
  title?: string;
  intro?: string;
  points?: string[]; // For simple bullet lists
  detailedFeatures?: FeatureItem[]; // For items with Title + Description
  extra?: string[]; // For extra lists (like Exam names)
  closing?: string;
  imageSrc?: string;
  imageAlt?: string;
  backgroundColor?: string;
  textColor?: string;
  headingColor?: string;
  className?: string;
  pointsHeading?: string;
  closingEnd?: string;
  extraHeading?: string;
  keyFeaturesHeading?: string;
}

export default function FacilitiesCardContent({
  title = "",
  intro = "",
  points = [],
  pointsHeading = "",
  keyFeaturesHeading = "",
  extraHeading = "",
  closingEnd = "",
  detailedFeatures = [],
  extra = [],
  closing = "",
  imageSrc = "",
  imageAlt = "",
  backgroundColor = "",
  textColor = "text-[#2A2A2A]",
  headingColor = "text-[#1D1D1F]",
  className,
}: FacilitiesCardContentProps) {
  
const textStyle = cn(textColor, "text-base md:text-xl font-sans leading-relaxed");

  return (
    <motion.div
      className={cn(backgroundColor, "rounded-3xl mb-10 pb-8", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, type: "spring", damping: 15 },
      }}
    >
      {/* Image */}
      {imageSrc && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.5, type: "spring" },
          }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            height={500}
            width={900}
            className="max-h-[500px] w-full mx-auto object-cover object-[center_20%] mb-6 md:mb-10 rounded-t-3xl"
          />
        </motion.div>
      )}

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        className={cn(headingColor, "text-2xl md:text-4xl px-8 font-semibold mt-1 mb-6")}
      >
        {title}
      </motion.h2>

      {/* Content Container */}
      <div className="px-8 max-w-4xl space-y-6">
        
        {/* Intro Text */}
        {intro && <motion.p className={textStyle}>{intro}</motion.p>}

       
 {pointsHeading && <motion.p   className={textStyle}>{pointsHeading}</motion.p>}
        {detailedFeatures && detailedFeatures.length > 0 && (
          
          <div className=" pt-2">
            {/* Optional Header for Detailed Features could go here */}
        {keyFeaturesHeading && (
          <motion.h2  className={cn(headingColor, "text-xl md:text-2xl font-semibold mt-1 mb-6")}>{keyFeaturesHeading}</motion.h2>
        )}
        <div className="space-y-3">
            {detailedFeatures.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={textStyle  }
              >
                <span className="font-bold  block md:inline md:mr-2">
                  {item.title}:
                </span>
                <span>{item.description}</span>
              </motion.div>
            ))}
          </div>
          </div>
        )}

        {/* Simple Bullet Points */}
        {points && points.length > 0 && (
          <motion.ul className={cn(textStyle, "list-disc pl-5 space-y-2")}>
            {points.map((point, idx) => (
              <li key={idx} className="pl-2">{point}</li>
            ))}
          </motion.ul>
        )}

        {/* Extra List (e.g., Exam Names) */}
        {extra && extra.length > 0 && (
          <div className="pt-2">
            {/* Optional Header for Extra section could go here */}
        {extraHeading && (
          <motion.p  className={cn(headingColor, "text-xl md:text-2xl font-semibold mt-1 mb-6")}>{extraHeading}</motion.p>
        )}
            <motion.ul className={cn(textStyle, "list-disc pl-5 space-y-2")}>
              {extra.map((item, idx) => (
                // Use dangerouslySetInnerHTML to render the <strong> tags
                <li 
                  key={idx} 
                  className="pl-2 font-medium"
                  dangerouslySetInnerHTML={{ __html: item }} 
                />
              ))}
            </motion.ul>
          </div>
        )}

        {/* Closing Text */}
        {closing && (
          <motion.p className={cn(textStyle, " pt-4  mt-6")}>
            {closing}
          </motion.p>
        )}

      
        {closingEnd && (
          <motion.p className={cn(textStyle, "pt-2 text-[#2A2A2A]")}>
            {closingEnd}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}