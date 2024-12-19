/* eslint-disable @next/next/no-img-element */
"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import styles from "./HomePageSlideshow.module.css";
import { useState } from "react";

const slides = [
  "/image/background/delightful-deals.jpg",
  "/image/background/beauty-gifts.jpg",
  "/image/background/cheap-gifts.jpg",
  "/image/background/fitness-gifts.jpg",
  "/image/background/toys-deals.jpg",
];

export const HomePageSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const arrowClicked = (direction: number) => {
    const newSlide = currentSlide + direction;

    if (newSlide === slides.length) {
      setCurrentSlide(0);
    } else if (newSlide < 0) {
      setCurrentSlide(slides.length - 1);
    } else {
      setCurrentSlide(newSlide);
    }
  };

  return (
    <div className={styles.slideshow}>
      <span className={styles.leftArrow} onClick={() => arrowClicked(-1)}>
        <FaChevronLeft size={38} />
      </span>

      <span className={styles.rightArrow} onClick={() => arrowClicked(1)}>
        <FaChevronRight size={38} />
      </span>

      <img
        className={styles.background}
        alt=""
        src={slides[currentSlide]}
      />
      <div className={styles.fadeOut} />
    </div>
  );
};
