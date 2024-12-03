"use client";

import About from '@/components/About';
import Banner from '@/components/Banner';
import Contact from '@/components/Contact';
import Team from '@/components/Team';
import React from 'react';

const page = () => {
  return (
    <>
      <Banner />

      <About />

      <Team />

      <Contact />
    </>
  )
}

export default page