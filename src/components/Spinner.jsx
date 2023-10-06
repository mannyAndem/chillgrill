import gsap from "gsap/all";
import { useEffect, useRef } from "react";

const Spinner = ({ options }) => {
  const spinnerRef = useRef();
  useEffect(() => {
    gsap.to(spinnerRef.current, {
      rotate: 360,
      duration: 2,
      ease: "ease-out",
      repeat: -1,
    });
  }, []);

  return (
    <div
      className={`z-0 spinner ${options.position} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-x-2 border-b-2 border-${options.color} rounded-full`}
      id="spinner"
      ref={spinnerRef}
      style={{
        height: options.size,
        width: options.size,
      }}
    ></div>
  );
};

export default Spinner;
