"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!containerRef.current || containerRef.current.contains(event.target as Node)) return;
      onClose();
    };

    if (open) {
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
    }

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [open, onClose]);

  // Disable scroll + Escape key
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 flex justify-center z-[9999999999999999999999] overflow-auto">
          {/* BACKDROP (same as Apple card) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="backdrop-blur-lg bg-black/30 fixed inset-0 z-40"
            onClick={onClose}
          />

          {/* MODAL BOX (Apple animation) */}
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { type: "spring", damping: 25, stiffness: 300, duration: 0.4 },
            }}
            exit={{
              opacity: 0,
              y: -20,
              scale: 0.98,
              transition: { duration: 0.3 },
            }}
            className="max-w-5xl bg-white shadow-2xl mx-4 h-fit z-[60] my-10 rounded-3xl relative overflow-hidden"
          >
            {/* CLOSE BUTTON WITH APPLE ANIMATION */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, transition: { delay: 0.3, duration: 0.2 } }}
              className="absolute z-50 top-4 right-4 h-8 w-8 bg-black rounded-full flex items-center justify-center"
              onClick={onClose}
            >
              <IoClose className="h-5 w-5 text-white" />
            </motion.button>

            {/* CHILDREN WITH STAGGERED FADE (JUST LIKE APPLE) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4 } }}
            >
              {Array.isArray(children)
                ? children.map((child: any, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: 0.3 + index * 0.1,
                          duration: 0.5,
                          type: "spring",
                          damping: 20,
                        },
                      }}
                    >
                      {child}
                    </motion.div>
                  ))
                : children}
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
