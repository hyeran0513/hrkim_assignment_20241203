'use client';

import React, { useState } from "react";
import styles from "@/styles/Contact.module.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  // 입력값 변경 처리 함수
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // 해당 입력값에 맞는 상태 업데이트
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className={styles.page} id="contact">
      <div className={styles.container}>
        <div className={styles.decoration}></div>

        <div className={styles.formContainer}>
          <p className={styles.formTitle}>Contact</p>

          <form>
            <div className={styles.field}>
              <input 
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={formData.fullName ? styles.notEmpty : ''}
              />
              <span className={styles.fieldTxt}>FULL NAME</span>
            </div>

            <div className={styles.field}>
              <input 
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={formData.email ? styles.notEmpty : ''}
              />
              <span className={styles.fieldTxt}>EMAIL</span>
            </div>

            <div className={styles.field}>
              <input 
                type="text"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={formData.message ? styles.notEmpty : ''}
              />
              <span className={styles.fieldTxt}>MESSAGE</span>
            </div>

            <button type="button" className={styles.btnSubmit}>SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;