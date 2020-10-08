import {useMotionValue} from "framer-motion";
import { useContext, useEffect } from "react";
import ModelsContext from "./ModelsContext";

export default function useWrapperScroll() {

  const {wrapperRef} = useContext(ModelsContext);
  const scrollY= useMotionValue(0);
  const scrollProgress = useMotionValue(0);


  useEffect(( )=> {

    const element = wrapperRef.current

    if (element) {
      const updateScrollValue= () => {
          const {scrollTop, scrollHeight, offsetHeight} = element;

          const fullScroll = scrollHeight - offsetHeight;

          scrollY.set(scrollTop); //px
          scrollProgress.set(scrollTop/fullScroll); /// 0 -1.


      }

      element.addEventListener('scroll', updateScrollValue);

      return () => element.removeEventListener('scroll', updateScrollValue);
    }

  }, [scrollProgress, scrollY, wrapperRef])


  return {scrollY, scrollProgress}

}