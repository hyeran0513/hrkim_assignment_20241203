'use client';

import React from "react";
import styles from "@/styles/About.module.scss";
import {
  FaPenNib,
  FaPaintBrush,
  FaPaintRoller,
  FaRulerCombined,
  FaPencilAlt,
  FaRegBuilding,
} from "react-icons/fa";

interface AboutData {
  icon: JSX.Element;
  title: string;
  content: string;
}

const About = () => {
  const data: AboutData[] = [
    {
      icon: <FaPenNib />,
      title: "Interior",
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      icon: <FaPaintBrush />,
      title: "Interior",
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      icon: <FaPaintRoller />,
      title: "Interior",
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      icon: <FaRulerCombined />,
      title: "Interior",
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      icon: <FaPencilAlt />,
      title: "Interior",
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      icon: <FaRegBuilding />,
      title: "Interior",
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  return (
    <div className={styles.page} id="about">
      <div className={styles.pageTitle}>About Us</div>

      <div className={styles.details}>
        {data.length > 0 ? (
          data.map((item, index) => (
            <div className={styles.info} key={index}>
              <div className={styles.title}>
                <span className={styles.icon}>{item.icon}</span>
                <span className={styles.txt}>{item.title}</span>
              </div>

              <div className={styles.content}>{item.content}</div>
            </div>
          ))
        ) : (
          <p>데이터가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default About;
