import React, { useContext, useEffect, useState } from "react";
import { CarouselContext } from "pure-react-carousel";

export function MyComponentUsingContext({setCurrentSlideNumber}) {
  const carouselContext = useContext(CarouselContext);
  const [currentSlide, setCurrentSlide] = useState(
    carouselContext.state.currentSlide
  );
  useEffect(() => {
    console.log(currentSlide);
    function onChange() {
      setCurrentSlide(carouselContext.state.currentSlide);
      setCurrentSlideNumber(carouselContext.state.currentSlide)
    }
    carouselContext.subscribe(onChange);
    return () => carouselContext.unsubscribe(onChange);
  }, [carouselContext]);
  return null;
}
