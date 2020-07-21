import ScrollMagic from 'scrollmagic';
import { Linear, TimelineLite, TweenMax } from 'gsap';

const makeBackgroundsStationScene = (triggerNumber) => {
  const backgroundTimeline = new TimelineLite()
    .duration(1)
    .add([
      // selector of the el, duration, { parametrs }

      // rails
      TweenMax.fromTo('#background-rail', 1, {
        backgroundPosition: '0 0',
      }, {
        backgroundPosition: '-100% 0',
        ease: Linear.easeIn,
      }),
    ]);

  return new ScrollMagic.Scene({
    triggerElement: `#station-${triggerNumber}-trigger`,
    duration: triggerNumber !== 10 ? 6000 : 2500, // можно контролировать время с высотой триггера
  })
    .setTween(backgroundTimeline); // add animation to scroll
};

export default (container) => ([
  makeBackgroundsStationScene(1).addTo(container), // #station-1-trigger
  makeBackgroundsStationScene(2).addTo(container), // #station-2-trigger
  makeBackgroundsStationScene(3).addTo(container), // #station-3-trigger
  makeBackgroundsStationScene(4).addTo(container), // #station-3-trigger
  makeBackgroundsStationScene(5).addTo(container), // #station-3-trigger
  makeBackgroundsStationScene(6).addTo(container), // #station-3-trigger
  makeBackgroundsStationScene(7).addTo(container), // #station-3-trigger
  makeBackgroundsStationScene(8).addTo(container), // #station-3-trigger
  makeBackgroundsStationScene(9).addTo(container), // #station-3-trigger
  makeBackgroundsStationScene(10).addTo(container), // #station-3-trigger
]);
