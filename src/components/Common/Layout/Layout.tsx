"use client";

import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../SideBar/SideBar";

function Layout({ children }: { children: React.ReactNode }) {
  const [sidebar, openSidebar] = useState<boolean>(false);
  return (
    <>
      <div className="min-h-screen ">
        {/* overflow-x-hidden */}
        <header className="top-0 left-0 right-0 bg-white z-[1111] ">
          <Navbar openSidebar={() => openSidebar((prev) => !prev)} sidebar={sidebar} />
        </header>
        <main className=" font-poppins">
          <Sidebar openSidebar={() => openSidebar((prev) => !prev)} sidebar={sidebar} />
          <div
            onClick={() => {
              if (sidebar) {
                openSidebar(false);
              }
            }}
          >
            {children}
          </div>
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
}
export default Layout;
