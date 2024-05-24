import { clsx } from "clsx";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ResponsiveContainer } from "./ResponsiveContainer";
import { Typography } from "../atoms/Typography";
import { FloatingLandingPanel } from "./FloatingLandingPanel";
import { LandingText } from "./LandingText";
import { Box, Chip, useMediaQuery, useTheme } from "@mui/material";
import { CommonTab } from "../molecules/CommonTab";
import { useState } from "react";
import { useCallback } from "react";
import { orange } from "tailwindcss/colors";
import { darkTheme, lightTheme } from "../Theme/styles";
import { ProjectGridSlider } from "../molecules/ProjectGridSlider";
import ProjectGrid from "../molecules/ProjectGrid";
import { useEffect } from "react";
import { putOffsetTop } from "../store/slices/generalSlice";
import { useRef } from "react";
import { ExpTimeline } from "./ExpTimeline";
import { ExpTimeline2 } from "./ExpTimeline2";
import { AchievementTimeline } from "./AchievementTimeLine";
import { Bubbles } from "./Bubbles";
import ProjectsContainer from "../molecules/ProjectsContainer";

export const ProjectsSection = ({
  children,
  scrollRef,
  customClasses,
  customStyles,
}) => {
  const dispatch = useDispatch();
  const ownRef = useRef(scrollRef || null);
  const { isLight } = useSelector((state) => state.theme);

  const theme = useTheme();
  const xl = useMediaQuery(theme.breakpoints.up("xl"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  const dots = useMemo(() => {
    const randomArray = [];
    for (let i = 0; i < 5; i++) {
      randomArray.push(Math.floor(Math.random() * 25) + 1);
    }
    return randomArray;
  }, []);

  const projects = useMemo(() => {
    return [
      {
        title: "CRM Web App",
        introText:
          "Collaborating with UI/UX & backends, I made the CRM Web App in 3 weeks. It is a working version of a Entrepreneur-facing Web App where Users (Entrepreneurs) can view programs, coaching sessions, receive and complete surveys from CRM platform.",
        projectMedia: "/images/projects/webapp_ss.png",
        description: "",
        techs: ["NextJS", "Material UI", "Redux Saga", "Redux Toolkit"],
        projectImages: [
          {
            title: "Login Page",
            src: "/images/projects/webapp/login.png",
          },
          {
            title: "Sign Up",
            src: "/images/projects/webapp/signup.png",
          },
          {
            title: "Register",
            src: "/images/projects/webapp/register.png",
          },
          {
            title: "Register Accept",
            src: "/images/projects/webapp/register_accept.png",
          },
          {
            title: "Side Drawer - Nav Bar",
            src: "/images/projects/webapp/navbar.png",
          },
          {
            title: "Programs View",
            src: "/images/projects/webapp/programs.png",
          },
          {
            title: "Mentorship View",
            src: "/images/projects/webapp/mentorship.png",
          },
          {
            title: "Pending Mentorship Sessions",
            src: "/images/projects/webapp/mentorship_pending.png",
          },
          {
            title: "Mentorship History",
            src: "/images/projects/webapp/mentorship_history.png",
          },
          {
            title: "Mentors",
            src: "/images/projects/webapp/mentors.png",
          },
          {
            title: "User Profile",
            src: "/images/projects/webapp/profile.png",
          },
          {
            title: "Profile Information",
            src: "/images/projects/webapp/profile_info.png",
          },
          {
            title: "Business Details",
            src: "/images/projects/webapp/business_details.png",
          },
          {
            title: "Change Password",
            src: "/images/projects/webapp/change_pwd.png",
          },
        ],
      },

      {
        title: "ONOW Enable CMS",
        introText:
          "From the frontend perspective, I spearheaded the development of the CMS using Next.js, Material UI, Redux Saga, and Redux Toolkit to manage diverse API requests seamlessly. We refined its interface to ensure user-friendly navigation and efficient content management.",
        projectMedia: "/images/projects/cms_ss.png",
        description: "",
        techs: [
          "NextJS",
          "Material UI",
          "Design Tokens",
          "Styled Dictionary",
          "Redux Saga",
          "Redux Toolkit",
        ],
        projectImages: [
          {
            title: "Login Page",
            src: "/images/projects/enable_cms/login.png",
          },
          {
            title: "User Profile",
            src: "/images/projects/enable_cms/user_profile.png",
          },
          {
            title: "Dashboard",
            src: "/images/projects/enable_cms/dashboard.png",
          },
          {
            title: "Products",
            src: "/images/projects/enable_cms/products.png",
          },
          {
            title: "Screen Views",
            src: "/images/projects/enable_cms/screen_view.png",
          },
          {
            title: "Data Attributes",
            src: "/images/projects/enable_cms/data_attribute.png",
          },
          {
            title: "Media Library",
            src: "/images/projects/enable_cms/media_library.png",
          },
          {
            title: "Media Browser",
            src: "/images/projects/enable_cms/media_browser.png",
          },
          {
            title: "Add New Media (Image)",
            src: "/images/projects/enable_cms/image_media.png",
          },
          {
            title: "Add New Media (Audio) ",
            src: "/images/projects/enable_cms/audio_media.png",
          },
          {
            title: "Add New Media (Video) ",
            src: "/images/projects/enable_cms/video_media.png",
          },
        ],
      },
      {
        title: "Design System",
        introText:
          "By integrating design tokens and employing design patterns such as ( the HOC and Render props etc.), I created highly reusable and adaptable UI components customizing/extending the MUI components. This project aimed to revolutionize UI development by offering a comprehensive set of guidelines and reusable components, facilitating seamless integration and consistency across all future products.",
        projectMedia: "/images/projects/design_system/ds.png",
        description: "",
        techs: [
          "React",
          "Material UI",
          "Design Tokens",
          "Styled Dictionary",
          "React Design Patterns",
          "StoryBook",
          "TypeScript",
        ],
        projectImages: [
          {
            title: "Design System in Figma",
            src: "/images/projects/design_system/figma.png",
          },
          {
            title: "Developed Design System in Frontend",
            src: "/images/projects/design_system/ds.png",
          },
        ],
      },
      {
        title: "Responsive Gallery",
        introText:
          "A responsive image gallery with transitions and animations showing a lightbox with gallery view. It is based on Unsplash API",
        projectMedia: "/images/projects/res_gallery_design.jpg",
        description: "",
        techs: [
          "NextJS 14",
          "SSR",
          "CSR",
          "Custom Hooks",
          "Redux-toolkit",
          "Redux-saga",
          "React Context",
          "TailwindCSS",
          "Material UI",
          "CSS animations",
          "Unsplash API",
        ],
        liveLink: "https://responsive-img-gallery-site.netlify.app/",
        githubLink:
          "https://github.com/AikeNyanLynnOo/image-gallery-search-website",
        projectImages: [
          {
            title: "Home Desktop View",
            src: "/images/projects/responsive_gallery/home_desktop.png",
          },
          {
            title: "Collections Grid View",
            src: "/images/projects/responsive_gallery/home_collections.png",
          },
          {
            title: "Home Mobile View",
            src: "/images/projects/responsive_gallery/home_mobile.png",
          },
          {
            title: "Search Results Desktop View",
            src: "/images/projects/responsive_gallery/search_results_desktop.png",
          },
          {
            title: "Search Results Mobile View",
            src: "/images/projects/responsive_gallery/search_results_mobile.png",
          },
          {
            title: "Light Box Desktop View",
            src: "/images/projects/responsive_gallery/lightbox_desktop.png",
          },
          {
            title: "Light Box Mobile View",
            src: "/images/projects/responsive_gallery/lightbox_mobile.png",
          },
        ],
      },
      {
        title: "Discord Website Clone",
        introText:
          "The project replicated Discord's website frontend, including navigation, animations, and responsive design for all devices, aiming for a seamless user experience akin to the original site.",
        projectMedia: "/images/projects/discord_design.jpg",
        description: "",
        techs: ["NextJS", "Typescript", "TailwindCSS", "Framer Motion"],
        liveLink: "https://aike-discordo-a1k3.netlify.app/",
        githubLink: "https://github.com/AikeNyanLynnOo/discord-clone-next",
        projectImages: [
          {
            title: "Home Page",
            src: "/images/projects/discord_clone/home_page.png",
          },
          {
            title: "Nitro Page",
            src: "/images/projects/discord_clone/nitro.png",
          },
          {
            title: "Discover Page",
            src: "/images/projects/discord_clone/discover.png",
          },
          {
            title: "Safety Page",
            src: "/images/projects/discord_clone/safety.png",
          },
          {
            title: "Support Page",
            src: "/images/projects/discord_clone/support.png",
          },
          {
            title: "Blog Page",
            src: "/images/projects/discord_clone/blog.png",
          },
          {
            title: "Home Mobile View",
            src: "/images/projects/discord_clone/home_responsive.png",
          },
          {
            title: "Navigation Mobile View",
            src: "/images/projects/discord_clone/nav_responsive.png",
          },
        ],
      },
      {
        title: "URL Shortener",
        introText:
          "Utilizing React, Tailwind CSS, and the own REST API to shorten URLs efficiently. Additionally, implementing browser storage to retain recent shortened links for enhanced user experience upon returning to the application.",
        projectMedia: "/images/projects/urlshort_design.jpg",
        description: "",
        techs: [
          "ReactJS",
          "TailwindCSS",
          "Axios",
          "NodeJS",
          "REST API",
          "MongoDB",
        ],
        liveLink: "https://url-shortener-a1k3.netlify.app/",
        githubLink: "https://github.com/AikeNyanLynnOo/url-shortener-react-api",
        projectImages: [
          {
            title: "Home Desktop View",
            src: "/images/projects/url_short/home_desktop.png",
          },
          {
            title: "Home Mobile View",
            src: "/images/projects/url_short/home_mobile.png",
          },
        ],
      },
      {
        title: "JKT Myanmar International",
        introText:
          "A professional business website equipped with job application functionality. Utilizing Bootstrap, jQuery, and PHP technologies for seamless operation and user interaction.",
        projectMedia: "/images/projects/jkt_design.jpg",
        description: "",
        techs: ["Bootstrap", "VanillaJS", "JQuery", "PHP"],
        liveLink: "https://jktmyanmarint.com/",
        projectImages: [
          {
            title: "Home Desktop View",
            src: "/images/projects/jkt/home_desk.png",
          },
          {
            title: "Home Mobile View",
            src: "/images/projects/jkt/home_mobile.png",
          },
        ],
      },

      // {
      //   title: "Multiple Chioce Quiz App",
      //   introText:
      //     "You have full control over customizing quiz parameters like fields, difficulty, and time. Monitor remaining time, end the quiz at any point, and navigate freely through animated quiz panels. View results and score upon completion.",
      //   projectMedia: "/images/projects/quiz_ss.png",
      //   description: "",
      //   techs: [
      //     "ReactJS",
      //     "Typescript",
      //     "TailwindCSS",
      //     "Framer Motion",
      //     "Travia Quiz API",
      //   ],
      //   liveLink: "https://multiple-choice-quiz-game.netlify.app/",
      //   githubLink:
      //     "https://github.com/AikeNyanLynnOo/multiple-chioce-quizz-react",
      //   projectImages: [
      //     {
      //       title: "Home Desktop",
      //       src: "/images/projects/quiz/home.png",
      //     },
      //     {
      //       title: "Taking Quiz",
      //       src: "/images/projects/quiz/take_quiz.png",
      //     },
      //     {
      //       title: "Results",
      //       src: "/images/projects/quiz/result.png",
      //     },
      //     {
      //       title: "Home Mobile View",
      //       src: "/images/projects/quiz/home_mobile.png",
      //     },
      //     {
      //       title: "Taking Quiz Mobile",
      //       src: "/images/projects/quiz/take_quiz_mobile.png",
      //     },
      //     {
      //       title: "Results Mobile View",
      //       src: "/images/projects/quiz/result_mobile.png",
      //     },
      //   ],
      // },
      // {
      //   title: "IP Address / Domain Tracker",
      //   introText:
      //     "Implementing advanced server location tracking functionality, seamlessly integrating with map services to pinpoint server locations based on user input of IP or domain addresses.",
      //   projectMedia: "/images/projects/tracker_ss.png",
      //   description: "",
      //   techs: ["ReactJS", "Netlify functions", "Geo IPify"],
      //   liveLink: "https://ip-tracker-a1k3.netlify.app/",
      //   githubLink: "https://github.com/AikeNyanLynnOo/ip-tracker",
      //   projectImages: [
      //     {
      //       title: "Desktop View",
      //       src: "/images/projects/ip_tracker/desktop.png",
      //     },
      //     {
      //       title: "Mobile View",
      //       src: "/images/projects/ip_tracker/mobile.png",
      //     },
      //   ],
      // },
      // {
      //   title: "Explore Nations",
      //   introText:
      //     "Effortlessly search by country name, whether full or partial, and filter by continents. Seamlessly toggle between light and dark themes while ensuring a responsive design for optimal user experience across devices.",
      //   projectMedia: "/images/projects/countries_ss.png",
      //   description: "",
      //   techs: ["ReactJS", "Netlify functions", "Geo IPify"],
      //   liveLink: "https://main--rest-countries-browser-a1k3.netlify.app/",
      //   githubLink:
      //     "https://github.com/AikeNyanLynnOo/rest-countries-api-theme-switcher",
      // },
    ];
  }, []);

  const experiences = useMemo(() => {
    return [
      {
        fromYear: "02/2023",
        toYear: "Present",
        jobTitle: "Frontend Web Developer",
        jobType: "Full-Time",
        jobLocation: "Yangon, Myanmar",
        description:
          "I specialize in developing content management systems using Next.js, Material UI, and Redux Saga, integrating with REST APIs for enhanced user experience. With expertise in design tokens and seamless production application, I collaborate closely with UI/UX engineers and excel in user authentication management, crafting highly reusable UI components.",
        companyName: "ONOW Myanmar",
        companyLink: "https://www.onow.com/",
        techs: [
          "Figma",
          "Super Nova",
          "Design Tokens",
          "NextJS",
          "MUI",
          "Redux toolkit + Saga",
          "REST API",
        ],
      },
      {
        fromYear: "2019",
        toYear: "Present",
        jobTitle: "Frontend Developer",
        jobType: "Freelance",
        jobLocation: "Yangon, Myanmar",
        description:
          "With extensive professional experience, I specialize in React development, proficiently utilizing Bootstrap, TailwindCSS, Framer Motion, and REST API integration to create dynamic and responsive web applications.",
        techs: [
          "ReactJS",
          "Bootstrap",
          "TailwindCSS",
          "Framer Motion",
          "REST API",
        ],
      },
      {
        fromYear: "2019",
        toYear: "Present",
        jobTitle: "API Developer",
        jobType: "Freelance",
        jobLocation: "Yangon, Myanmar",
        description:
          "Experienced Node.js developer proficient in Express.js and MongoDB. Specializing in JWT authentication, account registration, and authentication for secure and seamless user experiences.",
        techs: ["ExpressJS", "MongoDB", "JWT"],
      },
      {
        fromYear: "06/2020",
        toYear: "12/2022",
        jobTitle: "Full Stack Web Developer",
        jobType: "Full-Time",
        jobLocation: "Yangon, Myanmar",
        description:
          "Professionally trained in React, Node.js, Docker, and Google Cloud Platform, I specialize in web application development. Proficient in web crawlers and heavy JS libraries like Puppeteer and Cheerio, I ensure efficient data retrieval and manipulation. Leveraging technologies such as Cloud Run, BigQuery, and App Engine, I deliver scalable solutions that meet industry standards and client requirements.",
        companyName:
          "JKT Myanmar International Co.,Ltd.(Partnering with HAJ Co.,Ltd. Japan)",
        companyLink: "https://jktmyanmarint.com/",
        techs: [
          "ReactJS",
          "NodeJS",
          "Docker",
          "Google Cloud",
          "Big Query",
          "Cloud Run",
          "App Engine",
          "Puppeteer",
          "Cheerio",
        ],
      },
      {
        fromYear: "10/2019",
        toYear: "10/2019",
        jobTitle: "Internship",
        jobType: "Full-Time",
        jobLocation: "Yangon, Myanmar",
        description:
          "Trained and entrusted with responsibilities as a junior web developer, I excel in utilizing PHP and Vue.js to create dynamic and responsive web applications. My dedication to ongoing learning and development ensures that I contribute effectively to project success while continually enhancing my skills in these technologies.",
        companyName: "Ahtar Oo Co.,Ltd.",
        companyLink: "https://www.ahtaroo.com/",
        techs: ["PHP", "VueJS"],
      },
    ];
  }, []);

  const achievements = useMemo(() => {
    return [
      {
        icon: "school",
        title: "Bachelor of Computer Science",
        date: "2021",
        subTitle: "Software Engineering",
        description:
          "With a Bachelor of Computer Science degree from the University of Information Technology Myanmar (UIT), I am currently furthering my expertise through a major in Software Engineering at UIT. Passionate about developing and managing software systems, I actively engage in practical projects and competitions to refine my skills. Eager to contribute to innovative software solutions, I'm committed to leveraging my education and experiences for impactful advancements in the field.",
        org: "University of Information Technology (UIT)",
        // orgIcon: "school",
        orgLink: "https://www.uit.edu.mm/",
      },
      {
        icon: "emoji_events",
        title: "Frontend With React",
        date: "2020",
        subTitle:
          "The Hong Kong University of Science and Technology (On Coursera)",
        description:
          "This specialization equipped me with essential skills in React, including component-based architecture, state management, and building interactive user interfaces.",
        org: "Coursera",
        orgLink: "https://www.coursera.org/",
      },
      {
        icon: "emoji_events",
        title: "Fundamental of Information Technology Engineer",
        date: "2019",
        subTitle:
          "Information Technology Professionals Examination Council (ITPEC)",
        description:
          "The ITPEC FE Exam, based on the Japan IT Fundamental IT Engineers Examination, is available in English, Thai, Vietnamese, Mongolian, and Burmese. It assesses basic IT knowledge and skills, including program design and testing for information systems development projects.",
        org: "ITPEC",
        orgLink: "https://itpec.org/",
      },
      {
        icon: "emoji_events",
        title: "IT Passport",
        date: "2018",
        subTitle:
          "Information Technology Professionals Examination Council (ITPEC)",
        description:
          "The ITPEC Information Technology Passport Examination (ITPEC IP Exam) is modeled after the Japan Information Technology Passport Examination and is available in English, Thai, Vietnamese, and Mongolian. It tests individuals on fundamental IT knowledge essential for business tasks and operations.",
        org: "ITPEC",
        orgLink: "https://itpec.org/",
      },
    ];
  }, []);

  const projectsSectionClasses = useMemo(() => {
    return clsx({
      "[&>*]:z-10": true,
      // "h-screen": true,
      "min-h-[calc(100vh-80px)]": true,
      "text-ownBlack-100": true,
      "dark:text-white": true,
      "lg:flex": true,
      "flex-col": true,
      "justify-center": true,
      "items-center": true,
      block: true,
      ...customClasses,
    });
  }, [customClasses]);

  const projectTitleClasses = useMemo(() => {
    return clsx({
      "bg-white": true,
      "dark:bg-ownBlack-100": true,
      "rounded-tl-xl": true,
      "rounded-br-xl": true,
      border: true,
      "border-ownMint-200": true,
      "px-5": true,
      "py-4": true,
      "lg:text-2xl": true,
      "text-xl": true,
      // "font-thin": true,
      "w-fit": true,
      "mx-auto": true,
      "lg:mx-0": true,
    });
  }, []);

  const [active, setActive] = useState(0);
  const [projectImages, setProjectImages] = useState([]);

  const handleActivePrj = (index) => {
    setProjectImages(projects[index].projectImages);
  };

  const handleChange = useCallback((event, newValue) => {
    setActive(newValue);
  }, []);
  const tabItems = [
    {
      id: 1,
      title: "Projects",
      renderTabItem: () => (
        // <ProjectGrid
        //   projects={projects}
        //   handleActivePrj={handleActivePrj}
        //   projectImages={projectImages}
        // />
        <ProjectsContainer
          projects={projects}
          handleActivePrj={handleActivePrj}
          projectImages={projectImages}
        />
      ),
    },
    {
      id: 2,
      title: "Certs",
      renderTabItem: () => <AchievementTimeline achievements={achievements} />,
    },
    {
      id: 2,
      title: "Experience",
      renderTabItem: () => <ExpTimeline2 experiences={experiences} />,
    },
  ];

  useEffect(() => {
    dispatch(
      putOffsetTop({
        property: "projectsSectionOffsetTop",
        value: ownRef.current.offsetTop,
      }),
    );
  }, [dispatch]);

  return (
    <ResponsiveContainer
      customClasses={{
        "bg-ownBlack-100": true,
        "dark:bg-ownBlack-200": true,
        "py-16": true,
        "box-border": true,
      }}
      scrollRef={ownRef}
    >
      <div className={projectsSectionClasses}>
        <h2 className={projectTitleClasses}>Projects & Experience</h2>
        <CommonTab
          active={active}
          handleChange={handleChange}
          tabItems={tabItems}
          customStyles={{
            // border: "1px solid red",
            py: 1,
            borderRadius: "10px",
            width: "100%",
            // boxShadow: "0px 6px 34px 0px rgba(108, 108, 108, 0.25)",
            // boxShadow: "0px 2px 6px 0px rgba(22, 50, 79, 0.20)",
          }}
          renderCustomLabel={(tabItem, index) => (
            <Box
              sx={{
                textAlign: "center",
                borderRight:
                  index === tabItems.length - 1
                    ? "none"
                    : `1px solid ${isLight ? lightTheme.textColor[100] : darkTheme.textColor[100]}`,
                width: "100%",
                px: 5,
                my: 4,
              }}
            >
              <Typography
                text={tabItem.title}
                customClasses={{
                  "mb-2": true,
                }}
              />
            </Box>
          )}
          customTabStyles={{
            "& .MuiTabs-flexContainer": {
              display: "flex",
              justifyContent: "center",
            },
            "& .MuiTab-root": {
              p: 0,
              // backgroundColor : "pink",
              // border : "1px solid red",
              // minWidth : "180px",
            },
            "& .MuiTab-root .MuiBox-root": {
              // backgroundColor : "blue",
              px: 2,
              mx: 0,
            },
            "& .MuiTabs-indicator": {
              display: "flex",
              justifyContent: "center",
              backgroundColor: "transparent",
              height: "7px",
            },
            "& .MuiTabs-indicatorSpan": {
              maxWidth: 40,
              width: "100%",
              borderRadius: "5px",
              // backgroundColor: isLight
              //   ? lightTheme.backgroundColor[600]
              //   : darkTheme.textColor[200],
              backgroundColor: darkTheme.textColor[200],
            },
          }}
        />
      </div>
      {/* <Bubbles showIndices={dots} /> */}
    </ResponsiveContainer>
  );
};
