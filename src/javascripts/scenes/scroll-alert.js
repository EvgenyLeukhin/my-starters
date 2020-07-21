import ScrollMagic from 'scrollmagic';
import { Linear, TweenMax } from 'gsap';

const scrollAlertScene = () => {
  const scrollAlertTween = TweenMax.fromTo('#scroll-alert', 1, {
    x: window.innerWidth,
  }, {
    x: -window.innerWidth,
    ease: Linear.easeNone,
  });

  return new ScrollMagic.Scene({
    triggerElement: '#road-trigger-1',
    duration: 1000,
  })
    .setTween(scrollAlertTween);
};

export default (container) => ([
  scrollAlertScene()
    .addTo(container),
]);
