'use client';

import React from 'react'
import styles from '@/styles/Banner.module.scss'

const Banner = () => {
  return (
    <div className={styles.banner} id="home">
      <div className={styles.bannerTxt}>
        <div className={styles.title}>Architecture & Interior Design</div>
        <div className={styles.content}>Lorem ipsum dolor sit amet consectetur adipiscing elit.</div>

        <button type="button" className={styles.btnDiscover} data-split="text color">DISCOVER NOW</button>
      </div>
    </div>
  )
}

export default Banner