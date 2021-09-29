import gsap from "gsap";

const setAnimation = ({ current, next, onComplete, direction }) => {
  const [a,b,c,d] = direction < 0 
    ? [0, 100, -200, -100]
    : [0, -100, 0, -100]

  const tl = gsap.timeline({ paused: true, duration: 1, onComplete });
  tl.fromTo(current, { xPercent: a }, { xPercent: b });
  tl.fromTo(next, { xPercent: c }, { xPercent: d }, '<');

  return tl;
};

export default setAnimation;
