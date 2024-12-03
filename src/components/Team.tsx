"use client";

import React from "react";
import styles from "@/styles/Team.module.scss";

const Team = () => {
  const data = [
    {
      name: "John Smith",
      role: "CEO",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      profile: "/images/person-1.jpg",
    },
    {
      name: "Ann Brown",
      role: "Designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      profile: "/images/person-2.jpg",
    },
    {
      name: "Mary Doe",
      role: "Programmer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      profile: "/images/person-3.jpg",
    },
  ];

  return (
    <div className={styles.page} id="team">
      <div className={styles.pageTitle}>Our Team</div>

      <div className={styles.card}>
        {data.length > 0 ? (
          data.map((item, index) => (
            <div key={index} className={styles.cardItem}>
              <div className={styles.piece}></div>
              <div className={styles.piece}></div>
              <div className={styles.piece}></div>
              <div className={styles.piece}></div>
              <div className={styles.piece}></div>
              <div className={styles.piece}></div>
              <div className={styles.piece}></div>
              <div className={styles.piece}></div>
              <div className={styles.piece}></div>

              <div
                className={styles.cardItemInner}
                style={{ backgroundImage: `url(${item.profile})` }}
              >
                <div className={styles.details}>
                  <div className={styles.memberName}>{item.name}</div>
                  <div className={styles.role}>{item.role}</div>
                  <div className={styles.description}>{item.description}</div>

                  <button type="button" className={styles.btnReadMore}>
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>이미지가 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default Team;
