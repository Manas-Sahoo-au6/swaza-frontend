import {
  CarouselContext,
  CarouselProvider,
  Dot,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import React, { useContext, useEffect, useState } from "react";
import { MyComponentUsingContext } from "./SliderHook";

const SliderComponent = ({ comp }) => {
  const carouselContext = useContext(CarouselContext);
  const [visibleSlides, setVisibleSlides] = useState(
    window.screen.width >= 600 ? 5 : 1
  );

  const [prevSlides, setPrevSlides] = useState(null);

  const [width, setWidth] = useState(window.screen.width);

  const handleResize = (e) => {
    setWidth(document.documentElement.clientWidth);
    document.documentElement.clientWidth >= 600
      ? setVisibleSlides(5)
      : setVisibleSlides(1);
  };

  const [currentSlide, setCurrentSlideNumber] = useState(0);
  useEffect(() => {
    console.log(currentSlide);
    // a.classList.remove("magnify", "imagex", "carousel")
    if (prevSlides) prevSlides.classList.remove("magnify", "imagex", "carousel");
    const d = document.querySelector(
      `.carousel__slide--visible:nth-child(n+${currentSlide + 3}) img`
    );
    setPrevSlides(d);
    d.classList.add("magnify", "imagex", "carousel");
  }, [currentSlide]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = comp.map((component, i) => {
    return <Slide index={i}>{component}</Slide>;
  });

  const cardsArray = Array.from({ length: comp.length }, (_, i) => i + 1);
  let dots = [<Dot slide={1} key={1} />];

  cardsArray.forEach((i) => {
    if (i % 3 === 0) dots.push(<Dot slide={i + 1} key={i + 1} />);
  });

  if (cardsArray[cardsArray.length - 1] % 3 === 0) {
    dots.pop();
  }
  return (
    <CarouselProvider
      naturalSlideWidth={73}
      naturalSlideHeight={window.screen.width <= 600 ? 40 : 90}
      totalSlides={comp.length}
      interval={2800}
      isPlaying={true}
      infinite={true}
      visibleSlides={visibleSlides}
      step={1}>
      <MyComponentUsingContext setCurrentSlideNumber={setCurrentSlideNumber} />
      <Slider>{slides}</Slider>
    </CarouselProvider>
  );
};

export default SliderComponent;
