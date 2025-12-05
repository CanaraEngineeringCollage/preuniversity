"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FacilitiesCardContentProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  backgroundColor?: string;
  textColor?: string;
  headingColor?: string;
  className?: string;
}

export default function FacilitiesCardContent({
  title = "",
  description = "",
  imageSrc = "",
  imageAlt = "",
  backgroundColor = "",
  textColor = "text-neutral-600",
  headingColor = "text-neutral-700",
  className,
}: FacilitiesCardContentProps) {
  return (
    <motion.div
      className={cn(backgroundColor, "rounded-3xl mb-10", className)}
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
            className="max-h-[500px] mx-auto object-cover object-[center_20%] mb-6 md:mb-12"
          />
        </motion.div>
      )}

      {/* Title */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3 },
        }}
        className="text-2xl md:text-4xl px-8 font-semibold text-neutral-700 mt-1"
      >
        {title}
      </motion.p>

      {/* Description */}
      <motion.p
        className={cn(textColor, "text-base pt-2 md:text-xl font-sans max-w-3xl px-8")}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
