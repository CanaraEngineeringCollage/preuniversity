"use client";

import { Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/navigation";
import Link from "next/link";



const science = [
  {
    title: "Physics, Chemistry, Mathematics & Biology (PCMB)",
    link: "/streams/pcmb",
  },
  {
    title: "Physics, Chemistry, Mathematics & Electronics (PCME)",
    link: "/streams/pcme",
  },
  {
    title: "Physics, Chemistry, Mathematics & Computer Science (PCMC)",
    link: "/streams/pcmc",
  },
  {
    title: "Physics, Chemistry, Mathematics & Statistics (PCMS)",
    link: "/streams/pcms",
  },
];


const commerce = [
  {
    title: "Basic Maths, Statistics, Business Studies & Accountancy (BSBA)",
    link: "/streams/bsba",
  },
  {
    title: "Basic Maths, Economics, Business Studies & Accountancy (BEBA)",
    link: "/streams/beba",
  },
  {
    title: "Statistics, Economics, Business Studies & Accountancy (SEBA)",
    link: "/streams/seba",
  },
  {
    title: "Computer Science, Statistics, Business Studies & Accountancy (CSBA)",
    link: "/streams/csba",
  },
  {
    title: "History, Economics, Business Studies & Accountancy (HEBA)",
    link: "/streams/heba",
  },
  // {
  //   title: "Computer Science, Economics, Business Studies & Accountancy (CEBA)",
  //   link: "/examination-guidelines",
  // },
];

export default function Sidebar({ sidebar, openSidebar }: { sidebar: boolean; openSidebar: () => void }) {
  const [open, setOpen] = useState({
    about: false,
    courses: false,
    studentLife: false,
    events: false,
    updates: false,
  });
  const [visible, setVisible] = useState("main-menu");

  const closeSidebar = () => {
    openSidebar(false);
  }

   useEffect(() => {
      if (sidebar) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape" && sidebar) {
          openSidebar(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [sidebar, openSidebar]);
  return (
    <div>
      <div
        className={`sidebar bg-white z-[1000] h-[100vh] fixed md:top-[5rem] top-20 left-0  pb-36 ${!sidebar ? "translate-x-[-100%]" : "translate-x-0"
          } ease-in-out duration-500 pt-6 ${sidebar ? "" : ""}`}
      >
        <div className="px-8 max-w-xs">
          {
            {
              "main-menu": <MainMenu open={open} setOpen={setOpen} setVisible={setVisible} sidebar={sidebar} openSidebar={openSidebar} />,

              science: (
                <SubMenu
                  data={{
                    title: "Science Streams",
                    links: science,
                  }}
                  setVisible={setVisible}
                  openSidebar={openSidebar}
                />
              ),
              commerce: (
                <SubMenu
                  data={{
                    title: "Commerce Streams",
                    links: commerce,
                  }}
                  setVisible={setVisible}
                  openSidebar={openSidebar}
                />
              ),
            }[visible]
          }
        </div>
      </div>
    </div>
  );
}

function SubMenu({
  setVisible,
  data,
  openSidebar,
}: {
  setVisible: (visible: string) => void;
  data: {
    title: string;
    links: Array<{
      title: string;
      link: string;
    }>;
  };
  openSidebar: (state: boolean) => void;
}) {
  const router = useRouter();
  return (
    <>
      <div
        onClick={() => {
          setVisible("main-menu");
        }}
        className="flex gap-2 items-center sticky-top"
      >
        <IoIosArrowDown className={`w-4 h-4 text-gray-500 rotate-90 transition-all ease-in-out duration-300 lg:hidden`} />
        <Typography className="font-medium text-gray-500  text-[15px]">{data.title}</Typography>
      </div>
      <div className={`space-y-2 transition-all ease-in-out duration-300 mt-2`}>
        {data.links.map((link, index) => (
          <div
            key={index}
            onClick={() => {
              router.push(link.link);
              setVisible("main-menu");
              openSidebar(false);
            }}
            className="flex gap-2 items-center"
          >
            <Typography className=" text-gray-500 text-[12px]">{link.title}</Typography>
            <IoIosArrowDown className={`w-4 h-4 text-gray-500 -rotate-90 transition-all ease-in-out duration-300 lg:hidden`} />
          </div>
        ))}
      </div>
    </>
  );
}

function MainMenu({
  setVisible,
  open,
  setOpen,
  openSidebar,
}: {
  sidebar: boolean;
  setVisible: (visible: string) => void;
  open: { about: boolean; courses: boolean; studentLife: boolean; events: boolean; updates: boolean };
  setOpen: React.Dispatch<React.SetStateAction<{ about: boolean; courses: boolean; studentLife: boolean; events: boolean; updates: boolean }>>;
  openSidebar: (state: boolean) => void;
}) {
  const router = useRouter();

  return (
    <>
      <div className="border-b-border border-b-2 pb-4">
        <div
          onClick={() => {
            setOpen((prev: { about: boolean; courses: boolean; studentLife: boolean; events: boolean; updates: boolean }) => ({
              courses: false,
              studentLife: false,
              about: !prev.about,
              events: false,
              updates: false,
            }));
          }}
          className="flex gap-4 text-xl "
        >
          <Typography className="font-semibold text-[#2884CA]">About</Typography>
          <IoIosArrowDown className={`w-6 h-6 text-[#2884CA] transition-all ease-in-out duration-300 lg:hidden ${open.about && "rotate-180"}`} />
        </div>
        <div className={`space-y-2 transition-all ease-in-out duration-300 ${open.about ? "h-full opacity-100 mt-2" : "h-0 opacity-0"}`}>
          {open.about && (
            <>
              <div>
                <Link onClick={() => {
                  closeSidebar(false)
                }} href={"/about"}>
                  <div className="flex items-center gap-2">
                    {/* <College /> */}
                    <Typography className="text-sm text-gray-500">About Canara PU College</Typography>


                    <IoIosArrowDown className="w-4 h-4 text-gray-500 -rotate-90 transition-all ease-in-out duration-300 lg:hidden" />
                  </div>
                </Link>
              </div>
              <div>
                <Link
                  onClick={() => {
                    closeSidebar(false)
                  }}
                  href={"/legacy"}>
                  <div className="flex items-center gap-2">
                    {/* <Employees /> */}
                    <Typography className="text-sm text-gray-500">Institute Legacy</Typography>
                    <IoIosArrowDown className="w-4 h-4 text-gray-500 -rotate-90 transition-all ease-in-out duration-300 lg:hidden" />
                  </div>
                </Link>

              </div>
              <div>
                <Link onClick={() => {
                  closeSidebar(false)
                }}

                  href={"/administration"}>
                  <div className="flex items-center gap-2">
                    {/* <Certicficate /> */}
                    <Typography className="text-sm text-gray-500">Administration</Typography>
                    <IoIosArrowDown className="w-4 h-4 text-gray-500 -rotate-90 transition-all ease-in-out duration-300 lg:hidden" />
                  </div>
                </Link>
              </div>

              <div>
                <Link onClick={() => {
                  closeSidebar(false)
                }}


                  href={"/admission"}>
                  <div className="flex items-center gap-2">
                    {/* <HandShake /> */}
                    <Typography className="text-sm text-gray-500">Admissions</Typography>
                    <IoIosArrowDown className="w-4 h-4 text-gray-500 -rotate-90 transition-all ease-in-out duration-300 lg:hidden" />
                  </div>
                </Link>
              </div>
              <div>
                <Link onClick={() => {
                  closeSidebar(false)
                }}

                  href={"/infrastructure"}>
                  <div className="flex items-center gap-2">
                    {/* <HandShake /> */}
                    <Typography className="text-sm text-gray-500">Infrastructure</Typography>
                    <IoIosArrowDown className="w-4 h-4 text-gray-500 -rotate-90 transition-all ease-in-out duration-300 lg:hidden" />
                  </div>
                </Link>

              </div>
            </>
          )}
        </div>
      </div>

      <div className="border-b-border border-b-2 py-4">
        <div
          onClick={() => {
            setOpen((prev: { about: boolean; courses: boolean; studentLife: boolean; events: boolean; updates: boolean }) => ({
              about: false,
              studentLife: false,
              courses: !prev.courses,
              events: false,
              updates: false,
            }));
          }}
          className="flex gap-4 "
        >
          <Typography className="font-semibold text-[#2884CA] ">Courses</Typography>
          <IoIosArrowDown className={`w-6 h-6 text-[#2884CA] transition-all ease-in-out duration-300 lg:hidden ${open.courses && "rotate-180"}`} />
        </div>
        <div className={`space-y-2 transition-all ease-in-out duration-300 ${open.courses ? "h-full opacity-100 mt-2" : "h-0 opacity-0"}`}>
          {open.courses && (
            <>
              <div
                onClick={() => {
                  setVisible("science");
                }}
                className="flex gap-2 items-center"
              >
                <div className="flex items-center gap-2">
                  <Typography className="text-sm text-gray-500">Science Streams</Typography>
                  <IoIosArrowDown className="w-4 h-4 text-gray-500 -rotate-90 transition-all ease-in-out duration-300 lg:hidden" />
                </div>
              </div>
              <div
                onClick={() => {
                  setVisible("commerce");
                }}
                className="flex gap-2 items-center"
              >
                <div className="flex items-center gap-2">
                  <Typography className="text-sm text-gray-500">Commerce Streams</Typography>
                  <IoIosArrowDown className="w-4 h-4 text-gray-500 -rotate-90 transition-all ease-in-out duration-300 lg:hidden" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="border-b-border border-b-2 py-4">
        <div
          onClick={() => {
            setOpen((prev: { about: boolean; courses: boolean; studentLife: boolean; events: boolean; updates: boolean }) => ({
              about: false,
              studentLife: !prev.studentLife,
              courses: false,
              events: false,
              updates: false,
            }));
          }}
          className="flex gap-4 "
        >
          <Typography className="font-semibold text-[#2884CA] ">Student Life</Typography>
          <IoIosArrowDown
            className={`w-6 h-6 text-[#2884CA] transition-all ease-in-out duration-300 lg:hidden ${open.studentLife && "rotate-180"}`}
          />
        </div>
        <div className={`space-y-2 transition-all ease-in-out duration-300 ${open.studentLife ? "h-full opacity-100 mt-2" : "h-0 opacity-0"}`}>
          {open.studentLife && (
            <>
              {/* <div> */}
                {/* <div className="flex items-center gap-2"> */}
                  {/* <College /> */}
                  {/* <Typography className="text-sm text-gray-500">Competitive Exam Training</Typography>
                  <IoIosArrowDown className="w-4 h-4 text-gray-500 -rotate-90 transition-all ease-in-out duration-300 lg:hidden" /> */}
                {/* </div> */}
              {/* </div> */}
              <div>
                <Link  onClick={()=>{
                 closeSidebar(false)

                }}
                
                href={"/conduct"}>
                 <div className="flex items-center gap-2">
                  {/* <StudentsLife /> */}
                  <Typography className="text-sm text-gray-500"> Code of Conduct</Typography>
                  <IoIosArrowDown className="w-4 h-4 text-gray-500 -rotate-90 transition-all ease-in-out duration-300 lg:hidden" />
                </div>
                </Link>
               
              </div>

                <div>
                <Link  onClick={()=>{
                 closeSidebar(false)

                }}
                
                href={"/e-magazine"}>
                 <div className="flex items-center gap-2">
                  {/* <StudentsLife /> */}
                  <Typography className="text-sm text-gray-500"> E-Magazine</Typography>
                  <IoIosArrowDown className="w-4 h-4 text-gray-500 -rotate-90 transition-all ease-in-out duration-300 lg:hidden" />
                </div>
                </Link>
               
              </div>
              <div>
                <Link  onClick={()=>{
                 closeSidebar(false)

                }} 
                
                href={"/question-bank"}>
                 <div className="flex items-center gap-2">
                  {/* <Innovation /> */}
                  <Typography className="text-sm text-gray-500"> Question Bank</Typography>
                  <IoIosArrowDown className="w-4 h-4 text-gray-500 -rotate-90 transition-all ease-in-out duration-300 lg:hidden" />
                </div>
                
                </Link>
               
              </div>
              <div>

              </div>
            </>
          )}
        </div>
      </div>
      <div className="border-b-border border-b-2 py-4">
        <div
          onClick={() => {
            setOpen((prev: { about: boolean; courses: boolean; studentLife: boolean; events: boolean; updates: boolean }) => ({
              about: false,
              studentLife: false,
              courses: false,
              events: !prev.events,
              updates: false,
            }));
          }}
          className="flex gap-4 "
        >
          <Typography className="font-semibold text-[#2884CA] ">Events</Typography>
          <IoIosArrowDown className={`w-6 h-6 text-[#2884CA] transition-all ease-in-out duration-300 lg:hidden ${open.events && "rotate-180"}`} />
        </div>
        <div className={`space-y-2 transition-all ease-in-out duration-300 ${open.events ? "h-full opacity-100 mt-2" : "h-0 opacity-0"}`}>
          {open.events && (
            <>
              <div>
                <div className="flex items-center gap-2">
                  {/* <College /> */}
                  <Typography className="text-sm text-gray-500">Footprints</Typography>
                  <IoIosArrowDown className="w-4 h-4 text-gray-500 -rotate-90 transition-all ease-in-out duration-300 lg:hidden" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  {/* <StudentsLife /> */}
                  <Typography className="text-sm text-gray-500"> Mat Kabaddi</Typography>
                  <IoIosArrowDown className="w-4 h-4 text-gray-500 -rotate-90 transition-all ease-in-out duration-300 lg:hidden" />
                </div>
              </div>

            </>
          )}
        </div>
      </div>
      <div className="border-b-border border-b-2 py-4">
        <div
          onClick={() => {
            router.push("/buzz");
            openSidebar(false);
          }}
          className="flex gap-4 "
        >
          <Typography className="font-semibold text-[#2884CA] ">Buzz</Typography>
          <IoIosArrowDown className={`w-6 h-6 text-[#2884CA] -rotate-90 transition-all ease-in-out duration-300 lg:hidden`} />
        </div>
      </div>
      <div className="border-b-border border-b-2 py-4">
        <div
          onClick={() => {
            setOpen((prev: { about: boolean; courses: boolean; studentLife: boolean; events: boolean; updates: boolean }) => ({
              about: false,
              studentLife: false,
              courses: false,
              events: false,
              updates: !prev.updates,
            }));
          }}
          className="flex gap-4 "
        >
          <Typography className="font-semibold text-[#2884CA] ">Updates</Typography>
          <IoIosArrowDown className={`w-6 h-6 text-[#2884CA] transition-all ease-in-out duration-300 lg:hidden ${open.updates && "rotate-180"}`} />
        </div>
        <div className={`space-y-2 transition-all ease-in-out duration-300 ${open.updates ? "h-full opacity-100 mt-2" : "h-0 opacity-0"}`}>
          {open.updates && (
            <>
              <div >
                <div className="flex items-center gap-2" onClick={() => {
                  router.push("/exam-results");
                  openSidebar(false);
                }}>
                  {/* <College /> */}
                  <Typography className="text-sm text-gray-500">Exam Results</Typography>
                  <IoIosArrowDown className="w-4 h-4 text-gray-500 -rotate-90 transition-all ease-in-out duration-300 lg:hidden" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2" onClick={() => {
                  router.push("/exam-circulars");
                  openSidebar(false);
                }
                }>
                  {/* <StudentsLife /> */}
                  
                  <Typography className="text-sm text-gray-500">Exam Circulars</Typography>
                  <IoIosArrowDown className="w-4 h-4 text-gray-500 -rotate-90 transition-all ease-in-out duration-300 lg:hidden" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2" onClick={() => {
                  router.push("/fee-portal");
                  openSidebar(false);
                }
                }>
                  {/* <Innovation /> */}
                  <Typography className="text-sm text-gray-500">Fee Portal</Typography>
                  <IoIosArrowDown className="w-4 h-4 text-gray-500 -rotate-90 transition-all ease-in-out duration-300 lg:hidden" />
                </div>
              </div>

            </>
          )}
        </div>
      </div>
    </>
  );
}
