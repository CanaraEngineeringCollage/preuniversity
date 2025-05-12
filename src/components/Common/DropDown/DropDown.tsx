import React from "react";

function DropDown({ openSidebar, sidebar }: { openSidebar: (callback: (prev: boolean) => boolean) => void; sidebar: boolean }) {
  return (
    <div className="dropdown ">
      <div
        onClick={() => openSidebar((prev: boolean) => !prev)}
        tabIndex={0}
        className="  text-[#213557] hover:text-yellow-400   cursor-pointer"
      >
        <svg
          className={`${sidebar ? "hidden" : "block"}`}
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className=" transform duration-150"
            d="M4 6H20"
            stroke="#1F2937"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 12H20"
            stroke="#1F2937"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className=" transform duration-150"
            d="M4 18H20"
            stroke="#1F2937"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          className={`${sidebar ? "block" : "hidden"}`}
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18"
            stroke="#1F2937"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 6L18 18"
            stroke="#1F2937"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default DropDown;
