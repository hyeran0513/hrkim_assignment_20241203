"use client";

import React from 'react';
import styles from "@/styles/About.module.scss";
import { aboutData } from "@/data/aboutData";

const About = () => {
  return (
    <div className={styles.page} id="about">
      <div className={styles.pageTitle}>About Us</div>

      <div className={styles.details}>
        {aboutData.length > 0 ? (
          aboutData.map((item, index) => (
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
