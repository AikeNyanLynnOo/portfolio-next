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

const allProjects = [
  {
    title: "Project 1",
    description:
      "Laboris ex ut veniam officia eiusmod do cupidatat exercitation in.",
    techs: ["HTML", "CSS"],
    liveLink: "live.com",
    githubLink: "github.com",
  },
  {
    title: "Project 2",
    description:
      "Laboris ex ut veniam officia eiusmod do cupidatat exercitation in.",
    techs: ["HTML", "CSS"],
    liveLink: "live.com",
    githubLink: "github.com",
  },
  {
    title: "Project 3",
    description:
      "Laboris ex ut veniam officia eiusmod do cupidatat exercitation in.",
    techs: ["HTML", "CSS"],
    liveLink: "live.com",
    githubLink: "github.com",
  },
  {
    title: "Project 4",
    description:
      "Laboris ex ut veniam officia eiusmod do cupidatat exercitation in.",
    techs: ["HTML", "CSS"],
    liveLink: "live.com",
    githubLink: "github.com",
  },
  {
    title: "Project 5",
    description:
      "Laboris ex ut veniam officia eiusmod do cupidatat exercitation in.",
    techs: ["HTML", "CSS"],
    liveLink: "live.com",
    githubLink: "github.com",
  },
  {
    title: "Project 6",
    description:
      "Laboris ex ut veniam officia eiusmod do cupidatat exercitation in.",
    techs: ["HTML", "CSS"],
    liveLink: "live.com",
    githubLink: "github.com",
  },
  {
    title: "Project 8",
    description:
      "Laboris ex ut veniam officia eiusmod do cupidatat exercitation in.",
    techs: ["HTML", "CSS"],
    liveLink: "live.com",
    githubLink: "github.com",
  },
  {
    title: "Project 9",
    description:
      "Laboris ex ut veniam officia eiusmod do cupidatat exercitation in.",
    techs: ["HTML", "CSS"],
    liveLink: "live.com",
    githubLink: "github.com",
  },
];

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

  const projects = useMemo(() => {
    return [
      {
        title: "Multiple Chioce Quiz App",
        introText:
          "You have full control over customizing quiz parameters like fields, difficulty, and time. Monitor remaining time, end the quiz at any point, and navigate freely through animated quiz panels. View results and score upon completion.",
        projectMedia: "/images/projects/quiz_ss.png",
        description: "",
        techs: [
          "ReactJS",
          "Typescript",
          "TailwindCSS",
          "Framer Motion",
          "Travia Quiz API",
        ],
        liveLink: "https://multiple-choice-quiz-game.netlify.app/",
        githubLink:
          "https://github.com/AikeNyanLynnOo/multiple-chioce-quizz-react",
      },
      {
        title: "Discord Website Clone",
        introText:
          "The project replicated Discord's website frontend, including navigation, animations, and responsive design for all devices, aiming for a seamless user experience akin to the original site.",
        projectMedia: "/images/projects/discord_ss.png",
        description: "",
        techs: ["NextJS", "Typescript", "TailwindCSS", "Framer Motion"],
        liveLink: "https://discord-site-clone-a1k3.netlify.app/",
        githubLink: "https://github.com/AikeNyanLynnOo/discord-clone-next",
      },
      {
        title: "JKT Myanmar International",
        introText:
          "A professional business website equipped with job application functionality. Utilizing Bootstrap, jQuery, and PHP technologies for seamless operation and user interaction.",
        projectMedia: "/images/projects/jkt_ss.png",
        description: "",
        techs: ["Bootstrap", "VanillaJS", "JQuery", "PHP"],
        liveLink: "https://jktmyanmarint.com/",
      },
      {
        title: "URL Shortener",
        introText:
          "Utilizing React, Tailwind CSS, and the ShrtCo API to shorten URLs efficiently. Additionally, implementing browser storage to retain recent shortened links for enhanced user experience upon returning to the application.",
        projectMedia: "/images/projects/shortener_ss.png",
        description: "",
        techs: ["ReactJS", "TailwindCSS", "Axios", "ShrtCode API"],
        liveLink: "https://url-shortener-a1k3.netlify.app/",
        githubLink: "https://github.com/AikeNyanLynnOo/url-shortener-react-api",
      },
      {
        title: "IP Address / Domain Tracker",
        introText:
          "Implementing advanced server location tracking functionality, seamlessly integrating with map services to pinpoint server locations based on user input of IP or domain addresses.",
        projectMedia: "/images/projects/tracker_ss.png",
        description: "",
        techs: ["ReactJS", "Netlify functions", "Geo IPify"],
        liveLink: "https://ip-tracker-a1k3.netlify.app/",
        githubLink: "https://github.com/AikeNyanLynnOo/ip-tracker",
      },
      {
        title: "Explore Nations",
        introText:
          "Effortlessly search by country name, whether full or partial, and filter by continents. Seamlessly toggle between light and dark themes while ensuring a responsive design for optimal user experience across devices.",
        projectMedia: "/images/projects/countries_ss.png",
        description: "",
        techs: ["ReactJS", "Netlify functions", "Geo IPify"],
        liveLink: "https://main--rest-countries-browser-a1k3.netlify.app/",
        githubLink:
          "https://github.com/AikeNyanLynnOo/rest-countries-api-theme-switcher",
      },
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
        companyName: "HAJ Co.,Ltd.",
        companyLink: "https://official.haj.co.jp/",
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

  const projectsSectionClasses = useMemo(() => {
    return clsx({
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
      "rounded-tl-xl": true,
      "rounded-br-xl": true,
      border: true,
      "border-ownMint-200": true,
      "px-5": true,
      "py-4": true,
      "lg:text-2xl": true,
      "text-xl": true,
      "font-thin": true,
      "w-fit": true,
      "mx-auto": true,
      "lg:mx-0": true,
    });
  }, []);

  // const skillsIconContainerClasses = useMemo(() => {
  //   return clsx({
  //     "lg:w-4/6": true,
  //     "md:w-5/6": true,
  //     "w-full": true,
  //     "mx-auto": true,
  //     "py-4": true,
  //     flex: true,
  //     "flex-wrap": true,
  //     "justify-center": true,
  //   });
  // }, []);

  const [active, setActive] = useState(0);

  const handleChange = useCallback((event, newValue) => {
    setActive(newValue);
  }, []);
  const tabItems = [
    {
      id: 1,
      title: "Projects",
      renderTabItem: () => <ProjectGrid projects={projects} />,
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
                customStyles={{
                  fontFamily: '"Varela Round", sans-serif',
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
            },
            "& .MuiTabs-indicator": {
              display: "flex",
              justifyContent: "center",
              backgroundColor: "transparent",
              height: "3px",
            },
            "& .MuiTabs-indicatorSpan": {
              maxWidth: 40,
              width: "100%",
              backgroundColor: isLight
                ? lightTheme.backgroundColor[400]
                : darkTheme.textColor[200],
            },
          }}
        />
      </div>
    </ResponsiveContainer>
  );
};
