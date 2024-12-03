"use client";

import React from "react";
import styles from "@/styles/Team.module.scss";
import { teamData } from "@/data/teamData";

const Team = () => {
  return (
    <div className={styles.page} id="team">
      <div className={styles.pageTitle}>Our Team</div>

      <div className={styles.card}>
        {teamData.length > 0 ? (
          teamData.map((item, index) => (
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
