"use client";

import React, { useState } from "react";
import styles from "./SideBar.module.scss";
import { IoClose } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { useSidebar } from "@/context/SideBarContext";

const SideBar = () => {
  const { isOpen, closeSidebar } = useSidebar();

  // 스크롤 이벤트
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={`${styles.sideBar} ${isOpen ? styles.open : styles.closed}`}>
      <div className={styles.sideBarHeader}>
        <button
          type="button"
          className={styles.btnClose}
          onClick={closeSidebar}
        >
          <IoClose />
          <span className={styles.tooltip}>close</span>
        </button>
      </div>

      <div className={styles.sideBarBody}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <button onClick={() => scrollToSection("home")}>HOME</button>
          </li>
          <li className={styles.menuItem}>
            <button onClick={() => scrollToSection("about")}>About Us</button>
          </li>
          <li className={styles.menuItem}>
            <button onClick={() => scrollToSection("team")}>Team</button>
          </li>
          <li className={styles.menuItem}>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </li>
        </ul>
      </div>

      <div className={styles.sideBarFooter}>
        <div className={styles.btnWrap}>
          <button type="button" title="페이스북">
            <FaFacebookF />
          </button>
          <button type="button" title="인스타그램">
            <FaInstagram />
          </button>
          <button type="button" title="트위터">
            <FaTwitter />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
