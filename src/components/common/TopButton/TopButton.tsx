"use client";

import React from 'react';
import styles from './TopButton.module.scss';
import { FaArrowUp } from "react-icons/fa";

const TopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <>
      <button type="button" className={styles.btnTop} onClick={scrollToTop}><FaArrowUp /></button>
    </>
  )
}

export default TopButton