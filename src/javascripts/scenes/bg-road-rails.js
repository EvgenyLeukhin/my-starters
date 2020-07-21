import ScrollMagic from 'scrollmagic';
import { Linear, TimelineLite, TweenMax } from 'gsap';

const makeBackgroundsRailScene = (triggerNumber) => {
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
    triggerElement: `#road-trigger-${triggerNumber}`,
    duration: 1000, // можно контролировать время с высотой триггера
  })
    .setTween(backgroundTimeline); // add animation to scroll
};

export default (container) => ([
  makeBackgroundsRailScene(1).addTo(container), // #road-trigger-1
  makeBackgroundsRailScene(2).addTo(container), // #road-trigger-2
  makeBackgroundsRailScene(3).addTo(container), // #road-trigger-3
  makeBackgroundsRailScene(4).addTo(container), // #road-trigger-4
  makeBackgroundsRailScene(5).addTo(container), // #road-trigger-5
  makeBackgroundsRailScene(6).addTo(container), // #road-trigger-6
  makeBackgroundsRailScene(7).addTo(container), // #road-trigger-7
  makeBackgroundsRailScene(8).addTo(container), // #road-trigger-8
  makeBackgroundsRailScene(9).addTo(container), // #road-trigger-9
  makeBackgroundsRailScene(10).addTo(container), // #road-trigger-10
]);
