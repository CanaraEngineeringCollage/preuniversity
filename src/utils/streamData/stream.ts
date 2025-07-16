// export interface DataItem {
//   slug: string;
//   title: string;
//   icon: string;
//   description: string;
// }



// export const allStreamData: DataItem[] = [
//   {
//     slug: "pcmb",
//     title: "Physics, Chemistry, Mathematics & Biology (PCMB)",
//     icon: "/svgs/homapageCarousalSvg/1.svg",
//     description: "Covers Physics, Chemistry, Mathematics, and Biology for medical and research careers."
//   },
//   {
//     slug: "pcme",
//     title: "Physics, Chemistry, Mathematics & Electronics (PCME)",
//     icon: "/svgs/homapageCarousalSvg/2.svg",
//     description: "Focuses on Electronics alongside core sciences, preparing students for engineering."
//   },
//   {
//     slug: "pcmc",
//     title: "Physics, Chemistry, Mathematics & Computer Science (PCMC)",
//     icon: "/svgs/homapageCarousalSvg/3.svg",
//     description: "Includes Computer Science to prepare for IT and engineering fields."
//   },
//   {
//     slug: "csba",
//     title: "Computer Science, Statistics, Business Studies, Accountancy (CSBA)",
//     icon: "/svgs/homapageCarousalSvg/csba.svg",
//     description: "Combines Computer Science with core commerce subjects for modern business analysis."
//   },
//   {
//     slug: "bsba",
//     title: "Basic Maths, Statistics, Business Studies, Accountancy (BSBA)",
//     icon: "/svgs/homapageCarousalSvg/bsba.svg",
//     description: "Focuses on Math and Statistics for commerce careers in analytics and finance."
//   },
//   {
//     slug: "seba",
//     title: "Statistics, Economics, Business Studies, Accountancy (SEBA)",
//     icon: "/svgs/homapageCarousalSvg/seba.svg",
//     description: "Focuses on Economics and Statistics for planning and business strategy."
//   },
//   {
//     slug: "heba",
//     title: "History, Economics, Business Studies, Accountancy (HEBA)",
//     icon: "/svgs/homapageCarousalSvg/heba.svg",
//     description: "Combines History and Economics with core business subjects for policy and commerce."
//   }
// ];

interface DataItem {
  title: string;
  link: string;
}

   const streamsNav : DataItem[]= [
  {
    title: "Physics, Chemistry, Mathematics, Biology",
    link: "streams/pcmb"
  },
  {
    title: "Physics, Chemistry, Mathematics, Electronics",
    link: "streams/pcme"
  },
  {
    title: "Physics, Chemistry, Mathematics, Computer Science",
    link: "streams/pcmc"
  },
  {
    title: "Physics, Chemistry, Mathematics, Statistics",
    link: "streams/pcms"
  },





  {
    title: "History, Economics, Business Studies, Accountancy",
    link: "streams/heba"
  },
  {
    title: "Statistics, Economics, Business Studies, Accountancy",
    link: "streams/seba"
  },
  {
    title: "Basic Maths, Economics, Business Studies, Accountancy",
    link: "beba"
  },
  {
    title: "Basic Maths, Statistics, Business Studies, Accountancy",
    link: "bsba"
  },
  {
    title: "Computer Science, Statistics, Business Studies, Accountancy",
    link: "csba"
  }



]
export default streamsNav;
