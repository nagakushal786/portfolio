"use client";

import { useSwiper } from "swiper/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const WorkSlideBtns = ({
  containerStyles,
  btnStyles,
  showPrev = true,
  showNext = true,
}) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      {showPrev && (
        <button
          type="button"
          className={btnStyles}
          onClick={() => swiper.slidePrev()}
          aria-label="Previous project"
        >
          <BsChevronLeft />
        </button>
      )}

      {showNext && (
        <button
          type="button"
          className={btnStyles}
          onClick={() => swiper.slideNext()}
          aria-label="Next project"
        >
          <BsChevronRight />
        </button>
      )}
    </div>
  );
};

export default WorkSlideBtns;