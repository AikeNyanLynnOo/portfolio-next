import { clsx } from "clsx";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ResponsiveContainer } from "./ResponsiveContainer";
import { Typography } from "../atoms/Typography";
import { FloatingLandingPanel } from "./FloatingLandingPanel";
import { LandingText } from "./LandingText";
import { Chip, Icon } from "@mui/material";
import { useEffect } from "react";
import { putOffsetTop } from "../store/slices/generalSlice";
import { useRef } from "react";
import Image from "next/image";
import { BlogCard } from "../molecules/BlogCard";
import { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Bubbles } from "./Bubbles";

// framer-motion
import { motion } from "framer-motion";

export const BlogsSection = ({
  children,
  scrollRef,
  customClasses,
  customStyles,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const ownRef = useRef(scrollRef || null);

  const { isLight } = useSelector((state) => state.theme);

  const dots = useMemo(() => {
    const randomArray = [];
    for (let i = 0; i < 4; i++) {
      randomArray.push(Math.floor(Math.random() * 25) + 1);
    }
    return randomArray;
  }, []);

  const blogsSectionClasses = useMemo(() => {
    return clsx({
      "[&>*]:z-10": true,
      // "h-screen": true,
      "min-h-[calc(100vh-80px)]": true,
      "text-ownBlack-100": true,
      "dark:text-white": true,
      flex: true,
      "flex-col": true,
      "items-center": true,
      ...customClasses,
    });
  }, [customClasses]);

  const blogTitleClasses = useMemo(() => {
    return clsx({
      "backdrop-blur-sm": true,
      "bg-white/20": true,
      "dark:bg-ownBlack-100/20": true,
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

  const blogs = useMemo(() => {
    return [
      {
        title:
          "Elevating React UIs with Design Tokens and MUI: A Comprehensive Guide",
        isNew: true,
        techs: [
          "Design Tokens",
          "Design System",
          "Style Dictionary",
          "React",
          "Material UI",
        ],
        introText:
          "React နဲ့ develop လုပ်တဲ့အခါ UI components တွေက reusable ဖြစ်ဖို့လိုသလို scalable, maintainable ဖြစ်ဖို့လည်း လိုပါတယ်။ UI/UX ဘက်က Design ‌အပြောင်းအလဲ ဖြစ်နိုင်ချေအတွက်ပါ ကြိုစဉ်းစားပြီး component တွေရေးကြရပါတယ်။",
        blogDate: "Feb 16, 2024",
        link: "",
        blogMedia: "/images/blogs/dt_ss.png",
        externalLink:
          "https://medium.com/@aikenyanlynnoo.dev/elevating-react-uis-with-design-tokens-and-mui-a-comprehensive-guide-e8f9ca00e072",
      },
      {
        title:
          "State Management Journey In React Apps (Redux, Redux Toolkit, Redux Thunk, Redux Sagas)",
        isNew: false,
        techs: ["Redux", "Redux Toolkit", " Redux Thunk", "Redux Sagas"],
        introText:
          "အရင်ဆုံး Redux ကို ဘာကြောင့်သုံးရတာလဲဆိုတာကို အရင်သိဖို့လိုပါတယ်။ အရင် က React မှာ state management လုပ်မယ်ဆိုရင် useState လို hooks တွေသုံးပြီးလုပ်ကြပါတယ်။ component level မှာ parent-to-child ပုံစံနဲ့ state တွေကိုပို့ပါတယ်။",
        blogDate: "Jan 11, 2024",
        link: "",
        blogMedia: "/images/blogs/sm_ss.png",
        externalLink:
          "https://medium.com/@aikenyanlynnoo.dev/state-management-journey-in-react-apps-redux-redux-toolkit-redux-thunk-redux-sagas-4d0cb82d8b34",
      },
    ];
  }, []);

  useEffect(() => {
    dispatch(
      putOffsetTop({
        property: "blogsSectionOffsetTop",
        value: ownRef.current.offsetTop,
      }),
    );
  }, [dispatch]);

  return (
    <ResponsiveContainer
      customClasses={{
        "bg-ownBlack-200": true,
        "dark:bg-ownBlack-100": true,
        "py-16": true,
        "box-border": true,
      }}
      scrollRef={ownRef}
    >
      <div className={blogsSectionClasses}>
        <h2 className={blogTitleClasses}>Blogs</h2>
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto z-10">
          <div className="grid xl:grid-cols-2 lg:gap-y-16 gap-10">
            {blogs.map((blog, idx) => (
              <Fragment key={idx}>
                <BlogCard
                  index={idx}
                  title={blog.title}
                  blogMedia={blog.blogMedia}
                  isNew={blog.isNew}
                  techs={blog.techs}
                  introText={blog.introText}
                  blogDate={blog.blogDate}
                  link={blog.link}
                  externalLink={blog.externalLink}
                />
              </Fragment>
            ))}
          </div>
        </div>
        <Link
          target="_blank"
          href="https://medium.com/@aikenyanlynnoo.dev"
          type="button"
          style={{
            // fontFamily: '"Varela Round", sans-serif',
          }}
          className="dark:text-ownBlack-100 flex items-center bg-gradient-to-r from-ownMint-100 via-ownMint-200 to-ownMint-200 hover:bg-gradient-to-br hover:ring-1 focus:outline-none font-medium rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2"
        >
          See More
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.01,
              type: "spring",
              stiffness: 500,
            }}
            viewport={{
              once: true,
            }}
            className="h-fit flex items-center"
          >
            <Icon
              style={{
                fontSize: "18px",
                marginLeft: "5px",
              }}
            >
              keyboard_arrow_right
            </Icon>
          </motion.div>
        </Link>
      </div>
      <Bubbles showIndices={dots} />
    </ResponsiveContainer>
  );
};
