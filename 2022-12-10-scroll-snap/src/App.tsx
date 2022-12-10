import classNames from "classnames";
import { useCallback, useMemo, useRef, useState } from "react";
import { Chevron } from "./icons/chevron";

const slides = [
  {
    title: "One Tap Setup",
    img: "/slide-img/one-tap.jpeg",
    imageWidth: 343,
    imageHeight: 375,
  },
  {
    title: "Personalized Spatial Audio",
    img: "/slide-img/spatial-audio.jpeg",
    imageWidth: 211,
    imageHeight: 375,
  },
  {
    title: "Audio Sharing",
    img: "/slide-img/audio-sharing.jpeg",
    imageWidth: 265,
    imageHeight: 352,
    centered: true,
  },
  {
    title: "Automatic Switching",
    img: "/slide-img/automatic-switching.jpeg",
    imageWidth: 336,
    imageHeight: 100,
    centered: true,
  },
  {
    title: "Siri",
    img: "/slide-img/siri.jpeg",
    imageWidth: 168,
    imageHeight: 168,
    centered: true,
  },
  {
    title: "Accessibility",
    img: "/slide-img/a11y.jpeg",
    imageWidth: 135,
    imageHeight: 135,
    centered: true,
  },
];

const slideWidth = 400;
const slideMargin = 20;

const scrollToSlide = (slider: HTMLUListElement | null, slideIndex: number) => {
  if (!slider) return;
  slider.scrollTo({
    left: slideIndex * (slideWidth + slideMargin),
    behavior: "smooth",
  });
};

function App() {
  const sliderRef = useRef<HTMLUListElement | null>(null);
  const [sliderPosition, setSliderPosition] = useState(0);

  const currentSlide = useMemo(() => {
    return Math.floor(sliderPosition / (slideWidth + slideMargin));
  }, [sliderPosition]);

  const scrolledToEndOfSlider = useMemo(() => {
    if (!sliderRef.current) return false;
    return (
      sliderRef.current.scrollWidth -
        sliderRef.current.scrollLeft -
        sliderRef.current.clientWidth ===
      0
    );
  }, [sliderPosition]);

  const goToNextSlide = useCallback(() => {
    scrollToSlide(sliderRef.current, currentSlide + 1);
  }, [currentSlide]);

  const goToPreviousSlide = useCallback(() => {
    scrollToSlide(sliderRef.current, currentSlide - 1);
  }, [currentSlide]);

  return (
    <div className="bg-gray-200 min-h-screen font-sans py-16">
      <h2 className="font-semibold text-6xl text-center max-w-[800px] mx-auto mb-20">
        A magical connection to your devices.
      </h2>

      <div className="h-[500px] overflow-hidden">
        <ul
          ref={sliderRef}
          onScroll={(ev) => {
            setSliderPosition(ev.currentTarget.scrollLeft);
          }}
          className="flex h-[540px] pb-10 overflow-x-auto snap-x snap-mandatory"
        >
          {slides.map((slide) => (
            <li
              className="snap-start snap-always shrink-0 mr-5 last:mr-0"
              key={slide.title}
            >
              <div className="slide-center relative flex h-full flex-col bg-white w-[400px] rounded-2xl">
                <div
                  className={classNames(
                    "flex h-full justify-center",
                    slide.centered ? "items-center" : "items-start"
                  )}
                >
                  <img
                    src={slide.img}
                    alt={slide.title}
                    width={slide.imageWidth}
                    height={slide.imageHeight}
                  />
                </div>
                <h3 className="mt-auto text-2xl font-semibold p-6">
                  {slide.title}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center mt-4">
        <button
          disabled={currentSlide === 0}
          onClick={() => goToPreviousSlide()}
          className="disabled:text-gray-400 disabled:border-gray-400 w-8 h-8 border-2 border-black rounded-full flex items-center justify-center mr-2"
        >
          <span className="sr-only">Previous slide</span>
          <Chevron className="w-3 h-3" />
        </button>
        <button
          disabled={scrolledToEndOfSlider || currentSlide === slides.length}
          onClick={() => goToNextSlide()}
          className="disabled:text-gray-400 disabled:border-gray-400  w-8 h-8 border-2 border-black rounded-full flex items-center justify-center"
        >
          <span className="sr-only">Next slide</span>
          <Chevron className="rotate-180 w-3 h-3" />
        </button>
      </div>
    </div>
  );
}

export default App;
