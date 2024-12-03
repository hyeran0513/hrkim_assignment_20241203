'use client';

import React from 'react'
import { BiMenu } from "react-icons/bi";
import styles from './Header.module.scss';
import { useSidebar } from "@/context/SideBarContext";

function Header() {
  const { openSidebar } = useSidebar();

  return (
    <div className={styles.header}>
      <div className={styles.headerInner}>
        <button type="button" className={styles.btnHamburger} onClick={openSidebar}>
          <BiMenu />
        </button>
      </div>
    </div>
  )
}

export default Header