"use client";

import React from 'react';
import styles from './Footer.module.scss';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.copyRight}>
          Copyright ⓒ 2024, CodeAndCreate - All Rights Reserved
        </div>

        <div className={styles.btnWrap}>
          <button type="button" title="페이스북"><FaFacebookF /></button>
          <button type="button" title="인스타그램"><FaInstagram /></button>
          <button type="button" title="트위터"><FaTwitter /></button>
        </div>
      </div>
    </div>
  )
}

export default Footer